import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dash from "../pages/dash";

function Viewuser() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  

  useEffect(()=>{
    loadUse();
  },[])

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/parking/del/${id}`);
    loadUse();
  };
  const editUser = (user) => {
    setEditingUser(user);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({ ...editingUser, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/parking/update/${editingUser.id}`, editingUser);
    setEditingUser(null);
    loadUse();
  };


  const loadUse = async ()=>{
    const result = await axios.get("http://localhost:8080/parking/getCustomer");
    setUsers(result.data)
  }

  return (
    <div>
      <div><Dash/></div>
      <div className="parking-list-container">
        <h1>User Accounts</h1>
        <table className="parking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>FullName</th>
              <th>PlateNumber</th>
              <th>UserName</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index)=>(
                <tr>
                <th key={index}>{index+1}</th>
                <td>{user.fullName}</td>
                <td>{user.plateNUmber}</td>
                <td>{user.userName}</td>
                <td>{user.password}</td>
                <td>
                  <button onClick={() => editUser(user)}>Edit</button>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>

              </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      {editingUser && (
        <div>
          <form onSubmit={handleEditSubmit}>
            <input type="text" name="fullName" value={editingUser.fullName} onChange={handleChange} placeholder="Full Name" />
            <input type="text" name="plateNumber" value={editingUser.plateNUmber} onChange={handleChange} placeholder="Plate Number" />
            <input type="text" name="userName" value={editingUser.userName} onChange={handleChange} placeholder="User Name" />
            <input type="password" name="password" value={editingUser.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">Save</button>
          </form>
          
        </div>
        
      )}
    </div>
    
  );
}

export default Viewuser;
