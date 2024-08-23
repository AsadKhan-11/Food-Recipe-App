const mongoose = require("mongoose");
const express = require("express");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json("User already exists");
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

module.exports = router;
