import React from 'react';
import FAQ from '../../components/sections/FAQ'; // Chemin vers le composant FAQ
import Footer from '../../components/layout/Footer'; // Chemin vers le footer (si nécessaire)

const FAQPage = () => {
  return (
    <div>
      {/* Section FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQPage;
