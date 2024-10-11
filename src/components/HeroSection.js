import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Find the Best Car Rental Deals Across France</h1>
        <p>Compare rental car prices from top companies and find the perfect vehicle for your trip.</p>
        <Link to="/comparison" className="cta-btn">Compare Now</Link>
      </div>
    </div>
  );
};

export default HeroSection;
