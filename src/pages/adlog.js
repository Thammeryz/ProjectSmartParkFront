
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:",username);
    console.log("Password:",password);

    navigate('/adlog/dashboard');
  };

  /*const adreg =(e)=>{
    e.preventDefault();
    const admin ={username,password};
    fetch("http://localhost:8080/admin/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(admin),
    }).then(()=>{
      alert("Admin Added Sucessfull")
    })
  }*/

  return (
    <div>
      <h2>Admin Login</h2>
      <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div >
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="Dash">
        <button  type="submit">Login</button>
        </Link>
      </form>
      </div>
    </div>
  );
}

export default AdminLogin;


/*import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post('https://localhost:8080/admin/login', {
        username,
        password
      });
      if (response.status === 200) {
        navigate('/AdminLogin/Dash');
      } else {
        alert('Login failed. ');
      }
    } catch (error) {
      alert('Login failed.');
    }
    console.log("Username:",username);
    console.log("Password:",password);
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;*/