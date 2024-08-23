const jwt = require("jsonwebtoken");
const cors = require("cors");
const express = require("express");
const cookie = require("cookie-parser");
const userRouter = require("./auth/auth");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://mrasad10khan:mongodb@cluster0.yz0l1cn.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
