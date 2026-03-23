const Item = require("../models/Item");

exports.createItem = async (req, res) => {
  try {
    const { title, description, type, address } = req.body;

    const item = new Item({
      title,
      description,
      type,
      image: req.file?.path || "",
      location: {
        address,
      },
      user: req.user.id,
    });

    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getItems = async (req, res) => {
  try {
    const items = await Item.find().populate("user", "name email");
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.markResolved = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { status: "closed" },
      { new: true },
    );
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.claimItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { claimedBy: req.user },
      { new: true },
    );
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
