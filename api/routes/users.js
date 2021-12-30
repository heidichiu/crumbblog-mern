const router = require("express").Router();
const User = require("../models/User");
const { authenticateToken } = require("./auth");

// update user
router.put("/:id", authenticateToken, async (req, res) => {
  try {
    res.status(200).json("Hello");
  } catch {}
});

// delete user

module.exports = router;
