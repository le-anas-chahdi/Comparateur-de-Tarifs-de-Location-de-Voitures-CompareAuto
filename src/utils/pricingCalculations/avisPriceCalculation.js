import avisPricing from "../../data/avisPricing";

const MINUTES_IN_DAY = 1440;
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30; // Approximate value
const FUEL_PRICE_PER_LITER = 1.80; // Current fuel price in Lyon

const avisPriceCalculation = (carType, durationInMinutes, distanceInKm) => {
  // Retrieve pricing data for the given car type
  const carPricing = avisPricing[carType];
  if (!carPricing) {
    console.error(`Invalid car type: ${carType}`);
    return 0;
  }

  const { unlockFee, dailyRate, weeklyRate, monthlyRate, fuelConsumption } = carPricing;

  // Convert duration to days
  const totalDays = Math.ceil(durationInMinutes / MINUTES_IN_DAY);

  // Calculate fuel cost
  const fuelCost = (distanceInKm * fuelConsumption * FUEL_PRICE_PER_LITER) / 100;

  // Scenario 1: Entirely daily rates
  const dailyCost = totalDays * dailyRate;

  // Scenario 2: Entirely weekly rates
  const totalWeeks = Math.ceil(totalDays / DAYS_IN_WEEK);
  const weeklyCost = totalWeeks * weeklyRate;

  // Scenario 3: Entirely monthly rates
  const totalMonths = Math.ceil(totalDays / DAYS_IN_MONTH);
  const monthlyCost = totalMonths * monthlyRate;

  // Scenario 4: Mixed monthly + weekly + daily rates
  const fullMonths = Math.floor(totalDays / DAYS_IN_MONTH);
  const remainingDaysAfterMonths = totalDays % DAYS_IN_MONTH;

  const remainingWeeksAfterMonths = Math.floor(remainingDaysAfterMonths / DAYS_IN_WEEK);
  const remainingDaysAfterWeeks = remainingDaysAfterMonths % DAYS_IN_WEEK;

  const mixedCost =
    fullMonths * monthlyRate +
    remainingWeeksAfterMonths * weeklyRate +
    remainingDaysAfterWeeks * dailyRate;

  // Find the minimum rental cost across all scenarios
  const bestRentalCost = Math.min(dailyCost, weeklyCost, monthlyCost, mixedCost);

  // Add unlock fee and fuel cost to the best scenario
  const finalCost = bestRentalCost + unlockFee + fuelCost;

  // Return the minimum cost, rounded to 2 decimals
  return parseFloat(finalCost.toFixed(2));
};

export default avisPriceCalculation;
