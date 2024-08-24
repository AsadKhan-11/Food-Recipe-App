import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  axios.defaults.withCredentials = true;

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/auth/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "No such user exists") {
          setMessage("No such user exists");
        }
        if (result.data === "Wrong password entered") {
          setMessage("Wrong password entered");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => setMessage(""), 3000);
  };
  return (
    <>
      <Link to="/auth/register">
        <button className="login-btn">Signup</button>
      </Link>
      <form className="createUser" onSubmit={Submit}>
        <h1>Login account</h1>{" "}
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
        {message && <p style={{ color: "red" }}> {message} </p>}
      </form>
    </>
  );
}

export default Login;
