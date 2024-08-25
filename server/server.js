const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const userRouter = require("./auth/auth");
const recipeRouter = require("./auth/recipe");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
const uri = process.env.MONGODB_URI;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
