import tarifsCitiz from './tarifsCitiz.js';

function obtenirMeilleurTarif(typeVoiture, jours) {
    const tarifs = tarifsCitiz[typeVoiture];
    if (!tarifs) {
        return `Type de voiture "${typeVoiture}" non trouvé.`;
    }

    const abonnementTarifJournalier = parseFloat(tarifs.abonnement.tarifJournalier.replace(' €/jour', ''));
    const abonnementTarifHebdomadaire = parseFloat(tarifs.abonnement.tarifHebdomadaire.replace(' €/semaine', ''));

    // Calcule le coût en utilisant une combinaison de semaines et de jours
    const semaines = Math.floor(jours / 7);
    const joursRestants = jours % 7;

    const coutParSemainesEtJours = (semaines * abonnementTarifHebdomadaire) + (joursRestants * abonnementTarifJournalier);
    const coutParJoursSeuls = jours * abonnementTarifJournalier;
    const coutParDeuxSemaines = 2 * abonnementTarifHebdomadaire;

    // Détermine le coût minimal parmi les différentes combinaisons
    const meilleurPrix = Math.min(coutParSemainesEtJours, coutParJoursSeuls, coutParDeuxSemaines);

    return {
        typeVoiture,
        jours,
        meilleurPrix,
        details: {
            coutParSemainesEtJours,
            coutParJoursSeuls,
            coutParDeuxSemaines,
        }
    };
}

// Exporter la fonction pour utilisation ultérieure
export default obtenirMeilleurTarif;
