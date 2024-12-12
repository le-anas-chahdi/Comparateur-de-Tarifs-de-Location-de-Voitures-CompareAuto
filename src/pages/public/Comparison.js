import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ComparisonForm from '../../components/ComparisonForm';
import PriceDistanceContainer from '../../components/Graphes/PriceDistanceContainer';

const Comparison = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12 text-center mt-5 xl:mt-7">Comparison Page</h1>
      <div className='w-full flex flex-col gap-7'>
        <ComparisonForm />
        <PriceDistanceContainer/>
      </div>
      <Footer/>
    </div>
  );
};

export default Comparison;
