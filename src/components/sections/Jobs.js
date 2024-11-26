import React from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import './Jobs.css';

const Jobs = () => {
  return (
    <><>
      <Navbar />
      <div className="jobs-page">
        {/* Reste du contenu */}
      </div>
    </><div className="jobs-page">
        {/* En-tête */}
        <header className="jobs-header">
          <h1>Rejoignez notre équipe</h1>
          <p>
            Rejoignez une équipe dynamique et passionnée qui révolutionne le monde
            de la location de voitures. Chez nous, chaque voix compte, et nous
            travaillons ensemble pour créer des solutions innovantes.
          </p>
          <a href="#jobs-section" className="cta-btn">Voir les offres</a>
        </header>

        {/* Nos Valeurs */}
        <section className="values-section">
          <h2>Nos Valeurs</h2>
          <div className="values-list">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Nous repoussons les limites pour développer des solutions uniques et impactantes.</p>
            </div>
            <div className="value-card">
              <h3>Travail d'équipe</h3>
              <p>Nous croyons en la force du collectif pour atteindre l'excellence ensemble.</p>
            </div>
            <div className="value-card">
              <h3>Impact</h3>
              <p>Chaque action compte et contribue à un avenir plus durable et accessible.</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>Nous nous efforçons d'offrir la meilleure expérience à nos clients et employés.</p>
            </div>
          </div>
        </section>

        <section className="jobs-section">
          <h2>Offres d'emploi</h2>
          <div className="jobs-list">
            <div className="job-card">
              <h3>Développeur Backend</h3>
              <p>Paris, France - Temps plein</p>
              <a href="/jobs/backtend" className="job-link">Postuler</a>
            </div>
            <div className="job-card">
              <h3>Marketing Digital</h3>
              <p>Lyon, France - Temps plein</p>
              <a href="/jobs/product" className="job-link">Postuler</a>
            </div>
          </div>
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
        <Footer />
      </div></>
  );
};

export default Jobs;
