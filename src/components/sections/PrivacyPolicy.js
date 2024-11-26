import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-content">
      <h1>Politique de confidentialité</h1>
      <p>Dernière mise à jour : 26 novembre 2024</p>

      <section>
        <h2>Introduction</h2>
        <p>
          Chez <strong>CarRentalCompare</strong>, la protection de vos données personnelles est une priorité.
          Cette politique de confidentialité décrit la manière dont nous collectons, utilisons et protégeons vos
          informations.
        </p>
      </section>

      <section>
        <h2>1. Informations que nous collectons</h2>
        <ul>
          <li><strong>Informations que vous fournissez :</strong> Nom, adresse e-mail, numéro de téléphone, etc.</li>
          <li><strong>Données techniques :</strong> Adresse IP, type de navigateur, pages visitées, etc.</li>
          <li><strong>Cookies :</strong> Pour améliorer votre expérience utilisateur.</li>
        </ul>
      </section>

      <section>
        <h2>2. Comment nous utilisons vos informations</h2>
        <p>Nous utilisons vos données pour :</p>
        <ul>
          <li>Fournir et améliorer nos services.</li>
          <li>Répondre à vos questions ou demandes.</li>
          <li>Personnaliser votre expérience sur notre plateforme.</li>
          <li>Envoyer des notifications importantes ou des mises à jour.</li>
        </ul>
      </section>

      <section>
        <h2>3. Partage de vos informations</h2>
        <p>
          Nous ne partageons vos données personnelles qu'avec des tiers de confiance pour :
        </p>
        <ul>
          <li>La gestion des paiements sécurisés.</li>
          <li>Les services de réservation de voitures.</li>
          <li>Respecter les obligations légales.</li>
        </ul>
      </section>

      <section>
        <h2>4. Sécurité des données</h2>
        <p>
          Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos informations
          contre tout accès non autorisé, utilisation abusive ou divulgation.
        </p>
      </section>

      <section>
        <h2>5. Vos droits</h2>
        <p>Vous avez le droit de :</p>
        <ul>
          <li>Accéder à vos données personnelles.</li>
          <li>Corriger vos informations si elles sont incorrectes.</li>
          <li>Demander la suppression de vos données.</li>
          <li>Vous opposer à l'utilisation de vos données.</li>
        </ul>
        <p>
          Pour exercer vos droits, contactez-nous à l'adresse suivante : 
          <a href="mailto:privacy@carrentalcompare.com">privacy@carrentalcompare.com</a>.
        </p>
      </section>

      <section>
        <h2>6. Modifications de cette politique</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de confidentialité. Toute mise à jour sera
          publiée sur cette page avec une nouvelle date de mise à jour.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
