import React from 'react';
import { Line } from 'react-chartjs-2';
import { leoAndGoPricingCalculation } from '../../../utils/pricingCalculations/leoAndGoPriceCalculation';
import { noSubscriptionPricing, subscriptionPricing } from '../../../utils/pricingCalculations/citizpriceCalculation';
import avisPriceCalculation from '../../../utils/pricingCalculations/avisPriceCalculation';
import { europcarPriceCalculation } from '../../../utils/pricingCalculations/europcarPriceCalculation';
import HertzPriceCalculation from '../../../utils/pricingCalculations/hertzPriceCalculation';
import sixtPriceCalculation from '../../../utils/pricingCalculations/sixtPriceCalculation';
import { boltPriceCalculation } from '../../../utils/pricingCalculations/boltPriceCalculation';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const PriceVsDuration = ({ carType, kilometers }) => {
    const generatePriceData = () => {
        const durations = Array.from({ length: 60 }, (_, i) => i + 1); // Days from 1 to 60
        const fixedDistance = parseFloat(kilometers) || 0;

        const companies = [
            {
                label: 'Leo&Go',
                calculate: leoAndGoPricingCalculation,
                color: '#FF6B00',
            },
            {
                label: 'Europcar',
                calculate: europcarPriceCalculation,
                color: '#FF5733',
            },
            {
                label: 'Citiz (No Subscription)',
                calculate: noSubscriptionPricing,
                color: '#FFB900',
            },
            {
                label: 'Citiz (Subscription)',
                calculate: subscriptionPricing,
                color: '#28A745',
            },
            {
                label: 'Avis',
                calculate: avisPriceCalculation,
                color: '#FF69B4',
            },
            {
                label: 'Hertz',
                calculate: HertzPriceCalculation,
                color: '#007FFF',
            },
            {
                label: 'Sixt',
                calculate: sixtPriceCalculation,
                color: '#800080',
            },
            {
                label: 'Bolt',
                calculate: boltPriceCalculation,
                color: '#32CD32',
            },
        ];

        const datasets = companies.map(({ label, calculate, color }) => ({
            label,
            data: durations.map((days) => {
                const durationInMinutes = days * 24 * 60;
                try {
                    const result = calculate(carType, durationInMinutes, fixedDistance);
                    return result?.totalCost || result || 0; // Ensure valid data
                } catch (error) {
                    console.error(`Error calculating price for ${label}:`, error);
                    return 0; // Default to 0 on error
                }
            }),
            borderColor: color,
            tension: 0.4,
            borderWidth: 2,
            fill: false,
        }));

        return {
            labels: durations, // X-axis labels (durations in days)
            datasets,
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
                    label: (context) =>
                        `${context.dataset.label}: ${context.parsed.y.toFixed(2)}€`,
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
            },
            x: {
                title: {
                    display: true,
                    text: 'Duration (days)',
                },
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Price vs Duration Comparison</h2>
            <Line data={generatePriceData()} options={chartOptions} />
        </div>
    );
};

export default PriceVsDuration;
