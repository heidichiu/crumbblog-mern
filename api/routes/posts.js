const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const { authenticateToken } = require("./auth");

// create post
router.post("/", authenticateToken, async (req, res) => {
  const newPost = new Post({ ...req.body, username: req.user.username });
  try {
    const savedPost = await newPost.save();

    // add post to user
    const user = await User.findById(req.user.userId);
    user.posts.push(savedPost);
    await user.save();

    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update post
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    try {
      if (req.user.username === post.username) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can only update your post.");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete post
router.delete("/:id", authenticateToken, async (req, res) => {});

// get post
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
