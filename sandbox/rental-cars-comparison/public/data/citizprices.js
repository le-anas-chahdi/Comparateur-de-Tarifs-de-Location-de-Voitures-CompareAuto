const tarifsCitiz = {
    offreDecouverte: {
        description: "3 mois d'abonnement gratuits + frais d'inscription réduits",
        fraisInscription: "10 € (au lieu de 40€ hors inscription en ligne)",
        conditions: "Inscription simplifiée en ligne, paiement par CB à la location",
    },
    petitesVoitures: {
        abonnement: {
            tarifHoraire: "2,50 €/heure",
            tarifJournalier: "22 €/jour",
            tarifHebdomadaire: "120 €/semaine",
        },
        sansAbonnement: {
            tarifHoraire: "5 €/heure",
            tarifJournalier: "39 €/jour",
            tarifHebdomadaire: "180 €/semaine",
        },
        tarifKmSupplementaire: "0,41 €/km puis 0,22 €/km après 100 km",
    },
    voituresMoyennes: {
        abonnement: {
            tarifHoraire: "3 €/heure",
            tarifJournalier: "27 €/jour",
            tarifHebdomadaire: "150 €/semaine",
        },
        sansAbonnement: {
            tarifHoraire: "5,50 €/heure",
            tarifJournalier: "45 €/jour",
            tarifHebdomadaire: "210 €/semaine",
        },
        tarifKmSupplementaire: "0,41 €/km puis 0,22 €/km après 100 km",
    },
    grandesVoitures: {
        abonnement: {
            tarifHoraire: "3,50 €/heure",
            tarifJournalier: "33 €/jour",
            tarifHebdomadaire: "180 €/semaine",
        },
        sansAbonnement: {
            tarifHoraire: "6 €/heure",
            tarifJournalier: "50 €/jour",
            tarifHebdomadaire: "240 €/semaine",
        },
        tarifKmSupplementaire: "0,41 €/km puis 0,22 €/km après 100 km",
    },
    tresGrandesVoitures: {
        abonnement: {
            tarifHoraire: "4 €/heure",
            tarifJournalier: "38 €/jour",
            tarifHebdomadaire: "210 €/semaine",
        },
        sansAbonnement: {
            tarifHoraire: "6,50 €/heure",
            tarifJournalier: "56 €/jour",
            tarifHebdomadaire: "270 €/semaine",
        },
        tarifKmSupplementaire: "0,41 €/km puis 0,22 €/km après 100 km",
    },
    voituresXXL: {
        abonnement: {
            tarifHoraire: "4,50 €/heure",
            tarifJournalier: "44 €/jour",
            tarifHebdomadaire: "240 €/semaine",
        },
        sansAbonnement: {
            tarifHoraire: "7 €/heure",
            tarifJournalier: "60 €/jour",
            tarifHebdomadaire: "300 €/semaine",
        },
        tarifKmSupplementaire: "0,51 €/km puis 0,27 €/km après 100 km",
    },
};

export default tarifsCitiz;
