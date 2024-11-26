import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Section Hero */}
      <header className="hero-section">
        <img src="/src/images/bg.png" alt="L " className="hero-logo" />
        <h1> </h1>
      </header>

      {/* Section À propos */}
      <section className="about-section">
        <h2>À Propos</h2>
        <p>
          <strong>Votre entreprise</strong> révolutionne le domaine de la location de voitures. Notre mission : rendre la location plus simple, rapide et accessible en comparant les meilleures offres des compagnies telles que <strong>Avis, Bolt, Citiz, Europcar, Hertz, Leo&Go, et Sixt</strong>.
        </p>
        <p>
          Nous utilisons des technologies avancées pour offrir une expérience utilisateur fluide, avec un focus sur l'innovation et la satisfaction client.
        </p>
        <p>
          L'équipe est composée de <strong>15 collaborateurs passionnés</strong>, dont 7 dans le développement, 2 en gestion de produit, et 4 en marketing. Notre équipe est jeune, tournée vers le long terme, et incroyablement diverse avec des membres venant de plusieurs nationalités.
        </p>
      </section>

      {/* Section Culture */}
      <section className="culture-section">
        <h2>🎶 Notre Culture</h2>
        <p>Nous croyons en ces principes fondamentaux :</p>
        <ul>
          <li>📖 Tout peut s'apprendre</li>
          <li>🚀 Nous pouvons surpasser les géants de notre industrie</li>
          <li>❤️ L'équilibre entre performance et plaisir est essentiel</li>
        </ul>
        <p>Quelques avantages à travailler avec nous :</p>
        <ul>
          <li>🔥 Vous apprendrez beaucoup et verrez rapidement les résultats de votre travail</li>
          <li>🏡 Nous favorisons le télétravail</li>
          <li>🇫🇷 De magnifiques bureaux au cœur de la ville</li>
          <li>🤠 Nous aimons organiser des séminaires en dehors des bureaux</li>
          <li>💰 Réductions sur les locations de voitures et autres avantages</li>
        </ul>
      </section>

      {/* Section Valeurs */}
      <section className="values-section">
        <h2>💎 Nos Valeurs</h2>
        <ul>
          <li>🏁 Résultats avant tout, en conciliant travail intense et bien-être</li>
          <li>✨ Mieux vaut fait que parfait</li>
          <li>👍 Restez simple</li>
          <li>🎁 Les retours sont un cadeau</li>
          <li>🦄 Soyez unique</li>
          <li>🚄 Avancez vite !</li>
        </ul>
      </section>

      {/* Section Offres d'emploi */}
      <section className="jobs-section">
        <h2>Nos Offres d'Emploi</h2>
        <p>
          Surveillez cette page pour ne pas manquer nos nouvelles opportunités. Dès qu'une offre est publiée, allez vite postuler !
        </p>
        <p>
          Retrouvez nos offres sur :
        </p>
        <ul className="job-links">
        <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.indeed.com" target="_blank" rel="noopener noreferrer">
              Indeed
            </a>
          </li>
          <li>
            <a href="https://www.welcometothejungle.com" target="_blank" rel="noopener noreferrer">
              Welcome to the Jungle
            </a>
          </li>
        </ul>
        <p className="no-job-openings">Nous n'avons pas d'offres d'emploi pour le moment !</p>
      </section>

      {/* Section Footer */}
      <footer className="about-footer">
        <p>
          Créé avec ❤ par <a href="https://www.yourcompany.com" target="_blank" rel="noopener noreferrer">CarRentalCompare</a>
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
