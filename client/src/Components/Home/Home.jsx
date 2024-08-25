import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./Home.css";

function Home() {
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/recipes/recipe")
      .then((result) => {
        setRecipe(result.data);
        console.log(recipe);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="user-wrapper">
      <div className="recipe-wrapper">
        <h1 className="recipe-header">Recipes</h1>
        {recipe.map((recipes, index) => (
          <div className="recipes-conatiner" key={index}>
            <h1 className="recipe-name">{recipes.name}</h1>
            <h1 className="recipe-description">{recipes.description}</h1>
            <h1 className="recipe-ingrerdients">{recipes.ingredients}</h1>
            <img src="" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
