import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Combien coûte la location d’une voiture en France ?",
      answer: "Une location de voiture en France coûte en moyenne 30 € par jour.",
    },
    {
      question: "Quelle est la catégorie de voiture de location la plus populaire en France ?",
      answer: "Intermédiaire (Skoda Octavia Combi ou équivalent) est le type de voiture le plus souvent loué en France.",
    },
    {
      question: "Quelle est l’agence de location de voitures la moins chère en France ?",
      answer: "Cela dépend des offres en cours, mais certaines agences locales offrent des tarifs compétitifs.",
    },
    {
      question: "Où trouver des voitures de location à proximité en France ?",
      answer: "Vous pouvez rechercher en ligne ou utiliser notre plateforme pour trouver des locations proches de chez vous.",
    },
    {
      question: "Combien coûte la location d’une voiture en France pendant une semaine ?",
      answer: "Le coût moyen pour une semaine est d’environ 210 €, mais cela peut varier en fonction de la saison.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Louer une voiture en France - FAQ</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {item.question}
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
