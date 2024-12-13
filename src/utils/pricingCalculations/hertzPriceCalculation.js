import hertzPricing from '../../data/hertzPricing'; // Assuming pricing data is in a file

// Constants
const MINUTES_IN_DAY = 1440;
const MINUTES_IN_WEEK = 10080;
const MINUTES_IN_MONTH = 43800; // Approximate: 30.42 days in a month
const FUEL_PRICE_PER_LITER = 1.85; // Static fuel price in €/liter

/**
 * Calculate the most advantageous price for Hertz rentals.
 *
 * @param {string} carType - The category of the car (e.g., catS, catM, etc.).
 * @param {number} durationInMinutes - The rental duration in minutes.
 * @param {number} kilometers - The number of kilometers driven.
 * @returns {number} The most advantageous price, rounded to 2 decimals.
 */
const HertzPriceCalculation = (carType, durationInMinutes, kilometers) => {
  const carPricing = hertzPricing[carType];

  if (!carPricing) {
    throw new Error(`Invalid car type: ${carType}`);
  }

  const { dailyRate, weeklyRate, monthlyRate, fuelConsumption } = carPricing;

  const durationInDays = durationInMinutes / MINUTES_IN_DAY;
  const durationInWeeks = durationInMinutes / MINUTES_IN_WEEK;
  const durationInMonths = durationInMinutes / MINUTES_IN_MONTH;

  // Calculate total fuel cost
  const totalFuelCost = (kilometers / 100) * fuelConsumption * FUEL_PRICE_PER_LITER;

  // Possible pricing scenarios
  const pricingOptions = [];

  // 1. Entirely daily rate
  pricingOptions.push(dailyRate * Math.ceil(durationInDays) + totalFuelCost);

  // 2. Entirely weekly rate
  pricingOptions.push(weeklyRate * Math.ceil(durationInWeeks) + totalFuelCost);

  // 3. Entirely monthly rate
  pricingOptions.push(monthlyRate * Math.ceil(durationInMonths) + totalFuelCost);

  // 4. Combination of weeks + remaining days
  const fullWeeks = Math.floor(durationInDays / 7);
  const remainingDays = durationInDays % 7;
  pricingOptions.push(
    fullWeeks * weeklyRate + Math.ceil(remainingDays) * dailyRate + totalFuelCost
  );

  // 5. Combination of months + remaining weeks
  const fullMonths = Math.floor(durationInDays / 30.42); // Average days in a month
  const remainingWeeks = (durationInDays % 30.42) / 7;
  pricingOptions.push(
    fullMonths * monthlyRate + Math.ceil(remainingWeeks) * weeklyRate + totalFuelCost
  );

  // Find the most advantageous option
  const mostAdvantageousPrice = Math.min(...pricingOptions);

  return parseFloat(mostAdvantageousPrice.toFixed(2));
};

export default HertzPriceCalculation;
