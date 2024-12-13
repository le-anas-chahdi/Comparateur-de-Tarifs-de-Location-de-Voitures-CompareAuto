import React from 'react';

const steps = [
  {
    title: "Étape 1",
    description: "Saisissez les détails de votre voyage (durée, distance, type du véhicule).",
  },
  {
    title: "Étape 2",
    description: "Comparez les offres de plusieurs entreprises.",
  },
  {
    title: "Étape 3",
    description: "Choisissez la meilleure offre et économisez de l'argent.",
  },
  {
    title: "Étape 4",
    description: "Réservez directement votre location.",
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-8 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg shadow-md shadow-yellow-100">
      <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">Comment ça marche</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-8 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl  "
          >
            {/* <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white text-xl font-bold rounded-full mx-auto mb-6">
              {index + 1}
            </div> */}
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed text-md">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;