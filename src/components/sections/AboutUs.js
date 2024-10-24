import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="about-us">
        <h1>À propos de nous</h1>
        <div className="about-section">
          <h2>Notre mission</h2>
          <p>
            Chez Komparator, notre mission est de fournir une solution simple, fiable et abordable
            pour la location de véhicules. Nous croyons en une approche transparente qui met l'accent
            sur la satisfaction de nos clients.
          </p>
        </div>
        <div className="about-section">
          <h2>Notre histoire</h2>
          <p>
            Fondée en 2024, Komparator a commencé avec une idée simple : rendre la location
            de véhicules plus accessible et plus pratique. Depuis, nous avons grandi pour devenir une
            plateforme incontournable pour les utilisateurs à la recherche de la meilleure offre de location.
          </p>
        </div>
        <div className="about-section">
          <h2>Rencontrez notre équipe</h2>
          <p>
            Notre équipe est composée de professionnels passionnés par la technologie et l'innovation.
            Ensemble, nous travaillons pour vous offrir la meilleure expérience possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
