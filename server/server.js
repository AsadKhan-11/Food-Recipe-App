const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const cookie = require("cookie-parser");
const userRouter = require("./auth/auth");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const uri = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.use("/auth", userRouter);

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
