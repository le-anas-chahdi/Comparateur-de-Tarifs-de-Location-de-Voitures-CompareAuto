import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works" id="how-it-works">
      <h2>Comment ça fonctionne</h2>
      <div className="steps">
        <div className="step">
          <h3>Étape 1 : Entrez les détails de votre voyage</h3>
          <p>
            Indiquez le lieu, la durée et les spécificités de votre voyage (par exemple, la distance ou vos préférences de véhicule).
          </p>
        </div>
        <div className="step">
          <h3>Étape 2 : Comparez les offres</h3>
          <p>
            Consultez les propositions de différentes compagnies de location, comparez les prix, les options et les conditions.
          </p>
        </div>
        <div className="step">
          <h3>Étape 3 : Choisissez la meilleure offre</h3>
          <p>
            Sélectionnez l'offre qui correspond le mieux à vos besoins et à votre budget, tout en économisant de l'argent.
          </p>
        </div>
        <div className="step">
          <h3>Étape 4 : Réservez votre véhicule</h3>
          <p>
            Finalisez votre réservation en ligne de manière simple et rapide. Vous recevrez une confirmation immédiate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
