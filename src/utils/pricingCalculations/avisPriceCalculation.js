import avisPricing from "../../data/avisPricing";

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_WEEK = 10080;
const MINUTES_IN_MONTH = 43800;
const FUEL_PRICE_PER_LITER = 1.80; // Current fuel price in Lyon (adjust as needed)

const avisPriceCalculation = (carType, durationInMinutes, distanceInKm) => {
  // Get the pricing data for the specified car type
  const carPricing = avisPricing[carType];
  if (!carPricing) {
    throw new Error(`Invalid car type: ${carType}`);
  }

  const { unlockFee, dailyRate, weeklyRate, monthlyRate, fuelConsumption } = carPricing;

  // Convert duration into days, weeks, and months
  const totalDays = Math.ceil(durationInMinutes / MINUTES_IN_DAY);
  const totalWeeks = Math.floor(totalDays / 7);
  const remainingDaysAfterWeeks = totalDays % 7;
  const totalMonths = Math.floor(totalDays / 30); // Approximation of a month as 30 days
  const remainingDaysAfterMonths = totalDays % 30;

  // Calculate fuel cost
  const fuelCost = (distanceInKm * fuelConsumption * FUEL_PRICE_PER_LITER) / 100;

  // Calculate all possible scenarios
  const costOptions = [];

  // Option 1: Entirely daily
  costOptions.push(dailyRate * totalDays);

  // Option 2: Entirely weekly
  costOptions.push(weeklyRate * totalWeeks);

  // Option 3: Entirely monthly
  costOptions.push(monthlyRate * totalMonths);

  // Option 4: Monthly + remaining daily
  if (totalMonths > 0) {
    costOptions.push(monthlyRate * totalMonths + dailyRate * remainingDaysAfterMonths);
  }

  // Option 5: Monthly + remaining weekly
  if (totalMonths > 0) {
    costOptions.push(monthlyRate * totalMonths + weeklyRate);
  }

  // Option 6: Weekly + remaining daily
  if (totalWeeks > 0) {
    costOptions.push(weeklyRate * totalWeeks + dailyRate * remainingDaysAfterWeeks);
  }

  // Option 7: Monthly + weekly + remaining daily
  if (totalMonths > 0 && remainingDaysAfterMonths >= 7) {
    const remainingWeeksAfterMonths = Math.floor(remainingDaysAfterMonths / 7);
    const remainingDaysAfterMonthsAndWeeks = remainingDaysAfterMonths % 7;

    costOptions.push(
      monthlyRate * totalMonths +
        weeklyRate * remainingWeeksAfterMonths +
        dailyRate * remainingDaysAfterMonthsAndWeeks
    );
  }

  // Add the unlock fee to all cost options
  const finalCosts = costOptions.map((cost) => cost + unlockFee + fuelCost);

  // Return the minimum cost, rounded to 2 decimals
  return parseFloat(Math.min(...finalCosts).toFixed(2));
};

export default avisPriceCalculation;
