const europcarPricing = {

    noSubscription: {

      verysmallCars: {
        dailyRate: 40,
        weeklyRate: 250,
        monthlyRate: 900,
        includedKmPerDay: 100,
        extraKmRate: 0.25,
      },
      smallCars: {
        dailyRate: 50,
        weeklyRate: 300,
        monthlyRate: 1000,
        includedKmPerDay: 100,
        extraKmRate: 0.30,
      },
      compactCars: {
        dailyRate: 60,
        weeklyRate: 360,
        monthlyRate: 1200,
        includedKmPerDay: 100,
        extraKmRate: 0.35,
      },
      compactCarsAuto: {
        dailyRate: 65,
        weeklyRate: 390,
        monthlyRate: 1300,
        includedKmPerDay: 100,
        extraKmRate: 0.40,
      },
      electricCompactCars: {
        dailyRate: 70,
        weeklyRate: 420,
        monthlyRate: 1400,
        includedKmPerDay: 100,
        extraKmRate: 0.45,
      },
      suvCars: {
        dailyRate: 90,
        weeklyRate: 540,
        monthlyRate: 1800,
        includedKmPerDay: 100,
        extraKmRate: 0.50,
      },
      luxuryCars: {
        dailyRate: 150,
        weeklyRate: 900,
        monthlyRate: 3000,
        includedKmPerDay: 100,
        extraKmRate: 0.75,
      },
      premiumSuv: {
        dailyRate: 200,
        weeklyRate: 1200,
        monthlyRate: 4000,
        includedKmPerDay: 100,
        extraKmRate: 1.00,
      },
      intermediateCars: {
        dailyRate: 75,
        weeklyRate: 450,
        monthlyRate: 1500,
        includedKmPerDay: 100,
        extraKmRate: 0.40,
      },
      mpvCars: {
        dailyRate: 120,
        weeklyRate: 700,
        monthlyRate: 2500,
        includedKmPerDay: 100,
        extraKmRate: 0.60,
      },
    },
    insurances: {
        //cout par jour
      basic: 0, // inclus dans le tarif de base
      medium: 15, 
      premium: 25,
    },
    additionalServices: {
        //cout par jour
      gps: 10,
      babySeat: 5,
      additionalDriver: 20,
      winterTyres: 15,
    },
    locationFees: {
      airportPickup: 30,
      oneWayFee: 50, // frais de restitution dans une autre agence
      trainStationPickup: 15, // prise en charge à une gare
    },
  };
  
  export default europcarPricing;
  