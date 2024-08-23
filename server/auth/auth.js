const mongoose = require("mongoose");
const express = require("express");
const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const user = userModel.findOne({ email });

  if (user) {
    return res.json("User already exists");
  }

  const hash = bcrypt.hash(password, 10);
  const newUser = new userModel({
    username: username,
    email: email,
    password: hash,
  });

  newUser.save();
  return res.json("User created successfuly");
});

module.exports = router;
