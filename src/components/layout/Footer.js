import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about-us">About Us</Link>
        <Link to="/comparison">Comparison</Link>
        <Link to="/jobs">Rejoignez-nous</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/mentions-legales">Mentions Légales</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/privacy-policy">Politique de confidentialité</Link>
      </div>
      
      <div className="social-links">
        <a href="#facebook"><i className="fab fa-facebook"></i></a>
        <a href="#twitter"><i className="fab fa-twitter"></i></a>
        <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
      </div>
      <div className="contact-info">
        <p>Contact Us: contact@carrentalcompare.com</p>
      </div>
    </footer>
  );
};

export default Footer;
