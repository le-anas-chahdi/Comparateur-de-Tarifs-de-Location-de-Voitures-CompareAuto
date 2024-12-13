import citizPricing from "../../data/citizPricing";

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;
const MINUTES_IN_WEEK = 10080;

/**
 * Core function to calculate the price based on the provided pricing model.
 * @param {Object} carPricing - Pricing model (subscription or no subscription).
 * @param {string} carType - Type of car (e.g., catS, catM, catL).
 * @param {number} durationInMinutes - Duration of rental in minutes.
 * @param {number} distanceInKm - Distance traveled in kilometers.
 * @returns {number} - Calculated cost.
 */
const calculateCost = (carPricing, carType, durationInMinutes, distanceInKm) => {
  const pricing = carPricing[carType];

  if (!pricing) {
    console.error(`Invalid car type: ${carType}`);
    return Infinity; // Invalid car type returns a very high value to exclude it
  }

  const { hourly, daily, weekly, kmRate, reducedKmRate, reducedKmThreshold } = pricing;

  // Convert duration
  const totalWeeks = Math.floor(durationInMinutes / MINUTES_IN_WEEK);
  const remainingMinutesAfterWeeks = durationInMinutes % MINUTES_IN_WEEK;

  const totalDays = Math.floor(remainingMinutesAfterWeeks / MINUTES_IN_DAY);
  const remainingMinutesAfterDays = remainingMinutesAfterWeeks % MINUTES_IN_DAY;

  const totalHours = Math.ceil(remainingMinutesAfterDays / MINUTES_IN_HOUR);

  // Exact costs for the given durations
  const exactWeekCost = totalWeeks * weekly;
  const exactDayCost = totalDays * daily;
  const exactHourCost = totalHours * hourly;
  const exactDurationCost = exactWeekCost + exactDayCost + exactHourCost;

  // Costs with "+1" durations
  const weekPlusOneCost = (totalWeeks + 1) * weekly;
  const dayPlusOneCost = (totalDays + 1) * daily + totalWeeks * weekly;
  const hourPlusOneCost = (totalHours + 1) * hourly + totalDays * daily + totalWeeks * weekly;

  // Find the minimum duration cost
  const durationCost = Math.min(
    exactDurationCost,
    weekPlusOneCost,
    dayPlusOneCost,
    hourPlusOneCost
  );

  // Distance cost calculation
  const kmCost =
    distanceInKm <= reducedKmThreshold
      ? distanceInKm * kmRate
      : reducedKmThreshold * kmRate + (distanceInKm - reducedKmThreshold) * reducedKmRate;

  // Total cost
  return durationCost + kmCost;
};

/**
 * Calculate pricing without subscription.
 * @param {string} carType - Type of car.
 * @param {number} durationInMinutes - Duration in minutes.
 * @param {number} kilometers - Distance in kilometers.
 * @returns {number} - Calculated price.
 */
export const noSubscriptionPricing = (carType, durationInMinutes, kilometers) => {
  return parseFloat(
    calculateCost(citizPricing.noSubscription, carType, durationInMinutes, kilometers).toFixed(2)
  );
};

/**
 * Calculate pricing with subscription.
 * @param {string} carType - Type of car.
 * @param {number} durationInMinutes - Duration in minutes.
 * @param {number} kilometers - Distance in kilometers.
 * @returns {number} - Calculated price.
 */
export const subscriptionPricing = (carType, durationInMinutes, kilometers) => {
  return parseFloat(
    calculateCost(citizPricing.subscription, carType, durationInMinutes, kilometers).toFixed(2)
  );
};
