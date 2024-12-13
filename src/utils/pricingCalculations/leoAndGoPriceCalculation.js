import leoAndGoPricing from '../../data/leoAndGoPricing';

const MINUTES_IN_DAY = 1440;
const MAX_DAYS = 14; // Maximum duration supported by Leo&Go

export const leoAndGoPricingCalculation = (carType, durationInMinutes, kilometers) => {
    const carPricing = leoAndGoPricing[carType];
    if (!carPricing) {
        throw new Error(`Invalid car type: ${carType}`);
    }

    const { unlockFee, durations, extraKmRate } = carPricing;

    // Convert duration to days for comparison
    const durationInDays = Math.ceil(durationInMinutes / MINUTES_IN_DAY);

    // If the duration exceeds the maximum limit
    if (durationInDays > MAX_DAYS) {
        return {
            totalCost: null,
            message: `For durations exceeding ${MAX_DAYS} days, please contact Leo&Go directly.`,
        };
    }

    // Initialize the best price as infinity
    let bestPrice = Infinity;

    // Iterate through all listed durations
    durations.forEach(({ duration, price, kmIncluded }) => {
        // Full duration fits within this tier
        if (duration * MINUTES_IN_DAY >= durationInMinutes) {
            const extraKmCost = Math.max(0, kilometers - kmIncluded) * extraKmRate;
            const totalCost = unlockFee + price + extraKmCost;
            bestPrice = Math.min(bestPrice, totalCost);
        }
    });

    // Handle durations that exceed any single tier but are within the 14-day limit
    for (let i = 0; i < durations.length; i++) {
        const { duration: fullDays, price: fullPrice, kmIncluded: includedKm } = durations[i];
        const remainingMinutes = durationInMinutes - fullDays * MINUTES_IN_DAY;

        // If the duration exceeds the current tier
        if (remainingMinutes > 0) {
            // Calculate the cost for the full tier
            const extraKmCost = Math.max(0, kilometers - includedKm) * extraKmRate;

            // Handle remaining time as additional cost
            const nextTier = durations[i + 1];
            let remainingCost = 0;

            if (nextTier) {
                // Use the next tier's price for remaining time
                remainingCost =
                    (remainingMinutes / (nextTier.duration * MINUTES_IN_DAY)) * nextTier.price;
            } else {
                // Fall back to the last tier's price for extra time
                remainingCost =
                    (remainingMinutes / MINUTES_IN_DAY) * durations[durations.length - 1].price;
            }

            const totalCost = unlockFee + fullPrice + remainingCost + extraKmCost;
            bestPrice = Math.min(bestPrice, totalCost);
        }
    }

    return {
        totalCost: parseFloat(bestPrice.toFixed(2)),
        message: null, // No error message if calculation succeeds
    };
};
