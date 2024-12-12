import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebaseConfig';
import Navbar from '../../components/layout/Navbar';
import { Divider } from "@mui/material";
import SideBarMenu from '../../components/layout/SideBarMenu'

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
        <>
          <Navbar />
          <SideBarMenu />
          <section className="text-slate-800 flex flex-col items-center gap-10 2xl:my-32 my-8">
            {/* Subscription Section */}
            <h2 className="2xl:text-5xl lg:text-3xl md:text-2xl text-xl font-semibold 2xl:mb-6">
              Choisissez votre abonnement
            </h2>
            <section className="flex items-center 2xl:gap-16 lg:gap-8 2xl:mb-8 md:gap-6 gap-3">
              <button
                onClick={() => handleSubscriptionSelect("Gratuit")}
                className="hover:bg-[#ff9900] bg-[rgb(255,204,0)] rounded-xl transition-colors duration-300 2xl:w-[180px] 2xl:h-[112px] md:w-[100px] w-[80px] h-[50px] md:h-[70px]"
              >
                <p className="2xl:text-3xl sm:text-base text-sm font-medium">
                  Gratuit
                </p>
              </button>
              <button
                onClick={() => handleSubscriptionSelect("Mensuel")}
                className="hover:bg-[#ff9900] bg-[#ffcc00] rounded-xl transition-colors duration-300 2xl:w-[180px] 2xl:h-[112px] md:w-[100px] md:h-[70px] w-[80px] h-[50px]"
              >
                <p className="2xl:text-3xl sm:text-base text-sm font-medium">
                  Mensuel
                  <br />
                  10€
                </p>
              </button>
              <button
                onClick={() => handleSubscriptionSelect("Annuel")}
                className="hover:bg-[#ff9900] bg-[#ffcc00] rounded-xl transition-colors duration-300 2xl:w-[180px] 2xl:h-[112px] md:w-[100px] md:h-[70px] w-[80px] h-[50px]"
              >
                <p className="2xl:text-3xl sm:text-base text-sm font-medium">
                  Annuel
                  <br />
                  100€
                </p>
              </button>
            </section>
            {subscriptionType && (
              <p className="text-green-600 text-lg font-medium">{message}</p>
            )}
    
            {/* Pricing Section */}
            <h2 className="2xl:text-5xl lg:text-3xl md:text-2xl text-xl text-center font-semibold">
              Tarifs des services de location de voiture
            </h2>
            <section className="w-[90%] flex md:flex-row flex-col gap-5">
              {[
                {
                  title: "Bolt",
                  details: [
                    { label: "Tarif de base", value: "0€/mois, 0.15€/min" },
                    {
                      label: "Abonnement Premium",
                      value: "9.99€/mois, réduction de 20% par trajet",
                    },
                    { label: "À la journée", value: "15€/jour, accès illimité" },
                  ],
                },
                {
                  title: "Citiz",
                  details: [
                    { label: "Abonnement Simple", value: "5€/mois, 0.10€/km" },
                    {
                      label: "Abonnement Premium",
                      value: "15€/mois, 0.08€/km, sans frais",
                    },
                    {
                      label: "À la journée",
                      value: "20€/jour avec 100 km inclus",
                    },
                  ],
                },
                {
                  title: "Uber",
                  details: [
                    {
                      label: "Uber Pass",
                      value: "5.99€/mois, 10% de réduction sur chaque trajet",
                    },
                    {
                      label: "Uber Pro",
                      value:
                        "10.99€/mois, priorité de réservation et 15% de réduction",
                    },
                    { label: "À la journée", value: "25€/jour dans la ville" },
                  ],
                },
                {
                  title: "Leo&Go",
                  details: [
                    { label: "Tarif à la Carte", value: "0€/mois, 0.18€/min" },
                    {
                      label: "Forfait Mensuel",
                      value: "8€/mois, 0.12€/min, assurance incluse",
                    },
                    {
                      label: "À la journée",
                      value: "12€/jour avec couverture",
                    },
                  ],
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="shadow-2xl flex-1 mx-2 2xl:p-16 lg:p-8 p-6"
                >
                  <h3 className="2xl:text-3xl md:text-base font-semibold flex justify-center 2xl:mb-3 mb-1">
                    {service.title}
                  </h3>
                  <Divider variant="middle" />
                  <ul className="2xl:text-2xl lg:text-base text-sm lg:space-y-5 space-y-2 2xl:mt-10 lg:mt-5 mt-2">
                    {service.details.map((detail, index) => (
                      <li key={index}>
                        <span className="font-semibold">{detail.label}:</span>{" "}
                        {detail.value}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </section>
        </>
      );
    };
    
    export default Subscription;