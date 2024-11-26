import React from 'react';
import Navbar from '../../components/layout/Navbar';
import AboutUs from '../../components/sections/AboutUs';
import FeaturedCompanies from '../../components/sections/FeaturedCompanies';
import Footer from '../../components/layout/Footer';

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <h1>About us</h1>
      <AboutUs />
      <FeaturedCompanies />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
