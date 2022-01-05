const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const { authenticateToken } = require("./auth");

// create post
router.post("/", authenticateToken, async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();

    // add post to user
    const user = await User.find({ username: req.body.username });
    if (user.length > 0) {
      user[0].posts.push(savedPost);
      await user[0].save();
    }
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
      if (req.body.username === post.username) {
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
router.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.user.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted.");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can only delete your post.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// get post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all posts
router.get("/", async (req, res) => {
  const username = req.query.username;
  const category = req.query.category;
  try {
    let posts;
    if (username && category) {
      posts = await Post.find({ categories: { $in: [category] }, username });
    } else if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({ categories: { $in: [category] } });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
