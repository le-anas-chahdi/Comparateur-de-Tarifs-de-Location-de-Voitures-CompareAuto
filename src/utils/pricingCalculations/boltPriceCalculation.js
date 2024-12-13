import boltPricing from '../../data/boltPricing';

const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = 1440;

export const boltPriceCalculation = (carType, durationInMinutes, kilometers) => {
  const pricing = boltPricing[carType];
  if (!pricing) {
    throw new Error(`Invalid car type: ${carType}`);
  }

  const { unlockFee, perMinuteRate, hourlyCap, dailyCap, perKmRate, minimumFare } = pricing;

  const durationInHours = durationInMinutes / MINUTES_IN_HOUR;
  const totalDays = Math.floor(durationInMinutes / MINUTES_IN_DAY);
  const remainingMinutes = durationInMinutes % MINUTES_IN_DAY;
  const remainingHours = Math.floor(remainingMinutes / MINUTES_IN_HOUR);
  const remainingMinutesAfterHours = remainingMinutes % MINUTES_IN_HOUR;

  const distanceCost = kilometers * perKmRate;

  // Possible combinations for time-based pricing
  const durationCosts = [];

  // Option 1: Entirely per-minute
  durationCosts.push(durationInMinutes * perMinuteRate);

  // Option 2: Entirely per-hour (capped by hourly rate)
  const totalHoursCost = Math.ceil(durationInHours) * hourlyCap;
  durationCosts.push(totalHoursCost);

  // Option 3: Entirely per-day (capped by daily rate)
  const totalDaysCost = Math.ceil(durationInMinutes / MINUTES_IN_DAY) * dailyCap;
  durationCosts.push(totalDaysCost);

  // Option 4: Mixed days + remaining hours + remaining minutes
  if (totalDays > 0 || remainingHours > 0 || remainingMinutesAfterHours > 0) {
    const mixedDaysCost = totalDays * dailyCap;
    const mixedHoursCost = Math.min(remainingHours * hourlyCap, dailyCap);
    const mixedMinutesCost = remainingMinutesAfterHours * perMinuteRate;
    durationCosts.push(mixedDaysCost + mixedHoursCost + mixedMinutesCost);
  }

  // Option 5: Mixed days + remaining minutes only
  if (totalDays > 0 || remainingMinutes > 0) {
    const mixedDaysCost = totalDays * dailyCap;
    const mixedMinutesOnlyCost = remainingMinutes * perMinuteRate;
    durationCosts.push(mixedDaysCost + mixedMinutesOnlyCost);
  }

  // Add unlock fee to all options
  const totalCosts = durationCosts.map((timeCost) => timeCost + distanceCost + unlockFee);

  // Apply minimum fare and return the best price
  const bestPrice = Math.max(Math.min(...totalCosts), minimumFare);

  return parseFloat(bestPrice.toFixed(2));
};
