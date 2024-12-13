import europcarPricing from '../../data/europcarPricing';

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_WEEK = 10080;
const MINUTES_IN_MONTH = 43800; // Approximation (30.42 days in a month)
const FUEL_PRICE_PER_LITER = 1.85; // Static fuel price in €/liter

export const europcarPriceCalculation = (carType, durationInMinutes, kilometers) => {
  // Retrieve the car pricing data
  const carPricing = europcarPricing[carType];
  if (!carPricing) {
    console.error(`Invalid car type: ${carType}`);
    return 0; // Return 0 for invalid car type
  }

  const {
    dailyRate,
    weeklyRate,
    monthlyRate,
    includedKmPerDay,
    extraKmRate,
    fuelConsumption,
  } = carPricing;

  // Convert duration to days
  const durationInDays = Math.ceil(durationInMinutes / MINUTES_IN_DAY);
  const totalWeeks = Math.floor(durationInDays / 7);
  const remainingDaysAfterWeeks = durationInDays % 7;
  const totalMonths = Math.floor(durationInDays / 30.42);
  const remainingDaysAfterMonths = durationInDays % Math.ceil(30.42);

  // Calculate extra kilometer costs
  const totalIncludedKm = includedKmPerDay * durationInDays;
  const extraKmCost = 
    kilometers > totalIncludedKm 
      ? (kilometers - totalIncludedKm) * extraKmRate 
      : 0;

  // Calculate fuel cost
  const fuelCost = (kilometers / 100) * fuelConsumption * FUEL_PRICE_PER_LITER;

  // Define possible cost scenarios
  const costOptions = [
    // Scenario 1: Entirely daily rates
    dailyRate * durationInDays,

    // Scenario 2: Entirely weekly rates
    weeklyRate * totalWeeks + dailyRate * remainingDaysAfterWeeks,

    // Scenario 3: Entirely monthly rates
    monthlyRate * totalMonths + dailyRate * remainingDaysAfterMonths,

    // Scenario 4: Monthly + weekly + remaining daily rates
    monthlyRate * totalMonths +
    weeklyRate * Math.floor(remainingDaysAfterMonths / 7) +
    dailyRate * (remainingDaysAfterMonths % 7),

    // Scenario 5: Mixed weekly + daily rates (when no full months)
    weeklyRate * totalWeeks + dailyRate * remainingDaysAfterWeeks,
  ];

  // Add extra kilometer costs and fuel cost to each scenario
  const finalCosts = costOptions.map((baseCost) => baseCost + extraKmCost + fuelCost);

  // Return the minimum cost
  return parseFloat(Math.min(...finalCosts).toFixed(2));
};
