import React, { useState } from "react";
import "./Signup.css";

import axios from "axios";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const Submit = (e) => {
    e.preventDefaults();

    axios
      .post("http://localhost/auth/register", { name, email, password })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button className="login-btn">Login</button>
      <form className="createUser" onSubmit={Submit}>
        <h1>Add New User</h1>
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
        {message && <p style={{ color: err ? "red" : "green" }}> {message} </p>}
      </form>
    </>
  );
}

export default Signup;
