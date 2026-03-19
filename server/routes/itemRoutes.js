const express = require("express");
const router = express.Router();

const { createItem, getItems } = require("../controllers/itemController");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

router.post("/", auth, upload.single("image"), createItem);
router.get("/", getItems);

module.exports = router;
