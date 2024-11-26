import React from 'react';
import './FeaturedCompanies.css';

const FeaturedCompanies = () => {
  const companies = [
    { name: 'Citiz', url: 'https://www.citiz.fr/', logo: '/path/to/citiz-logo.png' },
    { name: 'Bolt', url: 'https://bolt.eu/', logo: '/path/to/bolt-logo.png' },
    { name: 'Leo&Go', url: 'https://www.leoandgo.com/', logo: '/path/to/leoandgo-logo.png' },
    { name: 'Avis', url: 'https://www.avis.com/', logo: '/path/to/avis-logo.png' },
    { name: 'Europcar', url: 'https://www.europcar.com/', logo: '/path/to/europcar-logo.png' },
    { name: 'Sixt', url: 'https://www.sixt.com/', logo: '/path/to/sixt-logo.png' },
    { name: 'Hertz', url: 'https://www.hertz.com/', logo: '/path/to/hertz-logo.png' },
  ];

  return (
    <section className="featured-companies">
      <h2>Sociétés de location de confiance</h2>
      <div className="company-logos">
        {companies.map((company, index) => (
          <a
            key={index}
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="company-link"
          >
          <p>{company.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCompanies;
