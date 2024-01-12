// Home.js

import React from 'react';
import './Home.css';

import car from './images/smart-parking-image.jpg';

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">Smart Car Parking System</h1>
      <img
        src={car}
        alt="Smart Car Parking System"
        className="landing-image"
      />
      <p className="description">
        Welcome to the future of parking! Our Smart Car Parking System utilizes advanced sensors and technology
        to make parking hassle-free and efficient. Say goodbye to the frustration of finding a parking spot.
      </p>
      <ul className="features">
        <li>Real-time parking availability</li>
        <li>Easy booking and payment</li>
        <li>Optimized parking space utilization</li>
        <li>Environmentally friendly</li>
      </ul>
    </div>
  );
};

export default Home;
