import boltPricing from './boltPricing';

const calculateBoltPrice = (category, distance) => {
  // Vérification si la catégorie existe
  if (!boltPricing[category]) {
    throw new Error(`La catégorie "${category}" n'existe pas dans Bolt Pricing.`);
  }

  const { pricePerKm, basePrice } = boltPricing[category];

  // Calcul du prix total
  const totalPrice = basePrice + distance * pricePerKm;

  return {
    category,
    distance,
    basePrice: basePrice.toFixed(2),
    pricePerKm: pricePerKm.toFixed(2),
    totalPrice: totalPrice.toFixed(2),
  };
};

// Exemple d'utilisation
const exampleCalculation = calculateBoltPrice('sedan', 50);
console.log(exampleCalculation);

export default calculateBoltPrice;
