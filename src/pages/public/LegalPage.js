import React from 'react';
import Legal from '../../components/sections/Legal';
import Navbar from '../../components/layout/Navbar';
import FeaturedCompanies from '../../components/sections/FeaturedCompanies';
import Footer from '../../components/layout/Footer';

const LegalPage = () => {
  return (
    <div className="legal-page">
      <Navbar />
      <Legal />
      <Footer />
    </div>
  );
};

export default LegalPage;
