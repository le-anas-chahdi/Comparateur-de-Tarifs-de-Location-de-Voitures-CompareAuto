import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import '../sections/Jobs.css'; // S'assure que les styles sont appliqués correctement

const JobsPage = () => {
  return (
    <div className="jobs-page">
      <Navbar />
      <header className="jobs-banner">
  <div className="banner-content">
    <h1>Rejoignez notre équipe 🚀</h1>
    <p>Participez à la révolution de la location de voitures et faites partie d'une équipe innovante et passionnée.</p>
  </div>
</header>

      
      <section className="values-section">
        <h2>Nos valeurs</h2>
        <div className="values-list">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>Créer des solutions uniques et toujours repousser les limites.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>Nous croyons au pouvoir du collectif pour atteindre l'excellence.</p>
          </div>
          <div className="value-card">
            <h3>Impact</h3>
            <p>Avoir un impact significatif sur l'expérience utilisateur.</p>
          </div>
        </div>
      </section>
      
      <section className="jobs-section">
        <h2>Offres d'emploi</h2>
        <div className="jobs-list">
          <div className="job-card">
            <h3>Développeur Frontend</h3>
            <p>Paris, France - Temps plein</p>
            <a href="/apply/frontend-developer" className="job-link">Postuler</a>
          </div>
          <div className="job-card">
            <h3>Chef de produit</h3>
            <p>Remote - Temps plein</p>
            <a href="/apply/product-manager" className="job-link">Postuler</a>
          </div>
        </div>
        <p className="no-jobs">
          Nous n'avons pas d'autres offres disponibles pour le moment. Restez à l'écoute !
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default JobsPage;
