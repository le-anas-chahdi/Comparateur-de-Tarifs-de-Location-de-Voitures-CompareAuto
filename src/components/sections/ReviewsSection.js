import React from 'react';
import './ReviewsSection.css'; // Assurez-vous de créer ce fichier CSS

const ReviewsSection = () => {
  const reviews = [
    {
      stars: 5,
      text: "CarRentalCompare est une plateforme super où les prix sont compétitifs et cela permet de comparer facilement les offres des compagnies. L'équipe est très réactive et à l'écoute des utilisateurs. Merci à vous !",
      highlight: "Application simple d'utilisation.",
    },
    {
      stars: 5,
      text: "Je ne connaissais pas cette plateforme auparavant. Je viens de l'essayer et franchement, c'est fabuleux ! Hâte de réserver encore plus de trajets. Je recommande à 100%.",
      highlight: "Super découverte.",
    },
    {
      stars: 5,
      text: "J'ai réservé avec CarRentalCompare et je suis ravi. Les prix sont plus bas que les autres sites, et le service est top. Je recommande vivement cette plateforme !",
      highlight: "Première expérience réussie.",
    },
  ];

  return (
    <div className="reviews-section">
      <h2>Chaque avis nous donne encore plus envie</h2>
      <div className="reviews-carousel">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="stars">
              {"★".repeat(review.stars)}
            </div>
            <p>{review.text}</p>
            <strong>{review.highlight}</strong>
          </div>
        ))}
      </div>
      <p className="review-links">
        Voir nos avis sur <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">Google Play</a> et <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">App Store</a>
      </p>
    </div>
  );
};

export default ReviewsSection;
