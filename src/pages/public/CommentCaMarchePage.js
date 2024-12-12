import React from 'react';
import Navbar from '../../components/layout/Navbar';
import CommentCaMarche from '../../components/sections/CommentCaMarche';
import FeaturedCompanies from '../../components/sections/FeaturedCompanies';
import Footer from '../../components/layout/Footer';

const CommentCaMarchePage = () => {
  return (
    <div>
      <Navbar />
      <CommentCaMarche />
      <FeaturedCompanies />
      <Footer />
    </div>
  );
};

export default CommentCaMarchePage;
