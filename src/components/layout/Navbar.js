import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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
        <Link to="/jobs">Rejoignez-nous</Link>
        {!location.pathname.startsWith('/profile') && ( // Show login and sign-up if not on the profile page
          <>
            <Link to="/auth" className="cta-btn">Login / Sign Up</Link>
          </>
        )}
        {location.pathname.startsWith('/profile') && ( // Show profile-related links only on profile-related pages
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/changepassword">Change Password</Link>
            <Link to="/reservations">Reservations</Link>
          </>
        )}
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
