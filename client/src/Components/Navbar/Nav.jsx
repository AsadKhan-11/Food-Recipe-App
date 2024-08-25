import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="links-head">
          <Link to="/" className="link">
            <h3 className="nav-links">Food Recipe</h3>
          </Link>

          <Link to="/recipes/create-recipes" className="link">
            <h4 className="nav-links">Create Recipe</h4>
          </Link>

          <Link to="/recipes/saved-recipes" className="link">
            <h4 className="nav-links">Saved Recipes</h4>
          </Link>
        </div>
        <Link to="/auth/register">
          <button className="login-btn">Signup</button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
