import hertzPricing from './hertzPricing';

const calculateHertzPrice = (category, model, days, extraKm = 0) => {
  // Vérification si la catégorie existe
  if (!hertzPricing[category]) {
    throw new Error(`La catégorie "${category}" n'existe pas dans Hertz Pricing.`);
  }

  // Recherche du modèle dans la catégorie
  const vehicle = hertzPricing[category].find((v) => v.model.includes(model));
  if (!vehicle) {
    throw new Error(`Le modèle "${model}" n'existe pas dans la catégorie "${category}".`);
  }

  const { dailyRate, kmIncluded, pricePerKm } = vehicle;

  // Calcul du tarif de base
  const basePrice = dailyRate * days;

  // Gestion des kilomètres supplémentaires
  let extraKmCost = 0;
  if (kmIncluded !== "Illimité" && extraKm > kmIncluded) {
    extraKmCost = (extraKm - kmIncluded) * pricePerKm;
  }

  // Prix total
  const totalPrice = basePrice + extraKmCost;

  return {
    category,
    model,
    days,
    basePrice: basePrice.toFixed(2),
    extraKmCost: extraKmCost.toFixed(2),
    totalPrice: totalPrice.toFixed(2),
  };
};

// Exemple d'utilisation
const exampleCalculation = calculateHertzPrice('utilitaire', 'Fiat Doblo', 3, 600);
console.log(exampleCalculation);

export default calculateHertzPrice;
