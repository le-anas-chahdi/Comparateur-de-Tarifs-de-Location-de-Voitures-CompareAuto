import sixtPricing from './sixtPricing';

const calculateSixtPrice = (category, days, extraKm = 0) => {
  // Vérification si la catégorie existe
  if (!sixtPricing[category]) {
    throw new Error(`La catégorie "${category}" n'existe pas dans Sixt Pricing.`);
  }

  const { dailyRate, weeklyRate, kmIncluded, pricePerKm } = sixtPricing[category];

  // Calcul du tarif de base
  const basePrice = days >= 7 ? weeklyRate * Math.floor(days / 7) + dailyRate * (days % 7) : dailyRate * days;

  // Gestion des kilomètres supplémentaires
  let extraKmCost = 0;
  if (kmIncluded !== "Illimités" && extraKm > kmIncluded) {
    extraKmCost = (extraKm - kmIncluded) * pricePerKm;
  }

  // Prix total
  const totalPrice = basePrice + extraKmCost;

  return {
    category,
    days,
    basePrice: basePrice.toFixed(2),
    extraKmCost: extraKmCost.toFixed(2),
    totalPrice: totalPrice.toFixed(2),
  };
};

// Exemple d'utilisation
const exampleCalculation = calculateSixtPrice('suv', 10, 1200);
console.log(exampleCalculation);

export default calculateSixtPrice;
