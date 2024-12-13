import hertzPricing from '../../data/hertzPricing';

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_WEEK = 10080;
const MINUTES_IN_MONTH = 43800; // Approximation: 30.42 days in a month
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
  // Retrieve the pricing data for the specified car type
  const carPricing = hertzPricing[carType];

  if (!carPricing) {
    console.error(`Invalid car type: ${carType}`);
    return 0; // Return 0 for invalid car type
  }

  const { dailyRate, weeklyRate, monthlyRate, fuelConsumption } = carPricing;

  // Calculate durations
  const totalDays = Math.ceil(durationInMinutes / MINUTES_IN_DAY);
  const totalWeeks = Math.floor(totalDays / 7);
  const remainingDaysAfterWeeks = totalDays % 7;
  const totalMonths = Math.floor(totalDays / 30.42);
  const remainingDaysAfterMonths = totalDays % Math.ceil(30.42);

  // Calculate total fuel cost
  const fuelCost = (kilometers / 100) * fuelConsumption * FUEL_PRICE_PER_LITER;

  // Define pricing scenarios
  const costOptions = [];

  // Scenario 1: Entirely daily rates
  costOptions.push(dailyRate * totalDays + fuelCost);

  // Scenario 2: Entirely weekly rates
  if (totalWeeks > 0) {
    costOptions.push(weeklyRate * totalWeeks + dailyRate * remainingDaysAfterWeeks + fuelCost);
  }

  // Scenario 3: Entirely monthly rates
  if (totalMonths > 0) {
    costOptions.push(monthlyRate * totalMonths + dailyRate * remainingDaysAfterMonths + fuelCost);
  }

  // Scenario 4: Monthly + Weekly + Remaining Days
  if (totalMonths > 0) {
    const remainingDays = totalDays - totalMonths * 30.42;
    const remainingWeeks = Math.floor(remainingDays / 7);
    const remainingExtraDays = remainingDays % 7;
    costOptions.push(
      monthlyRate * totalMonths +
        weeklyRate * remainingWeeks +
        dailyRate * remainingExtraDays +
        fuelCost
    );
  }

  // Scenario 5: Weekly + Remaining Days (No Full Months)
  if (totalWeeks > 0) {
    costOptions.push(weeklyRate * totalWeeks + dailyRate * remainingDaysAfterWeeks + fuelCost);
  }

  // Add a fallback scenario for very short durations
  if (totalDays < 1) {
    const hours = Math.ceil(durationInMinutes / 60);
    const hourlyRate = dailyRate / 24; // Approximation
    costOptions.push(hourlyRate * hours + fuelCost);
  }

  // Return the minimum cost
  const bestPrice = Math.min(...costOptions);
  return parseFloat(bestPrice.toFixed(2));
};

export default HertzPriceCalculation;
