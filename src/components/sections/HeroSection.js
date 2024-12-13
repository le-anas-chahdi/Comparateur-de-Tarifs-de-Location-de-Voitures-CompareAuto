import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import bgImage from '../../images/bg.png';

const HeroSection = () => {
  return (
    <div className="hero-section"   
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundsize: 'cover',
      backgroundposition: 'center',
      display: 'flex',
      alignitems: 'center',
      justifycontent: 'center',
      color: 'white',
      margin: 0,
      position: 'relative',
      height: '100vh',
      width: '100%',
    }}>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Trouvez les meilleures offres de location de voitures dans toute la France</h1>
        <p>Comparez les prix de location de voitures des meilleures entreprises et trouvez le véhicule idéal pour votre voyage.</p>
        <Link to="/comparison" className="cta-btn">Comparez maintenant</Link>
      </div>
    </div>
  );
};

export default HeroSection;
