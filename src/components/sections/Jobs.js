import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const Jobs = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col items-center text-slate-800 2xl:py-32 xl:py-16 py-8">
        {/* Header Section */}
        <header className="text-center max-w-4xl space-y-4">
          <h1 className="font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl">
            Rejoignez notre équipe
          </h1>
          <p className="2xl:text-2xl lg:text-lg text-base text-gray-600">
            Rejoignez une équipe dynamique et passionnée qui révolutionne le
            monde de la location de voitures. Chez nous, chaque voix compte, et
            nous travaillons ensemble pour créer des solutions innovantes.
          </p>
          <p>

          </p>
          <a
            href="#jobs-section"
            className="bg-[#ffcc00] hover:bg-[#ff9900] text-slate-800 font-medium px-8 py-3 rounded-lg transition-all"
          >
            Voir les offres
          </a>
        </header>

        {/* Values Section */}
        <section className="w-full max-w-6xl mt-16">
          <h2 className="font-semibold text-center 2xl:text-4xl lg:text-3xl text-2xl mb-8">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Nous repoussons les limites pour développer des solutions uniques et impactantes.",
              },
              {
                title: "Travail d'équipe",
                description:
                  "Nous croyons en la force du collectif pour atteindre l'excellence ensemble.",
              },
              {
                title: "Impact",
                description:
                  "Chaque action compte et contribue à un avenir plus durable et accessible.",
              },
              {
                title: "Excellence",
                description:
                  "Nous nous efforçons d'offrir la meilleure expérience à nos clients et employés.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="shadow-xl p-6 rounded-lg text-center bg-white"
              >
                <h3 className="font-semibold text-xl mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Jobs Section */}
        <section
          id="jobs-section"
          className="w-full max-w-6xl mt-20 text-center"
        >
          <h2 className="font-semibold 2xl:text-4xl lg:text-3xl text-2xl mb-8">
            Nos Offres d'Emploi
          </h2>
          <p className="text-gray-600 mb-6">
            Surveillez cette page pour ne pas manquer nos nouvelles opportunités. Dès qu'une offre est publiée, allez vite postuler !
          </p>
          <ul className="text-gray-600 space-y-4 mb-12">
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.indeed.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline"
              >
                Indeed
              </a>
            </li>
            <li>
              <a
                href="https://www.welcometothejungle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:underline"
              >
                Welcome to the Jungle
              </a>
            </li>
          </ul>
          <p className="italic text-gray-600">
            Nous n'avons pas d'offres d'emploi pour le moment !
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {[
              {
                title: "Développeur Backend",
                location: "Paris, France - Temps plein",
                link: "/jobs/backend",
              },
              {
                title: "Marketing Digital",
                location: "Lyon, France - Temps plein",
                link: "/jobs/marketing",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="shadow-xl p-6 rounded-lg bg-white text-center"
              >
                <h3 className="font-semibold text-xl mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.location}</p>
                <a
                  href="https://fr.indeed.com/jobs?q=D%C3%A9veloppeur+Backend&l=Paris+%2875%29&from=searchOnHP&vjk=36d304d7c5cadb40"
                  className="bg-[#ffcc00] hover:bg-[#ff9900] text-slate-800 font-medium px-8 py-3 rounded-lg transition-all"
                >
                  Postuler
                </a>
              </div>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Jobs;
