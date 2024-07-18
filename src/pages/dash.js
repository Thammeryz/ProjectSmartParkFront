import React from "react";
import { Link } from "react-router-dom";

const Dash = ()=>{

    return(
        <div className="nav">
            <div className="addnav">
            <div className="logo"><h1>Admin Dashboard</h1></div>
      <ul>
          <Link to="/AddPark" ><li>Create Parking</li></Link>
          <Link to="/Viewuser"><li>View User</li></Link>
          <Link to="/User" > <li>View Request </li></Link>
      </ul>
      </div>
        </div>
    );
}

export default Dash;