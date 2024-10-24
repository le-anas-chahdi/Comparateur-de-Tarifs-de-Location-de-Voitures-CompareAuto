import React from 'react';
//import './CommentCaMarche.css';
//import icon1 from '../assets/icon1.png'; // Ajoute ici tes icônes ou illustrations
//import icon2 from '../assets/icon2.png';
//import icon3 from '../assets/icon3.png';
//import icon4 from '../assets/icon4.png';

const CommentCaMarche = () => {
  return (
    <div className="comment-ca-marche">
      <h2>Comment ça marche</h2>
      <div className="steps">
        <div className="step">
         
          <h3>Étape 1: Sélectionnez une voiture</h3>
          <p>Choisissez une voiture parmi notre large sélection de véhicules disponibles.</p>
        </div>
        <div className="step">
    
          <h3>Étape 2: Comparez les offres</h3>
          <p>Comparez les prix et les options des différentes compagnies de location.</p>
        </div>
        <div className="step">
         
          <h3>Étape 3: Choisissez le meilleur deal</h3>
          <p>Sélectionnez l'offre qui vous convient le mieux et économisez de l'argent.</p>
        </div>
        <div className="step">
         
          <h3>Étape 4: Réservez votre véhicule</h3>
          <p>Finalisez la réservation directement en ligne et recevez une confirmation immédiate.</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCaMarche;
