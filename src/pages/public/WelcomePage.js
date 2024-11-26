import React from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../components/sections/HeroSection';
import HowItWorks from '../../components/sections/HowItWorks';
import TopDestinations from '../../components/sections/TopDestinations';
import Trusted from '../../components/sections/Trusted';
import FAQ from '../../components/sections/FAQ';
import FeaturedCompanies from '../../components/sections/FeaturedCompanies';
import Footer from '../../components/layout/Footer';
import ReviewsSection from '../../components/sections/ReviewsSection'; // Nom du composant correct


const WelcomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <ReviewsSection />
      <TopDestinations />
      <Trusted />
      <FAQ />
      <FeaturedCompanies />
      <Footer />
    </div>
  );
};

export default WelcomePage;
