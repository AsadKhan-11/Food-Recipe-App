import { useState } from "react";
import "./App.css";
import Signup from "./Components/Singup/Signup";
import Login from "./Components/Login/Login";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";
import CreateRecipe from "./Components/CreateRecipe/CreateRecipe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/auth/register" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/recipes/create-recipes" element={<CreateRecipe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
