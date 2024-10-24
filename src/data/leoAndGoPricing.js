const leoAndGoPricing = {
  verysmallCars: {
      unlockFee: 1, // Unlocking fee in euros
      durations: [
          { duration: 1, price: 0.34, kmIncluded: 100 },   // 1 minute
          { duration: 30, price: 8, kmIncluded: 100 },     // 30 minutes
          { duration: 60, price: 14, kmIncluded: 100 },    // 1 hour
          { duration: 120, price: 23, kmIncluded: 100 },   // 2 hours
          { duration: 180, price: 29, kmIncluded: 100 },   // 3 hours
          { duration: 360, price: 45, kmIncluded: 100 },   // 6 hours
          { duration: 1440, price: 59, kmIncluded: 100 },  // 1 day
          { duration: 2880, price: 109, kmIncluded: 200 }, // 2 days
          { duration: 4320, price: 159, kmIncluded: 300 }, // 3 days
          { duration: 5760, price: 199, kmIncluded: 400 }, // 4 days
          { duration: 7200, price: 239, kmIncluded: 500 }, // 5 days
          { duration: 8640, price: 279, kmIncluded: 600 }, // 6 days
          { duration: 10080, price: 319, kmIncluded: 700 },// 7 days
          { duration: 11520, price: 359, kmIncluded: 800 },// 8 days
          { duration: 12960, price: 399, kmIncluded: 900 },// 9 days
          { duration: 14400, price: 439, kmIncluded: 1000 },// 10 days
          { duration: 15840, price: 479, kmIncluded: 1100 },// 11 days
          { duration: 17280, price: 519, kmIncluded: 1200 },// 12 days
          { duration: 18720, price: 559, kmIncluded: 1300 },// 13 days
          { duration: 20160, price: 599, kmIncluded: 1400 },// 14 days
      ],
      extraKmRate: 0.30 // Extra km cost after included km
  },

  smallCars: {
    unlockFee: 0, 
    durations: [
        { duration: 0, price: 0, kmIncluded: 100000 }
    ],
    extraKmRate: 0 // Extra km cost after included km
},

  compactCars: {
      unlockFee: 1,
      durations: [
          { duration: 1, price: 0.34, kmIncluded: 100 },   // 1 minute
          { duration: 30, price: 8, kmIncluded: 100 },     // 30 minutes
          { duration: 60, price: 14, kmIncluded: 100 },    // 1 hour
          { duration: 120, price: 23, kmIncluded: 100 },   // 2 hours
          { duration: 180, price: 32, kmIncluded: 100 },   // 3 hours
          { duration: 360, price: 49, kmIncluded: 100 },   // 6 hours
          { duration: 1440, price: 69, kmIncluded: 100 },  // 1 day
          { duration: 2880, price: 119, kmIncluded: 200 }, // 2 days
          { duration: 4320, price: 169, kmIncluded: 300 }, // 3 days
          { duration: 5760, price: 209, kmIncluded: 400 }, // 4 days
          { duration: 7200, price: 249, kmIncluded: 500 }, // 5 days
          { duration: 8640, price: 289, kmIncluded: 600 }, // 6 days
          { duration: 10080, price: 329, kmIncluded: 700 },// 7 days
          { duration: 11520, price: 369, kmIncluded: 800 },// 8 days
          { duration: 12960, price: 409, kmIncluded: 900 },// 9 days
          { duration: 14400, price: 449, kmIncluded: 1000 },// 10 days
          { duration: 15840, price: 489, kmIncluded: 1100 },// 11 days
          { duration: 17280, price: 529, kmIncluded: 1200 },// 12 days
          { duration: 18720, price: 569, kmIncluded: 1300 },// 13 days
          { duration: 20160, price: 609, kmIncluded: 1400 },// 14 days
      ],
      extraKmRate: 0.30
  },

  airportCars: {
      unlockFee: 1,
      durations: [
          { duration: 30, price: 8, kmIncluded: 100 },      // 30 minutes
          { duration: 30, price: 17.99, kmIncluded: 100 },  // Airport package (8€ + 9.99€)
      ],
      extraKmRate: 0.30
  },
  utilityVehicles3m3: {
      unlockFee: 1,
      durations: [
          { duration: 1, price: 0.34, kmIncluded: 100 },   // 1 minute
          { duration: 30, price: 8, kmIncluded: 100 },     // 30 minutes
          { duration: 60, price: 14, kmIncluded: 100 },    // 1 hour
          { duration: 1440, price: 59, kmIncluded: 100 },  // 1 day
          { duration: 2880, price: 109, kmIncluded: 200 }, // 2 days
          { duration: 4320, price: 159, kmIncluded: 300 }, // 3 days
          { duration: 5760, price: 199, kmIncluded: 400 }, // 4 days
          { duration: 7200, price: 239, kmIncluded: 500 }, // 5 days
          { duration: 8640, price: 279, kmIncluded: 600 }, // 6 days
          { duration: 10080, price: 319, kmIncluded: 700 },// 7 days
          { duration: 11520, price: 359, kmIncluded: 800 },// 8 days
          { duration: 12960, price: 399, kmIncluded: 900 },// 9 days
          { duration: 14400, price: 439, kmIncluded: 1000 },// 10 days
          { duration: 15840, price: 479, kmIncluded: 1100 },// 11 days
          { duration: 17280, price: 519, kmIncluded: 1200 },// 12 days
          { duration: 18720, price: 559, kmIncluded: 1300 },// 13 days
          { duration: 20160, price: 599, kmIncluded: 1400 },// 14 days
      ],
      extraKmRate: 0.30
  },
  utilityVehicles6m3: {
      unlockFee: 1,
      durations: [
          { duration: 1, pricePerMinute: 0.39, kmIncluded: 100 },   // 1 minute
          { duration: 180, price: 39, kmIncluded: 100 },            // 3 hours
          { duration: 360, price: 59, kmIncluded: 100 },            // 6 hours
          { duration: 1440, price: 79, kmIncluded: 100 },           // 1 day
          { duration: 2880, price: 149, kmIncluded: 200 },          // 2 days
          { duration: 4320, price: 209, kmIncluded: 300 },          // 3 days
          { duration: 5760, price: 269, kmIncluded: 400 },          // 4 days
          { duration: 7200, price: 329, kmIncluded: 500 },          // 5 days
          { duration: 8640, price: 389, kmIncluded: 600 },          // 6 days
          { duration: 10080, price: 449, kmIncluded: 700 },         // 7 days
          { duration: 11520, price: 509, kmIncluded: 800 },         // 8 days
          { duration: 12960, price: 569, kmIncluded: 900 },         // 9 days
          { duration: 14400, price: 629, kmIncluded: 1000 },        // 10 days
      ],
      extraKmRate: 0.30
  },
  teslaCars: {
      unlockFee: 1,
      durations: [
          { duration: 240, price: 59, kmIncluded: 100 },   // 4 hours
          { duration: 1440, price: 69, kmIncluded: 100 },  // 1 day
          { duration: 2880, price: 119, kmIncluded: 200 }, // 2 days
          { duration: 4320, price: 169, kmIncluded: 300 }, // 3 days
          { duration: 5760, price: 219, kmIncluded: 400 }, // 4 days
          { duration: 7200, price: 269, kmIncluded: 500 }, // 5 days
          { duration: 8640, price: 319, kmIncluded: 600 }, // 6 days
          { duration: 10080, price: 369, kmIncluded: 700 },// 7 days
      ],
      extraKmRate: 0.40
  },

  mpvCars: {
    unlockFee: 0, 
    durations: [
        { duration: 0, price: 0, kmIncluded: 100000 }
    ],
    extraKmRate: 0 // Extra km cost after included km
  }
};

export default leoAndGoPricing;
