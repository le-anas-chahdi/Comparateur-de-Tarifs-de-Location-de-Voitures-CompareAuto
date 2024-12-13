import leoAndGoPricing from '../../data/leoAndGoPricing';

const MINUTES_IN_DAY = 1440;

/**
 * Calcul du tarif pour Leo&Go
 * @param {string} carType - Type de voiture (e.g., catS, catM, catL, catXL, catXXL)
 * @param {number} durationInMinutes - Durée en minutes
 * @param {number} kilometers - Distance parcourue en kilomètres
 * @returns {number} - Prix total calculé
 */
export const leoAndGoPricingCalculation = (carType, durationInMinutes, kilometers) => {
  // Vérifier si les données tarifaires existent pour le type de voiture
  const carPricing = leoAndGoPricing[carType];
  if (!carPricing) {
    console.error(`Type de voiture invalide : ${carType}`);
    return 0;
  }

  const { unlockFee, durations, extraKmRate } = carPricing;

  // Trouver la durée correspondante ou supérieure dans les paliers
  const matchingTier = durations.find(tier => durationInMinutes <= tier.duration);

  // Si aucune durée n'est trouvée, utiliser la durée maximale disponible
  const selectedTier = matchingTier || durations[durations.length - 1];

  // Calcul des kilomètres supplémentaires
  const extraKmCost = Math.max(0, kilometers - selectedTier.kmIncluded) * extraKmRate;

  // Calcul du coût total
  const totalCost = unlockFee + selectedTier.price + extraKmCost;

  // Retourner le coût total avec un arrondi à deux décimales
  return parseFloat(totalCost.toFixed(2));
};
