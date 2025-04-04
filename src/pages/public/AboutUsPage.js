import React from 'react';
import Navbar from '../../components/layout/Navbar';
import AboutUs from '../../components/sections/AboutUs';
import FeaturedCompanies from '../../components/sections/FeaturedCompanies';
import Footer from '../../components/layout/Footer';

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
