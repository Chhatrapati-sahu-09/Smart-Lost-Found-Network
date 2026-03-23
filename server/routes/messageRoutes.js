const express = require("express");
const router = express.Router();
const {
  saveMessage,
  getRoomMessages,
} = require("../controllers/messageController");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, saveMessage);
router.get("/:roomId", auth, getRoomMessages);

module.exports = router;
