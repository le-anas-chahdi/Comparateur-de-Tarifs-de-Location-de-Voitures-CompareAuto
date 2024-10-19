import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import HowItWorks from '../../components/HowItWorks';
import FeaturedCompanies from '../../components/FeaturedCompanies';
import Footer from '../../components/Footer';

const WelcomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturedCompanies />
      <Footer />
    </div>
  );
};

export default WelcomePage;
