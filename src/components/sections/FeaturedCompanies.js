import React from 'react';
import './FeaturedCompanies.css';

const FeaturedCompanies = () => {
  return (
    <div className="featured-companies">
      <h2>Trusted Rental Companies</h2>
      <div className="company-logos">
        <img src="/public/images/citiz-logo.png" alt="Citiz" />
        <img src="/public/images/bolt-logo.png" alt="Bolt" />
        <img src="/public/images/leogo-logo.png" alt="LeoGo" />
      </div>
    </div>
  );
};

export default FeaturedCompanies;
