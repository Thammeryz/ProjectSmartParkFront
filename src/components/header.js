import React from "react";
import { Link } from "react-router-dom";

function nav(){
    return(
        <div className="nav">
            <div className="navigation">
                <div className="logo"><h1>SMART PACKING</h1></div>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/login"><li>Parking</li></Link>
                    <Link to="/about"><li>About</li></Link>
              
                </ul>
            </div>
        </div>
    );
}

export default nav;