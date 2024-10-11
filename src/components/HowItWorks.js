import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>Step 1</h3>
          <p>Enter your trip details (location, duration, distance).</p>
        </div>
        <div className="step">
          <h3>Step 2</h3>
          <p>Compare offers from multiple companies.</p>
        </div>
        <div className="step">
          <h3>Step 3</h3>
          <p>Choose the best deal and save money.</p>
        </div>
        <div className="step">
          <h3>Step 4</h3>
          <p>Book your rental directly.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
