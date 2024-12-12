import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="flex justify-center py-16 px-8">
      <div className="max-w-4xl text-slate-800">
        <h1 className="font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl text-center mb-6">
          Politique de confidentialité
        </h1>
        <p className="text-center text-gray-500 mb-12">Dernière mise à jour : 26 novembre 2024</p>

        <section className="mb-8">
          <h2 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">Introduction</h2>
          <p className="text-gray-600">
            Chez <strong>CarRentalCompare</strong>, la protection de vos données personnelles est une priorité.
            Cette politique de confidentialité décrit la manière dont nous collectons, utilisons et protégeons vos
            informations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">
            1. Informations que nous collectons
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Informations que vous fournissez :</strong> Nom, adresse e-mail, numéro de téléphone, etc.
            </li>
            <li>
              <strong>Données techniques :</strong> Adresse IP, type de navigateur, pages visitées, etc.
            </li>
            <li>
              <strong>Cookies :</strong> Pour améliorer votre expérience utilisateur.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">
            2. Comment nous utilisons vos informations
          </h2>
          <p className="text-gray-600 mb-4">Nous utilisons vos données pour :</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Fournir et améliorer nos services.</li>
            <li>Répondre à vos questions ou demandes.</li>
            <li>Personnaliser votre expérience sur notre plateforme.</li>
            <li>Envoyer des notifications importantes ou des mises à jour.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">
            3. Partage de vos informations
          </h2>
          <p className="text-gray-600 mb-4">
            Nous ne partageons vos données personnelles qu'avec des tiers de confiance pour :
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>La gestion des paiements sécurisés.</li>
            <li>Les services de réservation de voitures.</li>
            <li>Respecter les obligations légales.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">4. Sécurité des données</h2>
          <p className="text-gray-600">
            Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos informations contre tout accès non autorisé, utilisation abusive ou divulgation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">5. Vos droits</h2>
          <p className="text-gray-600 mb-4">Vous avez le droit de :</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Accéder à vos données personnelles.</li>
            <li>Corriger vos informations si elles sont incorrectes.</li>
            <li>Demander la suppression de vos données.</li>
            <li>Vous opposer à l'utilisation de vos données.</li>
          </ul>
          <p className="text-gray-600">
            Pour exercer vos droits, contactez-nous à l'adresse suivante :{" "}
            <a
              href="mailto:privacy@carrentalcompare.com"
              className="text-teal-500 hover:underline"
            >
              privacy@carrentalcompare.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">
            6. Modifications de cette politique
          </h2>
          <p className="text-gray-600">
            Nous nous réservons le droit de modifier cette politique de confidentialité. Toute mise à jour sera
            publiée sur cette page avec une nouvelle date de mise à jour.
          </p>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
