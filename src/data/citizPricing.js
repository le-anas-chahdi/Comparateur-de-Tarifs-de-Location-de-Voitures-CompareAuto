const citizPricing = {

  noSubscription: {
      //voitures type twingo
      catS: { 
        hourly: 5.5,
        daily: 39,
        weekly: 180, 
        kmRate: 0.42, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      //voitures type clio
      catM: { 
        hourly: 6, 
        daily: 45, 
        weekly: 210, 
        kmRate: 0.42, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      //voiture type 308 sw
      catL: {
        hourly: 6.5, 
        daily: 50, 
        weekly: 240, 
        kmRate: 0.42, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      //voitures type scenic
      catXL: { 
        hourly: 7, 
        daily: 56, 
        weekly: 270, 
        kmRate: 0.52, 
        reducedKmRate: 0.27, 
        reducedKmThreshold: 100 },

      //voiture type traffic
      catXXL: { 
        hourly: 7.5, 
        daily: 60, 
        weekly: 300, 
        kmRate: 0.52, 
        reducedKmRate: 0.27, 
        reducedKmThreshold: 100 },

  },

  subscription: {

      catS: { 
        hourly: 3, 
        daily: 22, 
        weekly: 120, 
        kmRate: 0.42, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      catM: { 
        hourly: 3.5, 
        daily: 27, 
        weekly: 150, 
        kmRate: 0.42, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      catL: { 
        hourly: 4, 
        daily: 33, 
        weekly: 180, 
        kmRate: 0.42, 
        reducedKmRate: 0.22, 
        reducedKmThreshold: 100 },

      catXL: { 
        hourly: 4.5, 
        daily: 38, 
        weekly: 210, 
        kmRate: 0.52, 
        reducedKmRate: 0.27, 
        reducedKmThreshold: 100 },

      utilityVehicles3m3: {
          unlockFee: 0, 
          durations: [
              { duration: 0, price: 0, kmIncluded: 100000 }
          ],
          extraKmRate: 0 // Extra km cost after included km
      },

      catXXL: { 
        hourly: 5, 
        daily: 44, 
        weekly: 240, 
        kmRate: 0.52, 
        reducedKmRate: 0.27, 
        reducedKmThreshold: 100 }
  },

};

export default citizPricing;
