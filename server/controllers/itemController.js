const Item = require("../models/Item");

// CREATE ITEM
exports.createItem = async (req, res) => {
  try {
    const { title, description, type, address } = req.body;

    const item = await Item.create({
      title,
      description,
      type,
      location: { address },
      image: req.file?.path,
      user: req.user,
    });

    res.json(item);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET ALL ITEMS
exports.getItems = async (req, res) => {
  const items = await Item.find().populate("user", "name");
  res.json(items);
};
