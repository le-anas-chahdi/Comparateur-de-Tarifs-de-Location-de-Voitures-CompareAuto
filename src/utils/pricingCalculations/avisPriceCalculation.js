import avisPricing from '../../data/avisPricing';

export const avisPriceCalculation = (carType, durationInMinutes) => {
    const carPricing = avisPricing.noSubscription[carType];
    if (!carPricing) {
        return 0; // Return 0 if the car type is not available
    }

    const durationInDays = Math.ceil(durationInMinutes / 1440); // Always round up to the nearest day
    const durationInWeeks = Math.ceil(durationInMinutes / 10080); // Always round up to the nearest week
    const durationInMonths = Math.ceil(durationInMinutes / 43800); // Always round up to the nearest month

    let totalCost = 0;

    if (durationInDays <= 7) {
        totalCost = durationInDays * carPricing.daily; // Use daily rate for up to 7 days
    } else if (durationInDays <= 30) {
        totalCost = durationInWeeks * carPricing.weekly; // Use weekly rate for up to a month
    } else {
        totalCost = durationInMonths * carPricing.monthly; // Use monthly rate for over a month
    }

    return totalCost.toFixed(2); // Return the total cost rounded to 2 decimals
};
