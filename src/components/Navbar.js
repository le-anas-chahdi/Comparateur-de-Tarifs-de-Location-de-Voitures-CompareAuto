import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">CarRentalCompare</Link>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Welcome</Link>
        <Link to="/comparison">Comparison</Link>
        <a href="#how-it-works">How It Works</a>
        <a href="#about-us">About Us</a>
        <a href="#contact">Contact</a>
        <Link to="/login" className="cta-btn">Login / Sign Up</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
