import europcarPricing from '../../data/europcarPricing';

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_WEEK = 10080;
const MINUTES_IN_MONTH = 43800; // Approximation (30.42 days in a month)
const FUEL_PRICE_PER_LITER = 1.85; // Static fuel price in €/liter

// Calculate the best price for Europcar
export const europcarPriceCalculation = (carType, durationInMinutes, kilometers) => {
  const carPricing = europcarPricing[carType];
  if (!carPricing) {
    throw new Error(`Invalid car type: ${carType}`);
  }

  const {
    dailyRate,
    weeklyRate,
    monthlyRate,
    includedKmPerDay,
    extraKmRate,
    fuelConsumption,
  } = carPricing;

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

  // Scenario 1: Entirely daily rates
  const dailyCost = durationInDays * dailyRate + extraKmCost + fuelCost;

  // Scenario 2: Entirely weekly rates
  const weeklyCost = totalWeeks * weeklyRate + extraKmCost + fuelCost;

  // Scenario 3: Weekly + remaining daily rates
  const weeklyPlusDailyCost =
    totalWeeks * weeklyRate +
    remainingDaysAfterWeeks * dailyRate +
    extraKmCost +
    fuelCost;

  // Scenario 4: Entirely monthly rates
  const monthlyCost = totalMonths * monthlyRate + extraKmCost + fuelCost;

  // Scenario 5: Monthly + remaining weekly + daily rates
  const monthlyPlusWeeklyCost =
    totalMonths * monthlyRate +
    Math.floor(remainingDaysAfterMonths / 7) * weeklyRate +
    (remainingDaysAfterMonths % 7) * dailyRate +
    extraKmCost +
    fuelCost;

  // Combine all scenarios
  const allCosts = [
    dailyCost,
    weeklyCost,
    weeklyPlusDailyCost,
    monthlyCost,
    monthlyPlusWeeklyCost,
  ];

  // Return the minimum cost
  const bestPrice = Math.min(...allCosts);
  return parseFloat(bestPrice.toFixed(2));
};
