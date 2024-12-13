import boltPricing from '../../data/boltPricing';

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;

export const boltPriceCalculation = (carType, durationInMinutes, kilometers) => {
  const pricing = boltPricing[carType];

  if (!pricing) {
    console.error(`Invalid car type: ${carType}. Returning 0.`);
    return 0; // Return 0 for invalid car types
  }

  const { unlockFee, perMinuteRate, hourlyCap, dailyCap, perKmRate, minimumFare } = pricing;

  const totalDays = Math.floor(durationInMinutes / MINUTES_IN_DAY);
  const remainingMinutes = durationInMinutes % MINUTES_IN_DAY;

  const distanceCost = kilometers * perKmRate;

  // Calculate time-based costs
  const timeCosts = [
    durationInMinutes * perMinuteRate, // Per-minute rate
    Math.ceil(durationInMinutes / MINUTES_IN_HOUR) * hourlyCap, // Hourly cap
    Math.ceil(durationInMinutes / MINUTES_IN_DAY) * dailyCap, // Daily cap
    totalDays * dailyCap + (remainingMinutes * perMinuteRate), // Mixed days and minutes
    totalDays * dailyCap + Math.min(remainingMinutes * perMinuteRate, dailyCap), // Days + capped remaining minutes
  ];

  // Add unlock fee and distance cost to all options
  const totalCosts = timeCosts.map((timeCost) => timeCost + distanceCost + unlockFee);

  // Apply minimum fare
  const bestPrice = Math.max(Math.min(...totalCosts), minimumFare);

  return parseFloat(bestPrice.toFixed(2));
};
