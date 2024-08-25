const express = require("express");
const recipeModel = require("../models/recipes");

const router = express.Router();

router.post("/create-recipes", async (req, res) => {
  recipeModel
    .create({
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      image: req.body.image,
      userId: req.body.userId,
    })
    .then((result) => {
      return res.json({ message: "successful", result });
    })
    .catch((err) => {
      return res.json(err);
    });
});

module.exports = router;
