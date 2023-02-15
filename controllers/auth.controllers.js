const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    if (!email || !password || !username) {
      return res.status(400).json({
        message: "field(s) are missing",
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      res
        .status(400)
        .json({ message: "Please provide a valid email address." });
      return;
    }
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(password)) {
      res.status(400).json({
        message:
          "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
      });
      return;
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const createdUser = await User.create({
      email,
      password: hashedPassword,
      username,
    });

    res.send(createdUser);
  } catch (error) {
    res.send(error);
  }
};
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({
        message: "field(s) are missing",
      });
    }
    const foundUser = await User.findOne({ username });
    if (!foundUser) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    const isValidPassword = await bcryptjs.compare(
      password,
      foundUser.password
    );
    if (!isValidPassword) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const payload = {
      _id: foundUser._id,
    };
    const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
      algorithm: "HS256",
      expiresIn: "72h",
    });
    res.json({
      authToken: authToken,
      hi: "hello",
    });
  } catch (error) {
    res.send(error);
  }
};
const verify = async (req, res) => {
  const payloadId = req.payload._id;
  try {
    let foundUser = await User.findById(payloadId);
    if (foundUser) {
      res.send(foundUser);
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = { signup, login, verify };
