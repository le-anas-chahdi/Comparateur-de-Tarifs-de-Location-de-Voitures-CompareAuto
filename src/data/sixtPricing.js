const sixtPricing = {
  catS: {
    dailyRate: 114.07,
    weeklyRate: 325.50,
    monthlyRate: 931.67,
    includedKmPerDay: Infinity,
    extraKmRate: 0,
    fuelConsumption: 5.9,
  },
  catM: {
    dailyRate: 125.96,
    weeklyRate: 367.84,
    monthlyRate: 1058.84,
    includedKmPerDay: Infinity,
    extraKmRate: 0,
    fuelConsumption: 5.6,
  },
  catL: {
    dailyRate: 149.96,
    weeklyRate: 440.94,
    monthlyRate: 1280.40,
    includedKmPerDay: Infinity,
    extraKmRate: 0,
    fuelConsumption: 6.2,
  },
  catXL: {
    dailyRate: 180.98,
    weeklyRate: 541.91,
    monthlyRate: 1583.53,
    includedKmPerDay: Infinity,
    extraKmRate: 0,
    fuelConsumption: 7.1,
  },
  catXXL: {
    dailyRate: 319.99,
    weeklyRate: 868.96,
    monthlyRate: 3650.41,
    includedKmPerDay: 4096, // Monthly limit for certain models
    extraKmRate: 0.18, // Charged beyond the included kilometers
    fuelConsumption: 8.3,
  },
};

export default sixtPricing;
