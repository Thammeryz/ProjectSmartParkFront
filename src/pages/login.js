import React, { useState } from "react";
import Nav from "../components/header";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
 
    console.log("Username:", username);
    console.log("Password:", password);

    navigate('/login/packingView');
  };

  return (
    <div>
      <div><Nav /></div>
      <h2>Login Page</h2>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input type="submit" value="Login" />
          <br /><br />

          <Link to='/login/Register'>
            <button type="button">Create Account</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
