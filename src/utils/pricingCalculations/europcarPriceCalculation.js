import europcarPricing from '../../data/europcarPricing';

const unavailableCarTypes = [];

export const europcarPriceCalculation = (carType, durationInMinutes, kilometers) => {
    // Vérifier si le type de voiture est disponible
    if (unavailableCarTypes.includes(carType)) {
        return 0;
    }

    const carPricing = europcarPricing.noSubscription[carType];
    if (!carPricing) {
        console.error(`Type de voiture "${carType}" non valide pour Europcar.`);
        return 0;
    }

    let totalCost = 0;
    const durationInDays = Math.ceil(durationInMinutes / 1440); // Convertir les minutes en jours

    // Calcul pour les durées de location
    if (durationInDays < 7) {
        // Calcul journalier
        totalCost = durationInDays * carPricing.dailyRate;
    } else if (durationInDays < 30) {
        // Calcul hebdomadaire
        const weeks = Math.floor(durationInDays / 7);
        const remainingDays = durationInDays % 7;

        const weeklyCostOption1 = weeks * carPricing.weeklyRate + remainingDays * carPricing.dailyRate; // Semaine + jours restants
        const weeklyCostOption2 = (weeks + 1) * carPricing.weeklyRate; // Semaine complète supplémentaire

        totalCost = Math.min(weeklyCostOption1, weeklyCostOption2); // Choisir l'option la moins chère
    } else {
        // Calcul mensuel
        const months = Math.floor(durationInDays / 30);
        const remainingDays = durationInDays % 30;

        const monthlyCostOption1 = months * carPricing.monthlyRate + remainingDays * carPricing.dailyRate; // Mois + jours restants
        const monthlyCostOption2 = (months + 1) * carPricing.monthlyRate; // Mois complet supplémentaire

        totalCost = Math.min(monthlyCostOption1, monthlyCostOption2); // Choisir l'option la moins chère
    }

    // Calcul des kilomètres supplémentaires
    const includedKm = carPricing.includedKmPerDay * durationInDays;
    const extraKm = Math.max(0, kilometers - includedKm);
    const extraKmCost = extraKm * carPricing.extraKmRate;

    // Ajouter le coût des kilomètres supplémentaires
    totalCost += extraKmCost;

    return {
        totalCost: totalCost.toFixed(2), // Retourner le coût total avec deux décimales
    };
};
