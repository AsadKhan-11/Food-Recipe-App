import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  return (
    <>
      <button className="login-btn">Login</button>
      <form className="createUser">
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
