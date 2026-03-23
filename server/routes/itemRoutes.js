const express = require("express");
const router = express.Router();
const {
  createItem,
  getItems,
  markResolved,
  claimItem,
} = require("../controllers/itemController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

router.post("/", authMiddleware, upload.single("image"), createItem);
router.get("/", getItems);
router.put("/resolve/:id", authMiddleware, markResolved);
router.put("/claim/:id", authMiddleware, claimItem);

module.exports = router;
