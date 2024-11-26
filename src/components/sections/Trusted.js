import React from 'react';
import './Trusted.css'; // Lien vers le fichier CSS

const TrustedBy = () => {
  return (
    <div className="trusted-by">
      <h2>Ils nous font confiance</h2>
      <p>Acteurs, chanteurs, sportifs, et d'autres personnalités publiques réservent leurs véhicules grâce à CarRentalCompare.</p>
      <div className="trusted-logos">
        <img src="/imaze/smith.png" alt="Acteurs" />
        <img src="/imaze/mbappe.png" alt="Chanteurs" />
        <img src="/imaze/zizou.png" alt="Sportifs" />
        <img src="/imaze/musk.png" alt="Influenceurs" />
      </div>
    </div>
  );
};

export default TrustedBy;
