import React, { useState } from "react";
import "./Signup.css";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/auth/register", {
        name,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "User created successfully") {
          navigate("/auth/login");
        } else if (result.data === "User already exists") {
          setMessage("User already exists");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user-wrapper">
      <form className="createUser" onSubmit={Submit}>
        <h1>Add New User</h1>
        <div className="form-wrapper">
          <div className="user-info">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="user-info">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="user-info">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Add User</button>
        </div>
        {message && (
          <p className="err" style={{ color: "red" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Signup;
