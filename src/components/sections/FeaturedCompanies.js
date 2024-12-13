import React from 'react';

const FeaturedCompanies = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-8 bg-white rounded-lg shadow-md">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">Sociétés de location de confiance</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <img
          src="images/citiz-logo.png"
          alt="Citiz"
          className="h-16 object-contain"
        />
        <img
          src="images/bolt-logo.png"
          alt="Bolt"
          className="h-16 object-contain"
        />
        <img
          src="images/leogo-logo.png"
          alt="LeoGo"
          className="h-16 object-contain"
        />
      </div>
    </div>
  );
};

export default FeaturedCompanies;
