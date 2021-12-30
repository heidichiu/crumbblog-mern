const router = require("express").Router();
const Category = require("../models/Category");
const User = require("../models/User");
const { authenticateToken } = require("./auth");

// create category
router.post("/", authenticateToken, async (req, res) => {
  const newCat = new Category({ username: req.user.username, ...req.body });
  try {
    const savedCat = await newCat.save();
    const user = await User.findById(req.usre.userId);
    user.categories.push(savedCat);
    await user.save();

    res.status(200).json(savedCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all categories
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let cats;
    if (username) {
      cats = await Category.find({ username });
    } else {
      cats = await Category.find();
    }
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
