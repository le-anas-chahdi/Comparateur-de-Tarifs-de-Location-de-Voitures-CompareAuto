import React from "react";

const Legal = () => {
  return (
    <section className="flex justify-center py-16 px-8">
      <div className="max-w-4xl text-slate-800">
        <h2 className="font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl text-center mb-6">
          Mentions Légales
        </h2>

        {/* Legal Content */}
        <div className="space-y-10">
          {/* Section: Éditeur du site */}
          <section>
            <h3 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">
              Éditeur du site
            </h3>
            <p className="text-gray-600 mb-4">
              Le site <strong>CarRentalCompare</strong> est édité par{" "}
              <strong>CarRentalCompare Inc.</strong>, une société spécialisée
              dans la comparaison et la réservation de voitures de location.
            </p>
            <p className="text-gray-600">
              <strong>Adresse :</strong>
              <br />
              45 Rue de la Mobilité
              <br />
              75008 Paris, France
            </p>
            <p className="text-gray-600 mt-2">
              <strong>Email :</strong> support@carrentalcompare.com
              <br />
              <strong>Téléphone :</strong> +33 1 23 45 67 89
            </p>
          </section>

          {/* Section: Hébergement */}
          <section>
            <h3 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">
              Hébergement
            </h3>
            <p className="text-gray-600 mb-4">
              Le site est hébergé par :
              <br />
              <strong>HostFrance Solutions</strong>
              <br />
              99 Avenue du Cloud
              <br />
              75010 Paris, France
            </p>
            <p className="text-gray-600">
              <strong>Téléphone :</strong> +33 9 87 65 43 21
              <br />
              <strong>Site Web :</strong>{" "}
              <a
                href="https://www.hostfrancesolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline"
              >
                www.hostfrancesolutions.com
              </a>
            </p>
          </section>

          {/* Section: Propriété intellectuelle */}
          <section>
            <h3 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">
              Propriété intellectuelle
            </h3>
            <p className="text-gray-600">
              Tous les contenus du site <strong>CarRentalCompare</strong>{" "}
              (textes, images, logos, vidéos, etc.) sont protégés par les lois
              en vigueur sur la propriété intellectuelle. Toute reproduction ou
              utilisation sans autorisation écrite est strictement interdite.
            </p>
          </section>

          {/* Section: Responsabilité */}
          <section>
            <h3 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">
              Responsabilité
            </h3>
            <p className="text-gray-600">
              CarRentalCompare ne saurait être tenu responsable des dommages
              directs ou indirects pouvant résulter de l'accès ou de l'utilisation
              du site, y compris l'inaccessibilité, les pertes de données ou la
              présence de virus sur le site.
            </p>
          </section>

          {/* Section: Politique de confidentialité */}
          <section>
            <h3 className="font-semibold 2xl:text-3xl lg:text-2xl text-xl mb-4">
              Politique de confidentialité
            </h3>
            <p className="text-gray-600">
              Nous attachons une grande importance à la confidentialité de vos
              données. Nous collectons et traitons vos informations personnelles
              dans le respect du RGPD (Règlement Général sur la Protection des
              Données). Pour plus d'informations, consultez notre{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-teal-500 hover:underline"
              >
                Politique de Confidentialité
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Legal;
