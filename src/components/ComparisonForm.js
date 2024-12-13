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

// Helper function to convert duration to minutes
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

  const safeCalculate = (calculateFn, carType, durationInMinutes, kilometersValue) => {
    try {
      const result = calculateFn(carType, durationInMinutes, kilometersValue);
      return result?.totalCost || result || 0; // Return result or fallback to 0
    } catch (error) {
      console.error(`${calculateFn.name} Error:`, error);
      return 0; // Return 0 in case of an error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (!duration || duration <= 0 || !kilometers || kilometers < 0) {
      alert('Please enter valid duration and kilometers.');
      return;
    }

    const durationInMinutes = convertDurationToMinutes(duration, durationScale);
    const kilometersValue = parseFloat(kilometers) || 0;

    const labels = [];
    const data = [];
    const borderColor = [];

    // Define companies with their calculation functions and colors
    const companies = [
      { name: 'Leo&Go', calculate: leoAndGoPricingCalculation, color: '#FF6B00' },
      { name: 'Avis', calculate: avisPriceCalculation, color: '#FF69B4' },
      { name: 'Europcar', calculate: europcarPriceCalculation, color: '#ff5733' },
      { name: 'Citiz (No Subscription)', calculate: noSubscriptionPricing, color: '#007bff' },
      { name: 'Hertz', calculate: HertzPriceCalculation, color: '#007FFF' },
      { name: 'Sixt', calculate: sixtPriceCalculation, color: '#800080' },
      { name: 'Citiz (Subscription)', calculate: subscriptionPricing, color: '#28a745' },
      { name: 'Bolt', calculate: boltPriceCalculation, color: '#32CD32' },
    ];

    // Calculate prices for all companies
    companies.forEach(({ name, calculate, color }) => {
      const price = safeCalculate(calculate, carType, durationInMinutes, kilometersValue);
      labels.push(name);
      data.push(price);
      borderColor.push(color);
    });

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
          <label>Duration:</label>
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
