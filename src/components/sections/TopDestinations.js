import React from 'react';
import './TopDestinations.css'; // Assurez-vous de créer ce fichier CSS

const TopDestinations = () => {
  const destinations = [
    {
      title: "En Europe",
      description: `Partir à l'étranger, c'est l'occasion de découvrir des lieux magiques avec un dépaysement intense ! 
        Que ce soit pour rejoindre Amsterdam, Londres, Barcelone, les côtes italiennes ou la montagne, 
        comparez les prix de tous les moyens de transport. Partez à l'aventure et vivez vos rêves. 
        Le voyage est la seule chose qu'on achète qui nous rend plus riche.`,
      image: "/imaze/europe.jpg", // Assurez-vous d'ajouter l'image correspondante dans le dossier public/images
    },
    {
      title: "En France",
      description: `Ah, la France... Le plus beau pays du monde ! Que ce soit en train, en bus ou en avion, 
        CarRentalCompare vous permet de voyager aux 4 coins de notre beau pays à des prix imbattables. 
        Envie de passer un week-end à Paris ? Une semaine dans le Sud ou à la mer ?`,
      image: "/imaze/france.jpg", // Image pour la France
    },
    {
      title: "Au soleil",
      description: `La prochaine fois que le temps est gris, rappelez-vous que le soleil brille toujours quelque part ! 
        Il suffit souvent de partir vers le sud pour retrouver les rayons du soleil. Vous y serez en quelques heures en train ou en avion. 
        Bonus : les gens du Sud sont vraiment sympas et vous y trouverez souvent la mer.`,
      image: "/imaze/sun.jpg", // Image pour le soleil
    },
  ];

  return (
    <div className="top-destinations">
      <h2>Top destinations</h2>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <img src={destination.image} alt={destination.title} />
            <h3>{destination.title}</h3>
            <p>{destination.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
