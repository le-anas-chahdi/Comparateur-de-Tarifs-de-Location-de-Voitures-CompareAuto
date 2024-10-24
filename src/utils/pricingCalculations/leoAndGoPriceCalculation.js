import leoAndGoPricing from '../../data/leoAndGoPricing';

// Function to calculate the total cost for Leo&Go
export const leoAndGoPricingCalculation = (carType, durationInMinutes, kilometers) => {
    const carPricing = leoAndGoPricing[carType];
    let selectedPricing = null;
    let message = '';

    // Find the appropriate pricing based on the duration
    for (let i = 0; i < carPricing.durations.length; i++) {
        if (durationInMinutes <= carPricing.durations[i].duration) {
            selectedPricing = carPricing.durations[i];
            break;
        }
    }

    // If no exact match, use the last pricing option (for long durations)
    if (!selectedPricing) {
        selectedPricing = carPricing.durations[carPricing.durations.length - 1];
        message = 'For durations longer than this, please contact Leo&Go directly for pricing.';
    }

    // Calculate the base price
    let totalCost = selectedPricing.price + carPricing.unlockFee;

    // Calculate additional cost if kilometers exceed the included amount
    if (kilometers > selectedPricing.kmIncluded) {
        const extraKm = kilometers - selectedPricing.kmIncluded;
        totalCost += extraKm * carPricing.extraKmRate;
    }

    // Return the total cost along with the message if applicable
    return {
        totalCost: totalCost.toFixed(2), // Return the total cost formatted to 2 decimal places
        message: message // Return the message (empty if not applicable)
    };
};
