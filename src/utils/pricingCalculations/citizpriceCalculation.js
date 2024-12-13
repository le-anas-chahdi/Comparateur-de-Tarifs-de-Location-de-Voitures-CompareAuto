import citizPricing from '../../data/citizPricing';

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;
const MINUTES_IN_WEEK = 10080;

const citizpriceCalculation = (pricingData, carType, durationInMinutes, kilometers) => {
  // Validate car type
  const carPricing = pricingData[carType];
  if (!carPricing) {
    throw new Error(`Invalid car type: ${carType}`);
  }

  const { hourly, daily, weekly, kmRate, reducedKmRate, reducedKmThreshold } = carPricing;

  // Validate input
  if (durationInMinutes <= 0 || kilometers < 0) {
    return 0; // No cost for zero duration or negative kilometers
  }

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

  // Precompute durations
  const weeklyCost = weekly * totalWeeks;
  const dailyCost = daily * totalDays;
  const hourlyCost = hourly * durationInHours;

  const durationCosts = [
    hourlyCost, // Option 1: Entirely hourly
    dailyCost, // Option 2: Entirely daily
    weeklyCost, // Option 3: Entirely weekly
    weeklyCost + daily * remainingDays, // Option 4: Weekly + remaining daily
    weeklyCost + hourly * remainingHours, // Option 5: Weekly + remaining hourly
    weeklyCost + daily * remainingDays + hourly * remainingHours, // Option 6: Weekly + daily + remaining hourly
    daily * totalDays + hourly * remainingHours, // Option 7: Daily + remaining hourly
    weeklyCost + daily * remainingDays, // Option 8: Weekly + daily
  ];

  // Add kilometer cost to each option and find the minimum
  const totalCosts = durationCosts.map((cost) => cost + kmCost);
  return parseFloat(Math.min(...totalCosts).toFixed(2)); // Return the best price
};

// No subscription pricing
export const noSubscriptionPricing = (carType, durationInMinutes, kilometers) => {
  return citizpriceCalculation(citizPricing.noSubscription, carType, durationInMinutes, kilometers);
};

// Subscription pricing
export const subscriptionPricing = (carType, durationInMinutes, kilometers) => {
  return citizpriceCalculation(citizPricing.subscription, carType, durationInMinutes, kilometers);
};
