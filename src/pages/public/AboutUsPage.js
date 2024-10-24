import React from 'react';
import Navbar from '../../components/layout/Navbar';
import AboutUs from '../../components/sections/AboutUs';

const AboutUsPage = () => {
  return (
    <div>
      <Navbar />
      <h1>About us</h1>
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
