import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

export default function PostItem() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "lost",
    address: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (image) data.append("image", image);

    await API.post("/items", data);
    alert("Item posted!");
  };

  return (
    <>
      <Navbar />

      <div className="max-w-md mx-auto mt-6 p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Post Item</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full border p-2"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <textarea
            className="w-full border p-2"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <select
            className="w-full border p-2"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="lost">Lost</option>
            <option value="found">Found</option>
          </select>

          <input
            className="w-full border p-2"
            placeholder="Location"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />

          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              setImage(file);
              if (file) {
                setPreview(URL.createObjectURL(file));
              }
            }}
          />

          {preview && (
            <div className="mt-3 border rounded p-2">
              <img src={preview} alt="Preview" className="w-full max-h-48 object-cover rounded" />
            </div>
          )}

          <button className="w-full bg-black text-white p-2">Submit</button>
        </form>
      </div>
    </>
  );
}
