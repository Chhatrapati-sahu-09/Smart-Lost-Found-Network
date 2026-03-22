const express = require("express");
const router = express.Router();
const {
  createItem,
  getItems,
  markResolved,
} = require("../controllers/itemController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

router.post("/", authMiddleware, upload.single("image"), createItem);
router.get("/", getItems);
router.put("/resolve/:id", authMiddleware, markResolved);

module.exports = router;
