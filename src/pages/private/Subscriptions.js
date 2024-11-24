import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebaseConfig';
import Menu from './Menu'; // Importation du menu
import './Subscriptions.css';
import Navbar from '../../components/layout/Navbar';

const Subscription = () => {
    const [subscriptionType, setSubscriptionType] = useState(null);
    const [message, setMessage] = useState("");

    const handleSubscriptionSelect = async (type) => {
        setSubscriptionType(type);

        try {
            const currentUser = auth.currentUser;
            if (currentUser) {
                await setDoc(doc(db, 'users', currentUser.uid), { subscription: type }, { merge: true });
                setMessage(`Vous avez choisi l'abonnement ${type}.`);
            } else {
                setMessage("Veuillez vous connecter pour vous abonner.");
            }
        } catch (error) {
            console.error("Erreur lors de l'abonnement :", error);
            setMessage("Erreur lors de l'abonnement.");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="subscription-container">
                <Menu /> {/* Inclusion du menu */}
                <h2>Choisissez votre abonnement</h2>
                <div className="subscription-options">
                    <button onClick={() => handleSubscriptionSelect("Gratuit")}>Gratuit</button>
                    <button onClick={() => handleSubscriptionSelect("Mensuel")}>Mensuel - 10€</button>
                    <button onClick={() => handleSubscriptionSelect("Annuel")}>Annuel - 100€</button>
                </div>
                {subscriptionType && <p className="subscription-message">{message}</p>}

                <h2>Tarifs des services de location de voiture</h2>
                <div className="car-rental-pricing">
                    <div className="rental-card">
                        <h3>Bolt</h3>
                        <ul>
                            <li><strong>Tarif de base :</strong> 0€/mois, 0.15€/min</li>
                            <li><strong>Abonnement Premium :</strong> 9.99€/mois, réduction de 20% par trajet</li>
                            <li><strong>À la journée :</strong> 15€/jour, accès illimité</li>
                        </ul>
                    </div>

                    <div className="rental-card">
                        <h3>Citiz</h3>
                        <ul>
                            <li><strong>Abonnement Simple :</strong> 5€/mois, 0.10€/km</li>
                            <li><strong>Abonnement Premium :</strong> 15€/mois, 0.08€/km, sans frais</li>
                            <li><strong>À la journée :</strong> 20€/jour avec 100 km inclus</li>
                        </ul>
                    </div>

                    <div className="rental-card">
                        <h3>Uber</h3>
                        <ul>
                            <li><strong>Uber Pass :</strong> 5.99€/mois, 10% de réduction sur chaque trajet</li>
                            <li><strong>Uber Pro :</strong> 10.99€/mois, priorité de réservation et 15% de réduction</li>
                            <li><strong>À la journée :</strong> 25€/jour dans la ville</li>
                        </ul>
                    </div>

                    <div className="rental-card">
                        <h3>Leo&Go</h3>
                        <ul>
                            <li><strong>Tarif à la Carte :</strong> 0€/mois, 0.18€/min</li>
                            <li><strong>Forfait Mensuel :</strong> 8€/mois, 0.12€/min, assurance incluse</li>
                            <li><strong>À la journée :</strong> 12€/jour avec couverture</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;
