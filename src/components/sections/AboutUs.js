import React from 'react';
import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
    <div className="about-us">
      
      {/* Section À propos */}
      <section className="space-y-5 text-slate-800 flex flex-col items-center py-10 lg:gap-5 xl:gap-8">
        <div className="container mx-auto space-y-12 text-center">
          <SectionTitle title="À Propos" />
          <ContentBox>
            <p className="text-lg leading-relaxed">
              <strong>Votre entreprise</strong> révolutionne le domaine de la location de voitures. Notre mission : rendre la location plus simple, rapide et accessible en comparant les meilleures offres des compagnies telles que <strong>Avis, Bolt, Citiz, Europcar, Hertz, Leo&Go, et Sixt</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Nous utilisons des technologies avancées pour offrir une expérience utilisateur fluide, avec un focus sur l'innovation et la satisfaction client.
            </p>
            <p className="text-lg leading-relaxed">
              L'équipe est composée de <strong>15 collaborateurs passionnés</strong>, dont 7 dans le développement, 2 en gestion de produit, et 4 en marketing. Notre équipe est jeune, tournée vers le long terme, et incroyablement diverse avec des membres venant de plusieurs nationalités.
            </p>
          </ContentBox>
        </div>
      </section>

      {/* Section Culture */}
      <section className="culture-section py-14 px-8 bg-white text-gray-800">
        <div className="container mx-auto space-y-12 text-center">
          <SectionTitle title="Notre Culture" />
          <ContentBox>
            <p className="text-lg leading-relaxed">Nous croyons en ces principes fondamentaux :</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>📖 Tout peut s'apprendre</li>
              <li>🚀 Nous pouvons surpasser les géants de notre industrie</li>
              <li>❤️ L'équilibre entre performance et plaisir est essentiel</li>
            </ul>
            <p className="text-lg leading-relaxed">Quelques avantages à travailler avec nous :</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>🔥 Vous apprendrez beaucoup et verrez rapidement les résultats de votre travail</li>
              <li>🏡 Nous favorisons le télétravail</li>
              <li>🇫🇷 De magnifiques bureaux au cœur de la ville</li>
              <li>🤠 Nous aimons organiser des séminaires en dehors des bureaux</li>
              <li>💰 Réductions sur les locations de voitures et autres avantages</li>
            </ul>
          </ContentBox>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="values-section py-14 px-8 bg-gray-50 text-gray-800">
        <div className="container mx-auto space-y-12 text-center">
          <SectionTitle title="Nos Valeurs" />
          <ContentBox>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>🏁 Résultats avant tout, en conciliant travail intense et bien-être</li>
              <li>✨ Mieux vaut fait que parfait</li>
              <li>👍 Restez simple</li>
              <li>🎁 Les retours sont un cadeau</li>
              <li>🦄 Soyez unique</li>
              <li>🚄 Avancez vite !</li>
            </ul>
          </ContentBox>
        </div>
      </section>

      {/* Section Offres d'emploi */}
      <section className="jobs-section py-14 px-8 bg-white text-gray-800">
        <div className="container mx-auto space-y-12 text-center">
          <SectionTitle title="Nos Offres d'Emploi" />
          <ContentBox>
            <p className="text-lg leading-relaxed">Surveillez cette page pour ne pas manquer nos nouvelles opportunités. Dès qu'une offre est publiée, allez vite postuler !</p>
            <p className="text-lg leading-relaxed">Retrouvez nos offres sur :</p>
            <ul className="job-links list-disc list-inside space-y-2 text-lg">
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.indeed.com" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                  Indeed
                </a>
              </li>
              <li>
                <a href="https://www.welcometothejungle.com" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
                  Welcome to the Jungle
                </a>
              </li>
            </ul>
            <p className="no-job-openings text-lg leading-relaxed">Nous n'avons pas d'offres d'emploi pour le moment !</p>
          </ContentBox>
        </div>
      </section>

      {/* Section Footer */}
      <footer className="about-footer bg-gray-800 text-white py-8 text-center">
      <p className="text-sm">
        Créé avec ❤ par{" "}
        <Link
          to="/"
          className="text-teal-400 hover:underline"
        >
          CarRentalCompare
        </Link>
      </p>
    </footer>
    </div>
  );
};

const SectionTitle = ({ title }) => (
  <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">{title}</h2>
);

const ContentBox = ({ children }) => (
  <div className="bg-white shadow-lg rounded-xl p-8 max-w-4xl mx-auto space-y-6">
    {children}
  </div>
);

export default AboutUs;