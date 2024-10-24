import React from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../components/sections/HeroSection';
import HowItWorks from '../../components/sections/HowItWorks';
import FeaturedCompanies from '../../components/sections/FeaturedCompanies';
import Footer from '../../components/layout/Footer';

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
