import React, { useState } from 'react';
import './ComparisonForm.css';
import { Line } from 'react-chartjs-2';
import { 
  noSubscriptionPricing, 
  subscriptionPricing 
} from '../utils/pricingCalculations/citizpriceCalculation';
import { leoAndGoPricingCalculation } from '../utils/pricingCalculations/leoAndGoPriceCalculation';
import avisPriceCalculation from '../utils/pricingCalculations/avisPriceCalculation';
import { europcarPriceCalculation } from '../utils/pricingCalculations/europcarPriceCalculation';
import HertzPriceCalculation from '../utils/pricingCalculations/hertzPriceCalculation';
import sixtPriceCalculation from '../utils/pricingCalculations/sixtPriceCalculation';
import { boltPriceCalculation } from '../utils/pricingCalculations/boltPriceCalculation';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const convertDurationToMinutes = (duration, scale) => {
  const scales = { minutes: 1, hours: 60, days: 1440, weeks: 10080, months: 43800 };
  return parseFloat(duration) * (scales[scale] || 1);
};

const ComparisonForm = () => {
  const [duration, setDuration] = useState('');
  const [durationScale, setDurationScale] = useState('days');
  const [carType, setCarType] = useState('catS');
  const [kilometers, setKilometers] = useState('');
  const [priceData, setPriceData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const durationInMinutes = convertDurationToMinutes(duration, durationScale);
    const kilometersValue = parseFloat(kilometers) || 0;

    const labels = [];
    const data = [];
    const borderColor = [];

    try {
      // Leo&Go
      const leoAndGoPrice = leoAndGoPricingCalculation(carType, durationInMinutes, kilometersValue);
      labels.push('Leo&Go');
      data.push(leoAndGoPrice?.totalCost || leoAndGoPrice || 0);
      borderColor.push('#FF6B00');
    } catch (error) {
      console.error('Leo&Go Error:', error);
      labels.push('Leo&Go');
      data.push(0);
      borderColor.push('#FF6B00');
    }

    try {
      // Citiz (No Subscription)
      const citizNoSubPrice = noSubscriptionPricing(carType, durationInMinutes, kilometersValue);
      labels.push('Citiz (No Subscription)');
      data.push(citizNoSubPrice || 0);
      borderColor.push('#007bff');
    } catch (error) {
      console.error('Citiz No Subscription Error:', error);
      labels.push('Citiz (No Subscription)');
      data.push(0);
      borderColor.push('#007bff');
    }

    try {
      // Citiz (Subscription)
      const citizSubPrice = subscriptionPricing(carType, durationInMinutes, kilometersValue);
      labels.push('Citiz (Subscription)');
      data.push(citizSubPrice || 0);
      borderColor.push('#28a745');
    } catch (error) {
      console.error('Citiz Subscription Error:', error);
      labels.push('Citiz (Subscription)');
      data.push(0);
      borderColor.push('#28a745');
    }

    try {
      // Avis
      const avisPrice = avisPriceCalculation(carType, durationInMinutes, kilometersValue);
      labels.push('Avis');
      data.push(avisPrice || 0);
      borderColor.push('#FF69B4');
    } catch (error) {
      console.error('Avis Error:', error);
      labels.push('Avis');
      data.push(0);
      borderColor.push('#FF69B4');
    }

    try {
      // Europcar
      const europcarPrice = europcarPriceCalculation(carType, durationInMinutes, kilometersValue);
      labels.push('Europcar');
      data.push(europcarPrice || 0);
      borderColor.push('#ff5733');
    } catch (error) {
      console.error('Europcar Error:', error);
      labels.push('Europcar');
      data.push(0);
      borderColor.push('#ff5733');
    }

    try {
      // Hertz
      const hertzPrice = HertzPriceCalculation(carType, durationInMinutes, kilometersValue);
      labels.push('Hertz');
      data.push(hertzPrice || 0);
      borderColor.push('#007FFF');
    } catch (error) {
      console.error('Hertz Error:', error);
      labels.push('Hertz');
      data.push(0);
      borderColor.push('#007FFF');
    }

    try {
      // Sixt
      const sixtPrice = sixtPriceCalculation(carType, durationInMinutes, kilometersValue);
      labels.push('Sixt');
      data.push(sixtPrice || 0);
      borderColor.push('#800080');
    } catch (error) {
      console.error('Sixt Error:', error);
      labels.push('Sixt');
      data.push(0);
      borderColor.push('#800080');
    }

    try {
      // Bolt
      const boltPrice = boltPriceCalculation(carType, durationInMinutes, kilometersValue);
      labels.push('Bolt');
      data.push(boltPrice || 0);
      borderColor.push('#32CD32');
    } catch (error) {
      console.error('Bolt Error:', error);
      labels.push('Bolt');
      data.push(0);
      borderColor.push('#32CD32');
    }

    setPriceData({
      labels,
      datasets: [
        {
          label: 'Car Rental Price Comparison (€)',
          data,
          borderColor,
          backgroundColor: borderColor,
          borderWidth: 2,
        },
      ],
    });
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y.toFixed(2)}€`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Price (€)' },
      },
      x: {
        title: { display: true, text: 'Company' },
      },
    },
  };

  return (
    <div className="comparison-form-container sm:w-[70%] lg:w-[50%] xl:w-[40%] min-h-[700px] px-20 py-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="form-group">
          <label>Durée:</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="form-control"
          />
          <select
            value={durationScale}
            onChange={(e) => setDurationScale(e.target.value)}
            className="form-control mt-3"
          >
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
          </select>
        </div>

        <div className="form-group">
          <label>Car Type:</label>
          <select
            value={carType}
            onChange={(e) => setCarType(e.target.value)}
            required
            className="form-control"
          >
            <option value="catS">Citadine</option>
            <option value="catM">Compacte</option>
            <option value="catL">Familiale</option>
            <option value="catXL">SUV</option>
            <option value="catXXL">Van</option>
          </select>
        </div>

        <div className="form-group">
          <label>Kilometers:</label>
          <input
            type="number"
            value={kilometers}
            onChange={(e) => setKilometers(e.target.value)}
            required
            className="form-control"
          />
        </div>

        <button type="submit" className="btn-submit">Submit</button>
      </form>

      {priceData && (
        <div>
          <Line data={priceData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default ComparisonForm;
