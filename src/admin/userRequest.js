import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dash from "../pages/dash";

function User() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/request/del/${id}`);

    loadUsers();
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
    await axios.put(`http://localhost:8080/request/updaterequest/${editingUser.id}`, editingUser);

    setEditingUser(null);
    loadUsers();
  };

  const loadUsers = async () => {
    const renewsult = await axios.get("http://localhost:8080/request/getrequest");
   
    setUsers(renewsult.data);
  };

  return (
    <div>
      <div><Dash /></div>
      <div className="parking-list-container">
        <h1>Request View User</h1>
        <table className="parking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>No Slot</th>
              <th>Hours</th>
              <th>Price</th>
              <th>Customer Name</th>
              <th>Time</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.noSlot}</td>
                  <td>{user.hours}</td>
                  <td>{user.price}</td>
                  <td>{user.customerName}</td>
                  <td>{user.time}</td>
                  <td>{user.date}</td>
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
            <input type="text" name="noSlot" value={editingUser.noSlot} onChange={handleChange} placeholder="No Slot" />
            <input type="text" name="hours" value={editingUser.hours} onChange={handleChange} placeholder="Hours" />
            <input type="text" name="price" value={editingUser.price} onChange={handleChange} placeholder="Price" />
            <input type="text" name="customerName" value={editingUser.customerName} onChange={handleChange} placeholder="Customer Name" />
            <input type="text" name="time" value={editingUser.time} onChange={handleChange} placeholder="Time" />
            <input type="text" name="date" value={editingUser.date} onChange={handleChange} placeholder="Date" />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default User;
