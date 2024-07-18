import React, { useState } from "react";
import Nav from "../components/header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = useState("");
  const [plateNUmber, setPlateNumber] = useState("");
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
  
    console.log("Full Name:", fullName);
    console.log("Plate Number:", plateNUmber);
    console.log("Username:", userName);
    console.log("Password:", password);
    navigate('login');
  };

const reg =(e) =>{
  e.preventDefault();
  const customer ={fullName,plateNUmber,userName,password};
  fetch ("http://localhost:8080/parking/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(customer),
  }).then(()=>{
    alert("You have succesful Rgister")
  })
}
  return (
    <div>
      <div><Nav /></div>
      <form onSubmit={handleRegister}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Plate Number:</label>
          <input
            type="text"
            name="plateNumber"
            value={plateNUmber}
            onChange={(e) => setPlateNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to='/login'>
        <button onClick=  {reg} type="submit">Register
        </button>
        </Link>
      </form>
    </div>
  );
}

export default Register;