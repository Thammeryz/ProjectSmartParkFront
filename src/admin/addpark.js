/*import React, { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddPark() {

  const [parkingName, setparkingName] = useState("");
  const [location, setlocation] = useState("");
  const [noSlot, setnoSlot] = useState("");
  const [hours, sethours] = useState("");
  const [price, setprice] = useState("");
  const navigate = useNavigate();

//data view
  const [parkingData, setParkingData] = useState([]);
  useEffect(() => {
    loadPark();
  }, []);

  const loadPark = async () => {
    const result = await axios.get("http://localhost:8080/park/getpark");
    setParkingData(result.data);
  };

//continue coding
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("parkingname:", parkingName);
    console.log("location:", location);
    console.log("noslot:", noSlot);
    console.log("hours:", hours);
    console.log("price:", price);


   navigate('/dashboard');
  };
  

const go =(e) =>{
  e.preventDefault();
  const parkingslot ={parkingName,location,noSlot,hours,price };
  fetch ("http://localhost:8080/park/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(parkingslot),
  }).then(()=>{
    alert("Data added")
  })

  
}

  return (
    <div>
      <div className="parking-list-container">
        <h1>Parking Detail</h1>
        <table className="parking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name of Parking</th>
              <th>Location</th>
              <th>Number of Slots</th>
              <th>Hours</th>
              <th>Total Price</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {parkingData.map((parking, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{parking.parkingName}</td>
                <td>{parking.location}</td>
                <td>{parking.noSlot}</td>
                <td>{parking.hours}</td>
                <td>{parking.price}</td>
                <td>
                  
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1>Add Parking Slot</h1>
        <form onSubmit={handleSubmit}>
          <label>NameOfParking:</label>
          <input type="text" name="name" value={parkingName} onChange={(e) => setparkingName(e.target.value)} /><br />
          <label>Location:</label>
          <input type="text" name="location" value={location} onChange={(e) => setlocation(e.target.value)} /><br />
          <label>Number of Slots:</label>
          <input type="number" name="numberOfSlots" value={noSlot} onChange={(e) => setnoSlot(e.target.value)} /><br />
          <label>Hours:</label>
          <input type="text" name="hours" value={hours} onChange={(e) => sethours(e.target.value)} /><br />
          <label>Total Price:</label>
          <input type="text" name="totalPrice" value={price} onChange={(e) => setprice(e.target.value)} /><br />
          <button onClick={go} type="submit">Add Parking Slot</button>
        </form>

      </div>
      
    </div>
  );
}

export default AddPark;*/


import Dash from "../pages/dash";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddPark() {
  const [parkingName, setParkingName] = useState("");
  const [location, setLocation] = useState("");
  const [noSlot, setNoSlot] = useState("");
  const [hours, setHours] = useState("");
  const [price, setPrice] = useState("");
  const [editingParking, setEditingParking] = useState(null); // State to manage editing
  const [parkingData, setParkingData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadPark();
  }, []);

  const loadPark = async () => {
    try {
      const response = await axios.get("http://localhost:8080/park/getpark");
      setParkingData(response.data);
    } catch (error) {
      console.error('Error loading parking data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newParking = { parkingName, location, noSlot, hours, price };
    try {
      const response = await axios.post("http://localhost:8080/park/add", newParking);
      console.log("Parking slot added:", response.data);
      alert("Parking slot added successfully!");
      navigate('/AddPark');
    } catch (error) {
      console.error('Error adding parking slot:', error);
      alert("Failed to add parking slot. Please try again.");
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/park/updatepark/${editingParking.id}`, editingParking);
      setEditingParking(null);
      loadPark();
      alert("Parking slot updated successfully!");
    } catch (error) {
      console.error('Error updating parking slot:', error);
      alert("Failed to update parking slot. Please try again.");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/park/delpark/${id}`);
      loadPark();
      alert("Parking slot deleted successfully!");
    } catch (error) {
      console.error('Error deleting parking slot:', error);
      alert("Failed to delete parking slot. Please try again.");
    }
  };

  const handleEditClick = (parking) => {
    setEditingParking({ ...parking });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingParking({ ...editingParking, [name]: value });
  };

  return (
    <div>
      <div><Dash/></div>
      <div className="parking-list-container">
        <h1>Parking Details</h1>
        <table className="parking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name of Parking</th>
              <th>Location</th>
              <th>Number of Slots</th>
              <th>Hours</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parkingData.map((parking, index) => (
              <tr key={index}>
                <td>{parking.id}</td>
                <td>{parking.parkingName}</td>
                <td>{parking.location}</td>
                <td>{parking.noSlot}</td>
                <td>{parking.hours}</td>
                <td>{parking.price}</td>
                <td>
                  {editingParking && editingParking.id === parking.id ? (
                    <form onSubmit={handleEditSubmit}>
                      <input type="text" name="parkingName" value={editingParking.parkingName} onChange={handleChange} />
                      <input type="text" name="location" value={editingParking.location} onChange={handleChange} />
                      <input type="number" name="noSlot" value={editingParking.noSlot} onChange={handleChange} />
                      <input type="text" name="hours" value={editingParking.hours} onChange={handleChange} />
                      <input type="text" name="price" value={editingParking.price} onChange={handleChange} />
                      <button type="submit">Save</button>
                    </form>
                  ) : (
                    <div>
                      <button onClick={() => handleEditClick(parking)}>Edit</button>
                      <button onClick={() => deleteUser(parking.id)}>Delete</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1>Add Parking Slot</h1>
        <form onSubmit={handleSubmit}>
          <label>NameOfParking:</label>
          <input type="text" name="parkingName" value={parkingName} onChange={(e) => setParkingName(e.target.value)} /><br />
          <label>Location:</label>
          <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} /><br />
          <label>Number of Slots:</label>
          <input type="number" name="noSlot" value={noSlot} onChange={(e) => setNoSlot(e.target.value)} /><br />
          <label>Hours:</label>
          <input type="text" name="hours" value={hours} onChange={(e) => setHours(e.target.value)} /><br />
          <label>Total Price:</label>
          <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
          <button type="submit">Add Parking Slot</button>
        </form>
      </div>

    </div>
  );
}

export default AddPark;
