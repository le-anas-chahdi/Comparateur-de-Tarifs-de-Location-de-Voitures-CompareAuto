import React, { useState } from 'react';
import { leoAndGoPricingCalculation } from '../../../utils/pricingCalculations/leoAndGoPriceCalculation';
import { europcarPriceCalculation } from '../../../utils/pricingCalculations/europcarPriceCalculation';
import { noSubscriptionPricing, subscriptionPricing } from '../../../utils/pricingCalculations/citizpriceCalculation';
import avisPriceCalculation from '../../../utils/pricingCalculations/avisPriceCalculation';
import HertzPriceCalculation from '../../../utils/pricingCalculations/hertzPriceCalculation';
import sixtPriceCalculation from '../../../utils/pricingCalculations/sixtPriceCalculation';
import { boltPriceCalculation } from '../../../utils/pricingCalculations/boltPriceCalculation';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const convertDurationToMinutes = (duration, unit) => {
    switch (unit) {
        case 'hours':
            return duration * 60;
        case 'days':
            return duration * 1440;
        case 'weeks':
            return duration * 10080;
        case 'months':
            return duration * 43800;
        default:
            return duration; // Default to minutes
    }
};

const PriceScenarios = () => {
    const [scenarios, setScenarios] = useState([
    ]);
    const [scenario, setScenario] = useState({ distance: '', duration: '', durationUnit: 'hours', carType: 'catS' });

    const handleAddScenario = (e) => {
        e.preventDefault();
        if (scenario.distance && scenario.duration && scenario.carType) {
            const durationInMinutes = convertDurationToMinutes(parseFloat(scenario.duration), scenario.durationUnit);
            const label = `${scenario.distance} km, ${scenario.duration} ${scenario.durationUnit}`;
            setScenarios([...scenarios, { ...scenario, durationInMinutes, label }]);
            setScenario({ distance: '', duration: '', durationUnit: 'hours', carType: 'catS' }); // Reset form inputs
        } else {
            alert('Please fill all fields before adding a scenario.');
        }
    };

    const generatePriceData = () => {
        return {
            labels: scenarios.map((s) => s.label),
            datasets: [
                {
                    label: 'Leo&Go',
                    data: scenarios.map((s) =>
                        leoAndGoPricingCalculation(s.carType, s.durationInMinutes, parseFloat(s.distance))
                    ),
                    backgroundColor: '#FF6B00',
                    borderWidth: 1,
                },
                {
                    label: 'Europcar',
                    data: scenarios.map((s) =>
                        europcarPriceCalculation(s.carType, s.durationInMinutes, parseFloat(s.distance))
                    ),
                    backgroundColor: '#ff5733',
                    borderWidth: 1,
                },
                {
                    label: 'Citiz (No Subscription)',
                    data: scenarios.map((s) =>
                        noSubscriptionPricing(s.carType, s.durationInMinutes, parseFloat(s.distance))
                    ),
                    backgroundColor: '#FFB900',
                    borderWidth: 1,
                },
                {
                    label: 'Citiz (Subscription)',
                    data: scenarios.map((s) =>
                        subscriptionPricing(s.carType, s.durationInMinutes, parseFloat(s.distance))
                    ),
                    backgroundColor: '#28a745',
                    borderWidth: 1,
                },
                {
                    label: 'Avis',
                    data: scenarios.map((s) =>
                        avisPriceCalculation(s.carType, s.durationInMinutes, parseFloat(s.distance))
                    ),
                    backgroundColor: '#FF69B4',
                    borderWidth: 1,
                },
                {
                    label: 'Hertz',
                    data: scenarios.map((s) =>
                        HertzPriceCalculation(s.carType, s.durationInMinutes, parseFloat(s.distance))
                    ),
                    backgroundColor: '#007FFF',
                    borderWidth: 1,
                },
                {
                    label: 'Sixt',
                    data: scenarios.map((s) =>
                        sixtPriceCalculation(s.carType, s.durationInMinutes, parseFloat(s.distance))
                    ),
                    backgroundColor: '#800080',
                    borderWidth: 1,
                },
                {
                    label: 'Bolt',
                    data: scenarios.map((s) =>
                        boltPriceCalculation(s.carType, s.durationInMinutes, parseFloat(s.distance))
                    ),
                    backgroundColor: '#32CD32',
                    borderWidth: 1,
                },
            ],
        };
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}€`;
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Price (€)',
                },
                grid: {
                    display: true,
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Scenarios',
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center gap-6">
            {/* Form Section */}
            <form onSubmit={handleAddScenario} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Distance (km):</label>
                    <input
                        type="number"
                        value={scenario.distance}
                        onChange={(e) => setScenario({ ...scenario, distance: e.target.value })}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Duration:</label>
                    <input
                        type="number"
                        value={scenario.duration}
                        onChange={(e) => setScenario({ ...scenario, duration: e.target.value })}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Time Unit:</label>
                    <select
                        value={scenario.durationUnit}
                        onChange={(e) => setScenario({ ...scenario, durationUnit: e.target.value })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="minutes">Minutes</option>
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="block text-sm font-medium text-gray-700">Car Type:</label>
                    <select
                        value={scenario.carType}
                        onChange={(e) => setScenario({ ...scenario, carType: e.target.value })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="catS">Cat S</option>
                        <option value="catM">Cat M</option>
                        <option value="catL">Cat L</option>
                        <option value="catXL">Cat XL</option>
                        <option value="catXXL">Cat XXL</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                >
                    Add Scenario
                </button>
            </form>

            {/* Graph Section */}
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
                <h2 className="text-xl font-bold mb-4 text-center">Price Comparison by Scenarios</h2>
                <Bar data={generatePriceData()} options={chartOptions} />
            </div>
        </div>
    );
};

export default PriceScenarios;
