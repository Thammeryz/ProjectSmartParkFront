import React from "react";
import Nav from "../components/header";
import Foot from "../components/footer";
import Background from '../Image/dara.jpeg';
import picture1 from '../Image/oth.jpeg';
import picture5 from '../Image/airport.jpeg';

function Home(){
    return(
        <div>
            <div><Nav/></div>
            <div>
            <div className="home-container">
              <h1>Welcome to the Smart Parking System</h1>
              <p>Find the best parking spots with ease and convenience.</p>
              <div className="parking-layout">
                <div className="parking-item">

            <img src={picture1} alt=""/>
          <h3>Parking Spot 4</h3>
          <p>Location: Michenzani</p>
        </div>
        <div className="parking-item">
          <img src={Background} alt="a" />
          <h3>Parking Spot 2</h3>
          <p>Location: Darajani</p>
        </div>
        <div className="parking-item">
          <img src={picture5} alt="dara.jpeg" />
          <h3>Parking Spot 3</h3>
          <p>Location: Airport</p>
        </div>
      </div>
    </div>
            </div>
            <div><Foot/></div>
        </div>
    );
}

export default Home;