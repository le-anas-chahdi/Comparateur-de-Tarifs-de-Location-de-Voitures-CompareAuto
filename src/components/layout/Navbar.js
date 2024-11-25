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
        <Link to="/commentcamarchepage">Comment Ca Marche Page</Link>
        <Link to="/aboutuspage">About Us Page</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/auth" className="cta-btn">Login / Sign Up</Link>
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
