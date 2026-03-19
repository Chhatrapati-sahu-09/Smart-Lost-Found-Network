const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: {
    type: String,
    enum: ["lost", "found"],
    required: true,
  },
  image: String,
  location: {
    address: String,
    lat: Number,
    lng: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: "open",
  },
});

module.exports = mongoose.model("Item", itemSchema);
