import React from 'react';
import FAQ from '../../components/sections/FAQ'; // Chemin vers le composant FAQ
import Footer from '../../components/layout/Footer'; // Chemin vers le footer (si nécessaire)
import Navbar from '../../components/layout/Navbar';

const FAQPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section FAQ */}
      <Navbar />
      <main className="flex-grow">
        <FAQ />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQPage;
