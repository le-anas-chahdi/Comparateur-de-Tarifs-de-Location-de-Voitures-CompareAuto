import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="quick-links">
        <a href="#comparison">Comparison</a>
        <a href="#about-us">About Us</a>
        <a href="#faq">FAQ</a>
        <a href="#privacy-policy">Privacy Policy</a>
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
