import citizPricing from '../../data/citizPricing';

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;
const MINUTES_IN_WEEK = 10080;

const citizPriceCalculation = (pricingData, carType, durationInMinutes, kilometers) => {
  const carPricing = pricingData[carType];
  if (!carPricing) {
    console.error(`Invalid car type: ${carType}`);
    return 0; // Return 0 for invalid car type
  }

  const { hourly, daily, weekly, kmRate, reducedKmRate, reducedKmThreshold } = carPricing;

  // Convert duration
  const durationInHours = durationInMinutes / MINUTES_IN_HOUR;
  const totalDays = Math.ceil(durationInHours / 24);
  const totalWeeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;
  const remainingHours = durationInHours % 24;

  // Calculate kilometer cost
  const kmCost =
    kilometers <= reducedKmThreshold
      ? kilometers * kmRate
      : reducedKmThreshold * kmRate + (kilometers - reducedKmThreshold) * reducedKmRate;

  // Calculate various pricing scenarios
  const durationCosts = [
    hourly * durationInHours, // Entirely hourly
    daily * totalDays, // Entirely daily
    weekly * totalWeeks, // Entirely weekly
    weekly * totalWeeks + daily * remainingDays, // Weekly + daily
    weekly * totalWeeks + hourly * remainingHours, // Weekly + hourly
    weekly * totalWeeks + daily * remainingDays + hourly * remainingHours, // Weekly + daily + hourly
  ];

  // Add kilometer cost to each option and find the minimum
  const totalCosts = durationCosts.map((cost) => cost + kmCost);
  return parseFloat(Math.min(...totalCosts).toFixed(2));
};

// No subscription pricing
export const noSubscriptionPricing = (carType, durationInMinutes, kilometers) => {
  return citizPriceCalculation(citizPricing.noSubscription, carType, durationInMinutes, kilometers);
};

// Subscription pricing
export const subscriptionPricing = (carType, durationInMinutes, kilometers) => {
  return citizPriceCalculation(citizPricing.subscription, carType, durationInMinutes, kilometers);
};
