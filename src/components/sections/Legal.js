import React from 'react';
import './Legal.css';

const Legal = () => {
  return (
    <div className="legal-section">
      
      <h2>Mentions Légales</h2>
      <div className="legal-content">
        <section>
          <h3>Éditeur du site</h3>
          <p>
            Le site <strong>CarRentalCompare</strong> est édité par <strong>CarRentalCompare Inc.</strong>, une société spécialisée dans la comparaison et la réservation de voitures de location.
          </p>
          <p>
            <strong>Adresse :</strong><br />
            45 Rue de la Mobilité<br />
            75008 Paris, France
          </p>
          <p>
            <strong>Email :</strong> support@carrentalcompare.com<br />
            <strong>Téléphone :</strong> +33 1 23 45 67 89
          </p>
        </section>

        <section>
          <h3>Hébergement</h3>
          <p>
            Le site est hébergé par :<br />
            <strong>HostFrance Solutions</strong><br />
            99 Avenue du Cloud<br />
            75010 Paris, France<br />
            <strong>Téléphone :</strong> +33 9 87 65 43 21<br />
            <strong>Site Web :</strong> <a href="https://www.hostfrancesolutions.com" target="_blank" rel="noopener noreferrer">www.hostfrancesolutions.com</a>
          </p>
        </section>

        <section>
          <h3>Propriété intellectuelle</h3>
          <p>
            Tous les contenus du site <strong>CarRentalCompare</strong> (textes, images, logos, vidéos, etc.) sont protégés par les lois en vigueur sur la propriété intellectuelle. Toute reproduction ou utilisation sans autorisation écrite est strictement interdite.
          </p>
        </section>

        <section>
          <h3>Responsabilité</h3>
          <p>
            CarRentalCompare ne saurait être tenu responsable des dommages directs ou indirects pouvant résulter de l'accès ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données ou la présence de virus sur le site.
          </p>
        </section>

        <section>
          <h3>Politique de confidentialité</h3>
          <p>
            Nous attachons une grande importance à la confidentialité de vos données. Nous collectons et traitons vos informations personnelles dans le respect du RGPD (Règlement Général sur la Protection des Données). Pour plus d'informations, consultez notre <a href="/privacy-policy" target="_blank">Politique de Confidentialité</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
