const express = require("express");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json("User already exists");
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hash,
    });

    await newUser.save();

    return res.status(201).json("User created successfully");
  } catch (error) {
    console.error(error);
    return res.status(500).json("An error occurred");
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (user) {
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json("Wrong password entered");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.cookie("token", token, { httpOnly: true });
    return res.json({ message: "Successful login", id: user._id });
  } else {
    return res.json("No such user exists");
  }
});

module.exports = router;
