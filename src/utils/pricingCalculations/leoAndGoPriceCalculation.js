import leoAndGoPricing from '../../data/leoAndGoPricing';

const MINUTES_IN_DAY = 1440;
const MAX_DAYS = 14; // Maximum duration supported by Leo&Go

export const leoAndGoPricingCalculation = (carType, durationInMinutes, kilometers) => {
  const carPricing = leoAndGoPricing[carType];

  if (!carPricing) {
    console.error(`Invalid car type: ${carType}`);
    return {
      totalCost: 0,
      message: `Invalid car type: ${carType}`,
    };
  }

  const { unlockFee, durations, extraKmRate } = carPricing;

  // Convert duration to days
  const durationInDays = Math.ceil(durationInMinutes / MINUTES_IN_DAY);

  // If the duration exceeds the maximum limit
  if (durationInDays > MAX_DAYS) {
    return {
      totalCost: 0,
      message: `For durations exceeding ${MAX_DAYS} days, please contact Leo&Go directly.`,
    };
  }

  // Find the best pricing option
  let bestPrice = Infinity;

  durations.forEach(({ duration, price, kmIncluded }) => {
    if (duration >= durationInDays) {
      const extraKmCost = Math.max(0, kilometers - kmIncluded) * extraKmRate;
      const totalCost = unlockFee + price + extraKmCost;
      bestPrice = Math.min(bestPrice, totalCost);
    }
  });

  // Handle cases where duration exceeds available tiers
  if (durationInDays > durations[durations.length - 1].duration) {
    const lastTier = durations[durations.length - 1];
    const extraDays = durationInDays - lastTier.duration;

    // Cost for extra days is proportional to the last tier's price
    const proportionalCostPerDay = lastTier.price / lastTier.duration;
    const extraCost = extraDays * proportionalCostPerDay;

    const extraKmCost = Math.max(0, kilometers - lastTier.kmIncluded) * extraKmRate;
    const totalCost = unlockFee + lastTier.price + extraCost + extraKmCost;

    bestPrice = Math.min(bestPrice, totalCost);
  }

  return {
    totalCost: parseFloat(bestPrice.toFixed(2)),
    message: null, // No error message if calculation succeeds
  };
};
