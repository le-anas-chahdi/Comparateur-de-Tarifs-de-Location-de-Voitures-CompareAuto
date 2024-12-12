import React from 'react';

const steps = [
  {
    title: "Étape 1: Sélectionnez une voiture",
    description: "Choisissez une voiture parmi notre large sélection de véhicules disponibles.",
  },
  {
    title: "Étape 2: Comparez les offres",
    description: "Comparez les prix et les options des différentes compagnies de location.",
  },
  {
    title: "Étape 3: Choisissez le meilleur deal",
    description: "Sélectionnez l'offre qui vous convient le mieux et économisez de l'argent.",
  },
  {
    title: "Étape 4: Réservez votre véhicule",
    description: "Finalisez la réservation directement en ligne et recevez une confirmation immédiate.",
  },
];

const CommentCaMarche = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-4xl font-extrabold text-gray-800  text-center">Comment Ça Marche</h2>
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-white shadow-lg rounded-lg w-full max-w-2xl"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#FFCC00] text-white text-xl font-bold rounded-full mb-6">
              {index + 1}
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentCaMarche;
