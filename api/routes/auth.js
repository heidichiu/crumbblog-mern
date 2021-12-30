const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

let tokenList = [];

dotenv.config();

// register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({ username: req.body.username, email: req.body.email, password: hashedPass });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("No user exists.");

    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("Your password is wrong.");

    const { password, ...others } = user._doc;
    const accessToken = generateAccessToken(user.username);
    const refreshToken = generateRefreshToken(user.username);
    response = { accessToken, refreshToken, ...others };

    tokenList.push(refreshToken);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

const generateAccessToken = (username) => {
  return jwt.sign({ username }, process.env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: 900 });
};

const generateRefreshToken = (username) => {
  return jwt.sign({ username }, process.env.JWT_REFRESH_TOKEN_SECRET);
};

// a middleware for authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};

// refresh token
app.post("/token/refresh", (req, res) => {
  //take the refresh token from the user
  const refreshToken = req.body.token;

  //send error if there is no token or it's invalid
  if (!refreshToken) return res.status(401).json("You are not authenticated.");
  if (!refreshToken in tokenList) {
    return res.status(403).json("Your refresh token is not valid.");
  }
  jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_SECRET, (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});

module.exports = router;
