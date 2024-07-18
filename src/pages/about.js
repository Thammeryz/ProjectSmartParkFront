import React from "react";
import Nav from "../components/header";
import picture3 from '../Image/pic1.jpeg';
import picture4 from '../Image/pic2.jpeg';


function About() {
    return(
        <div>
            <div><Nav/></div>
            <div className="about-container">
      <section className="about-section">
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide a seamless and efficient parking experience for all users. 
            With our smart parking system, you can easily find and reserve parking spots in real-time.
          </p>
        </div>
        <div className="about-image">
          <img src={picture3} alt="pic2" />
        </div>
      </section>
      <section className="about-section reverse">
        <div className="about-text">
          <h3>Features</h3>
          <ul>
            <li>Real-time parking spot availability</li>
            <li>Easy reservation and payment</li>
            <li>Secure and monitored parking areas</li>
          </ul>
        </div>
        <div className="about-image">
          <img src={picture4} alt="pic2" />
        </div>
      </section>
    </div>
        </div>

    );
}

export default About;
