const Message = require("../models/Message");

exports.saveMessage = async (req, res) => {
  try {
    const { roomId, text } = req.body;

    if (!roomId || !text) {
      return res.status(400).json({ msg: "roomId and text are required" });
    }

    const message = await Message.create({
      roomId,
      sender: req.user,
      text,
    });

    const populated = await message.populate("sender", "name email");

    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ msg: "Failed to save message" });
  }
};

exports.getRoomMessages = async (req, res) => {
  try {
    const { roomId } = req.params;

    const messages = await Message.find({ roomId })
      .sort({ createdAt: 1 })
      .populate("sender", "name email");

    res.json(messages);
  } catch (error) {
    res.status(500).json({ msg: "Failed to fetch messages" });
  }
};
