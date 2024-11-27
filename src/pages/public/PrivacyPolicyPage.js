import React from 'react';
import PrivacyPolicy from '../../components/sections/PrivacyPolicy';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer'; // Assurez-vous que le chemin est correct

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
