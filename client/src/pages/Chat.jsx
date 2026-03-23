import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import socket from "../socket";
import API from "../services/api";

export default function Chat() {
  const { roomId } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatBoxRef = useRef(null);

  const userId = useMemo(() => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
      return JSON.parse(atob(token.split(".")[1])).id;
    } catch {
      return null;
    }
  }, []);

  useEffect(() => {
    if (!roomId) return;

    socket.emit("joinRoom", roomId);

    API.get(`/messages/${roomId}`)
      .then((res) => setMessages(res.data))
      .catch(() => setMessages([]));

    const handleReceiveMessage = (msg) => {
      setMessages((prev) => [
        ...prev,
        {
          text: msg.text,
          sender: msg.sender,
          createdAt: msg.createdAt || new Date().toISOString(),
        },
      ]);
    };

    socket.on("receiveMessage", handleReceiveMessage);

    return () => socket.off("receiveMessage", handleReceiveMessage);
  }, [roomId]);

  useEffect(() => {
    const chatBox = chatBoxRef.current;
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = message.trim();
    if (!trimmed || !roomId) return;

    const msgData = {
      roomId,
      message: trimmed,
      sender: userId,
    };

    socket.emit("sendMessage", msgData);

    try {
      const res = await API.post("/messages", {
        roomId,
        text: trimmed,
      });

      // Normalize with socket payload shape for rendering consistency.
      const saved = {
        text: res.data.text,
        sender: res.data.sender?._id || userId,
        createdAt: res.data.createdAt,
      };

      setMessages((prev) => {
        const alreadyExists = prev.some(
          (m) =>
            m.text === saved.text &&
            (m.sender?._id || m.sender) ===
              (saved.sender?._id || saved.sender) &&
            Math.abs(new Date(m.createdAt) - new Date(saved.createdAt)) < 2000,
        );

        return alreadyExists ? prev : [...prev, saved];
      });
    } catch {
      // Keep optimistic socket message if API call fails.
    }

    setMessage("");
  };

  const getSenderId = (sender) =>
    typeof sender === "string" ? sender : sender?._id;

  return (
    <>
      <Navbar />
      <div className="p-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Chat</h2>

        <div
          ref={chatBoxRef}
          id="chatBox"
          className="h-80 overflow-y-scroll border rounded p-3 mb-3 bg-gray-50"
        >
          {messages.length ? (
            messages.map((msg, i) => {
              const isOwn = getSenderId(msg.sender) === userId;
              return (
                <div key={`${msg.createdAt || i}-${i}`} className="mb-2">
                  <p
                    className={`max-w-[80%] px-3 py-2 rounded inline-block ${
                      isOwn
                        ? "ml-auto block bg-blue-500 text-white text-right"
                        : "bg-white border text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No messages yet. Start the chat.</p>
          )}
        </div>

        <div className="flex gap-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            className="border p-2 flex-1 rounded"
            placeholder="Type a message"
          />

          <button
            onClick={sendMessage}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
