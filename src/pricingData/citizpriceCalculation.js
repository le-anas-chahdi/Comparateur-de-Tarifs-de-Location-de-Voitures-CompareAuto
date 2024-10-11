import citizPricing from './citizPricing';

// List of car types not offered by Citiz
const unavailableCarTypes = ['utilityVehicles3m3', 'teslaCars', 'airportCars'];

// No subscription pricing calculation
export const noSubscriptionPricing = (carType, durationInMinutes, kilometers) => {
    // Return 0 if the car type is unavailable for Citiz
    if (unavailableCarTypes.includes(carType)) {
        return 0;
    }

    const carPricing = citizPricing.noSubscription[carType];
    let totalCost = 0;

    const durationInHours = durationInMinutes / 60; // Convert minutes to hours
    const durationInDays = durationInMinutes / 1440; // Convert minutes to days
    /*const durationInWeeks = durationInMinutes / 10080; */

    // If the duration is less than a day
    if (durationInHours < 24) {
        const hourlyCost = durationInHours * carPricing.hourly;
        totalCost = Math.min(hourlyCost, carPricing.daily); // Compare hourly and daily cost
    } 
    // If the duration is between 1 day and 7 days
    else if (durationInDays >= 1 && durationInDays <= 7) {
        const dailyCost = durationInDays * carPricing.daily;
        totalCost = Math.min(dailyCost, carPricing.weekly); // Compare daily and weekly cost
    } 
    // If the duration is more than 7 days (multiple weeks)
    else {
        const weeks = Math.floor(durationInDays / 7); // Number of full weeks
        const remainingDays = durationInDays % 7; // Remaining days after full weeks

        const weeklyCostOption1 = weeks * carPricing.weekly + remainingDays * carPricing.daily; // Week + remaining days
        const weeklyCostOption2 = (weeks + 1) * carPricing.weekly; // Extra week

        totalCost = Math.min(weeklyCostOption1, weeklyCostOption2); // Choose the cheapest option
    }

    // Calculate cost for kilometers
    if (kilometers > carPricing.reducedKmThreshold) {
        const kmCost = carPricing.reducedKmThreshold * carPricing.kmRate + (kilometers - carPricing.reducedKmThreshold) * carPricing.reducedKmRate;
        totalCost += kmCost;
    } else {
        totalCost += kilometers * carPricing.kmRate;
    }

    return totalCost.toFixed(2); // Return total cost with two decimal places
};

// Subscription pricing calculation
export const subscriptionPricing = (carType, durationInMinutes, kilometers) => {
    // Return 0 if the car type is unavailable for Citiz
    if (unavailableCarTypes.includes(carType)) {
        return 0;
    }

    const carPricing = citizPricing.subscription[carType];
    let totalCost = 0;

    const durationInHours = durationInMinutes / 60; // Convert minutes to hours
    const durationInDays = durationInMinutes / 1440; // Convert minutes to days
    const durationInWeeks = durationInMinutes / 10080; // Convert minutes to weeks

    // If the duration is less than a day
    if (durationInHours < 24) {
        const hourlyCost = durationInHours * carPricing.hourly;
        totalCost = Math.min(hourlyCost, carPricing.daily); // Compare hourly and daily cost
    } 
    // If the duration is between 1 day and 7 days
    else if (durationInDays >= 1 && durationInDays <= 7) {
        const dailyCost = durationInDays * carPricing.daily;
        totalCost = Math.min(dailyCost, carPricing.weekly); // Compare daily and weekly cost
    } 
    // If the duration is more than 7 days (multiple weeks)
    else {
        const weeks = Math.floor(durationInDays / 7); // Number of full weeks
        const remainingDays = durationInDays % 7; // Remaining days after full weeks

        const weeklyCostOption1 = weeks * carPricing.weekly + remainingDays * carPricing.daily; // Week + remaining days
        const weeklyCostOption2 = (weeks + 1) * carPricing.weekly; // Extra week

        totalCost = Math.min(weeklyCostOption1, weeklyCostOption2); // Choose the cheapest option
    }

    // Calculate cost for kilometers
    if (kilometers > carPricing.reducedKmThreshold) {
        const kmCost = carPricing.reducedKmThreshold * carPricing.kmRate + (kilometers - carPricing.reducedKmThreshold) * carPricing.reducedKmRate;
        totalCost += kmCost;
    } else {
        totalCost += kilometers * carPricing.kmRate;
    }

    return totalCost.toFixed(2); // Return total cost with two decimal places
};
