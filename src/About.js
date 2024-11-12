// About.js
import React from 'react';
import './About.css'; // Connects About.css to About.js

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Us</h1>
      <p className="about-content">
        Welcome to Cake Shop! We offer a wide variety of cakes for all occasions. Our team is dedicated to bringing joy to your celebrations with delicious, handcrafted cakes.
      </p>
      <img src={exampleImage} alt="Delicious cake" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
}

export default About;
