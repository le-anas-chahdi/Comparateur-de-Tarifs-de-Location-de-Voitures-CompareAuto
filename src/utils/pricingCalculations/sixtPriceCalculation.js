import sixtPricing from '../../data/sixtPricing';

const MINUTES_IN_DAY = 1440;
const MINUTES_IN_WEEK = 10080;
const MINUTES_IN_MONTH = 43800; // Approximation: 30.42 days per month
const FUEL_PRICE_PER_LITER = 1.85; // Static fuel price in €/liter

const sixtPriceCalculation = (carType, durationInMinutes, kilometers) => {
  // Debug logging to verify inputs
  console.log('Car Type:', carType);
  console.log('Duration (Minutes):', durationInMinutes);
  console.log('Kilometers:', kilometers);

  // Validate carType
  const carPricing = sixtPricing[carType];
  if (!carPricing) {
    console.error(`Invalid car type: ${carType}. Please check the pricing data.`);
    return null; // Return null to avoid breaking the app
  }

  const {
    dailyRate,
    weeklyRate,
    monthlyRate,
    includedKmPerDay,
    extraKmRate,
    fuelConsumption,
  } = carPricing;

  const durationInDays = durationInMinutes / MINUTES_IN_DAY;
  const durationInWeeks = durationInMinutes / MINUTES_IN_WEEK;
  const durationInMonths = durationInMinutes / MINUTES_IN_MONTH;

  // Calculate fuel cost
  const totalFuelCost = (kilometers / 100) * fuelConsumption * FUEL_PRICE_PER_LITER;

  // Calculate extra kilometers cost
  const totalIncludedKm = durationInDays * includedKmPerDay;
  const extraKmCost = kilometers > totalIncludedKm ? (kilometers - totalIncludedKm) * extraKmRate : 0;

  // Possible pricing scenarios
  const pricingOptions = [];

  // 1. Entirely daily rate
  const dailyCost = dailyRate * Math.ceil(durationInDays) + totalFuelCost + extraKmCost;
  pricingOptions.push(dailyCost);

  // 2. Entirely weekly rate
  const weeklyCost = weeklyRate * Math.ceil(durationInWeeks) + totalFuelCost + extraKmCost;
  pricingOptions.push(weeklyCost);

  // 3. Entirely monthly rate
  const monthlyCost = monthlyRate * Math.ceil(durationInMonths) + totalFuelCost + extraKmCost;
  pricingOptions.push(monthlyCost);

  // 4. Combination of weeks + remaining days
  const fullWeeks = Math.floor(durationInDays / 7);
  const remainingDays = durationInDays % 7;
  const mixedWeeksCost = fullWeeks * weeklyRate + Math.ceil(remainingDays) * dailyRate + totalFuelCost + extraKmCost;
  pricingOptions.push(mixedWeeksCost);

  // 5. Combination of months + remaining weeks
  const fullMonths = Math.floor(durationInDays / 30.42);
  const remainingWeeks = (durationInDays % 30.42) / 7;
  const mixedMonthsCost = fullMonths * monthlyRate + Math.ceil(remainingWeeks) * weeklyRate + totalFuelCost + extraKmCost;
  pricingOptions.push(mixedMonthsCost);

  // Find the most advantageous option
  const mostAdvantageousPrice = Math.min(...pricingOptions);

  // Return the best price rounded to 2 decimal places
  return parseFloat(mostAdvantageousPrice.toFixed(2));
};

export default sixtPriceCalculation;
