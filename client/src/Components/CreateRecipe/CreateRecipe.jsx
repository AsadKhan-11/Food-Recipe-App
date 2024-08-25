import React, { useState } from "react";
import "./CreateRecipe.css";
import axios from "axios";

function CreateRecipe() {
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    ingredients: "",
    image: "",
    userId: window.localStorage.getItem("id"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRecipe({ ...recipe, [name]: value });
    console.log(recipe);
  };

  const Submit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/recipes/create-recipes", recipe)
      .then((result) => {
        console.log(result);
        if (result.data.message === "successful")
          alert("Recipe added successful");
        else {
          alert("Could not add recipe");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user-wrapper">
      <form className="createUser" onSubmit={Submit}>
        <h1>Create Recipe</h1>
        <div className="form-wrapper">
          <div className="user-info">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="user-info">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter your email"
              required
              name="description"
              onChange={handleChange}
            />
          </div>
          <div className="user-info">
            <label htmlFor="">Ingredients</label>
            <input
              type="text"
              placeholder="Enter password"
              required
              name="ingredients"
              onChange={handleChange}
            />
          </div>

          <div className="user-info">
            <label htmlFor="">Image</label>
            <input
              type="text"
              placeholder="Enter Image URL"
              required
              name="image"
              onChange={handleChange}
            />
          </div>

          <button type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  );
}

export default CreateRecipe;
