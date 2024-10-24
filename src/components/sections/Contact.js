import React from 'react';
import Navbar from '../layout/Navbar';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1>Contactez-nous</h1>
        <p>Nous sommes là pour vous aider. Remplissez le formulaire ci-dessous pour nous contacter.</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
