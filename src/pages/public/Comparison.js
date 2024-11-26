import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ComparisonForm from '../../components/ComparisonForm';

const Comparison = () => {
  return (
    <div>
      <Navbar />
      <h1>Comparison Page</h1>
      <ComparisonForm />
      <Footer/>
    </div>
  );
};

export default Comparison;
