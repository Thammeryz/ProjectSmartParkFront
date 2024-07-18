import React, { useEffect, useState } from "react";
import Nav from "../components/header";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PackingView() {
  const [parkingData, setParkingData] = useState([]);
  const [selectedParking, setSelectedParking] = useState(null);
  const [id, setid] = useState("");
  const [noSlot, setnoSlot] = useState("");
  const [hours, sethours] = useState("");
  const [price, setprice] = useState("");
  const [customerName, setcutomerName] = useState("");
  const [time, settime] = useState("");
  const [date, setdate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadPark();
  }, []);

  const loadPark = async () => {
    const result = await axios.get("http://localhost:8080/park/getpark");
    setParkingData(result.data);
  };

  const handleSelect = (parking) => {
    setSelectedParking(prevSelected => (prevSelected === parking ? null : parking));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Id:", id);
    console.log("NoSlot:", noSlot);
    console.log("Hours:", hours);
    console.log("Price:", price);
    console.log("CustomerName:", customerName);
    console.log("Time:", time);
    console.log("Date:", date);
    navigate('/about');
  };

const send =(e) =>{
  e.preventDefault();
  const request ={id,noSlot,hours,price,customerName,time,date};
  fetch ("http://localhost:8080/request/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(request),
  }).then(()=>{
    alert("You are successful make parking: Enjoy")
  })
}

  return (
    <div>
      <Nav />
      <div className="parking-list-container">
        <h1>Parking Options</h1>
        <table className="parking-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Parking Name</th>
              <th>Location</th>
              <th>Slot Number</th>
              <th>Hours</th>
              <th>Price</th>
              <th>Action</th>
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
                  <button onClick={() => handleSelect(parking)}>
                    {selectedParking === parking ? 'Deselect' : 'Select'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedParking && (
        <div className="request-form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label>ID</label>
              <input type="text" name="id" value={selectedParking.id} readOnlyonChange={(e) => setid(e.target.value)} />
            </div>
            <div>
              <label>Slot</label>
              <input type="text" name="slot" value={selectedParking.noSlot} readOnly onChange={(e) => setnoSlot(e.target.value)}/>
            </div>
            <div>
              <label>Hours</label>
              <input type="text" name="hours"value={selectedParking.hours}  onChange={(e) => sethours(e.target.value)}/>
            </div>
            <div>
              <label>Cost</label>
              <input type="text" name="cost"value={selectedParking.price}  onChange={(e) => setprice(e.target.value)} />
            </div>
            <div>
              <label>Customer Name</label>
              <input type="text" name="customerName"  value={customerName} onChange={(e) => setcutomerName(e.target.value)} />
            </div>
            <div>
              <label>TimeIn</label>
              <input type="time" name="time" value={time} onChange={(e) => settime(e.target.value)} />
            </div>
            <div>
              <label>Date</label>
              <input type="date" name="date" value={date} onChange={(e) => setdate(e.target.value)} />
            </div>
            <button onClick={send} type="submit">Send Request</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PackingView;