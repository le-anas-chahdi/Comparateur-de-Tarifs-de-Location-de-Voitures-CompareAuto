const citizPricing = {

  noSubscription: {

      verysmallCars: { 
        hourly: 5,
        daily: 39,
        weekly: 180, 
        kmRate: 0.41, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      smallCars: { 
        hourly: 5.5, 
        daily: 45, 
        weekly: 210, 
        kmRate: 0.41, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      compactCars: { hourly: 6, 
        daily: 50, 
        weekly: 240, 
        kmRate: 0.41, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      mpvCars: { 
        hourly: 6.5, 
        daily: 56, 
        weekly: 270, 
        kmRate: 0.51, 
        reducedKmRate: 0.27, 
        reducedKmThreshold: 100 },

      utilityVehicles3m3: {
          unlockFee: 0, 
          durations: [
              { duration: 0, price: 0, kmIncluded: 100000 }
          ],
          extraKmRate: 0 // Extra km cost after included km
      },

      utilityVehicles6m3: { 
        hourly: 7, 
        daily: 60, 
        weekly: 300, 
        kmRate: 0.51, 
        reducedKmRate: 0.27, 
        reducedKmThreshold: 100 },

        teslaCars: {
          unlockFee: 0, 
          durations: [
              { duration: 0, price: 0, kmIncluded: 100000 }
          ],
          extraKmRate: 0 // Extra km cost after included km
      },


      airportCars: {
        unlockFee: 0, 
        durations: [
            { duration: 0, price: 0, kmIncluded: 100000 }
        ],
        extraKmRate: 0 // Extra km cost after included km
    }

  },

  subscription: {

      verysmallCars: { 
        hourly: 2.5, 
        daily: 22, 
        weekly: 120, 
        kmRate: 0.41, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      smallCars: { 
        hourly: 3, 
        daily: 27, 
        weekly: 150, 
        kmRate: 0.41, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      compactCars: { 
        hourly: 3.5, 
        daily: 33, 
        weekly: 180, 
        kmRate: 0.41, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      mpvCars: { 
        hourly: 4, 
        daily: 38, 
        weekly: 210, 
        kmRate: 0.51, 
        reducedKmRate: 0.27, 
        reducedKmThreshold: 100 },

      utilityVehicles3m3: {
          unlockFee: 0, 
          durations: [
              { duration: 0, price: 0, kmIncluded: 100000 }
          ],
          extraKmRate: 0 // Extra km cost after included km
      },

      utilityVehicles6m3: { 
        hourly: 4.5, 
        daily: 44, 
        weekly: 240, 
        kmRate: 0.51, 
        reducedKmRate: 0.27, 
        reducedKmThreshold: 100 }
  },

      teslaCars: {
        unlockFee: 0, 
        durations: [
            { duration: 0, price: 0, kmIncluded: 100000 }
        ],
        extraKmRate: 0 // Extra km cost after included km
    },


    airportCars: {
      unlockFee: 0, 
      durations: [
          { duration: 0, price: 0, kmIncluded: 100000 }
      ],
      extraKmRate: 0 // Extra km cost after included km
    }
};

export default citizPricing;
