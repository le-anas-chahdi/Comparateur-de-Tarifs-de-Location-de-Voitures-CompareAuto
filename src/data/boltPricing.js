const boltPricing = {
  catS: {
    unlockFee: 1.0,
    perMinuteRate: 0.25,
    hourlyCap: 15.0,
    dailyCap: 50.0,
    perKmRate: 0.20,
    minimumFare: 5.0,
  },
  catM: {
    unlockFee: 1.5,
    perMinuteRate: 0.35,
    hourlyCap: 20.0,
    dailyCap: 70.0,
    perKmRate: 0.30,
    minimumFare: 7.0,
  },
  catL: {
    unlockFee: 2.0,
    perMinuteRate: 0.40,
    hourlyCap: 25.0,
    dailyCap: 90.0,
    perKmRate: 0.35,
    minimumFare: 10.0,
  },
  catXL: {
    unlockFee: 2.5,
    perMinuteRate: 0.50,
    hourlyCap: 30.0,
    dailyCap: 120.0,
    perKmRate: 0.40,
    minimumFare: 15.0,
  },
  catXXL: {
    unlockFee: 3.0, 
    perMinuteRate: 0.60,
    hourlyCap: 40.0,
    dailyCap: 150.0,
    perKmRate: 0.50,
    minimumFare: 20.0,
  },
};

export default boltPricing;
