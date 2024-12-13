import avisPricing from "../../data/avisPricing";

const MINUTES_IN_DAY = 1440;
const FUEL_PRICE_PER_LITER = 1.80; // Current fuel price in Lyon

const avisPriceCalculation = (carType, durationInMinutes, distanceInKm) => {
  // Get the pricing data for the specified car type
  const carPricing = avisPricing[carType];
  if (!carPricing) {
    console.error(`Invalid car type: ${carType}`);
    return 0; // Default to 0 if car type is invalid
  }

  const { unlockFee, dailyRate, weeklyRate, monthlyRate, fuelConsumption } = carPricing;

  // Convert duration into days and weeks
  const totalDays = Math.ceil(durationInMinutes / MINUTES_IN_DAY);
  const totalWeeks = Math.floor(totalDays / 7);
  const remainingDaysAfterWeeks = totalDays % 7;

  // Calculate fuel cost
  const fuelCost = (distanceInKm * fuelConsumption * FUEL_PRICE_PER_LITER) / 100;

  // Calculate all possible scenarios
  const costOptions = [
    // Scenario 1: Entirely daily rates
    dailyRate * totalDays,

    // Scenario 2: Entirely weekly rates
    weeklyRate * totalWeeks + dailyRate * remainingDaysAfterWeeks,

    // Scenario 3: Weekly + remaining daily rates
    weeklyRate * totalWeeks + dailyRate * remainingDaysAfterWeeks,

    // Scenario 4: Monthly rates with remaining days handled as daily
    monthlyRate * Math.floor(totalDays / 30) +
      dailyRate * (totalDays % 30),

    // Scenario 5: Mixed monthly + weekly + remaining days
    monthlyRate * Math.floor(totalDays / 30) +
      weeklyRate * Math.floor((totalDays % 30) / 7) +
      dailyRate * ((totalDays % 30) % 7),
  ];

  // Add the unlock fee and fuel cost to all cost options
  const finalCosts = costOptions.map((cost) => cost + unlockFee + fuelCost);

  // Return the minimum cost, rounded to 2 decimals
  return parseFloat(Math.min(...finalCosts).toFixed(2));
};

export default avisPriceCalculation;
