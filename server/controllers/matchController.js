const Item = require("../models/Item");
const calculateScore = require("../utils/matcher");

exports.getMatches = async (req, res) => {
  const itemId = req.params.id;

  const currentItem = await Item.findById(itemId);

  // opposite type
  const targetType = currentItem.type === "lost" ? "found" : "lost";

  const items = await Item.find({ type: targetType });

  const matches = items.map(item => {
    const score = calculateScore(currentItem, item);
    return { item, score };
  });

  // filter + sort
  const filtered = matches
    .filter(m => m.score > 20)
    .sort((a, b) => b.score - a.score);

  res.json(filtered);
};
