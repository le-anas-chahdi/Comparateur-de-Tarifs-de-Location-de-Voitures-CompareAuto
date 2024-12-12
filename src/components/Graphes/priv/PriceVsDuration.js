import React from 'react';
import { Line } from 'react-chartjs-2';
import { leoAndGoPricingCalculation } from '../../../utils/pricingCalculations/leoAndGoPriceCalculation';
import { noSubscriptionPricing } from '../../../utils/pricingCalculations/citizpriceCalculation';
import { avisPriceCalculation } from '../../../utils/pricingCalculations/avisPriceCalculation';
import { europcarPriceCalculation } from '../../../utils/pricingCalculations/europcarPriceCalculation';

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
        const durations = Array.from({ length: 60 }, (_, i) => i + 1);
        const datasets = [];
        const fixedDistance = parseFloat(kilometers);

        const leoAndGoData = {
            label: 'Leo&Go',
            data: durations.map(days => {
                const durationInMinutes = days * 24 * 60;
                const price = leoAndGoPricingCalculation(carType, durationInMinutes, fixedDistance);
                return price.totalCost ? parseFloat(price.totalCost) : null;
            }),
            borderColor: '#FF6B00',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(leoAndGoData);

        const europcarData = {
            label: 'Europcar',
            data: durations.map(days => {
                const durationInMinutes = days * 24 * 60;
                const price = europcarPriceCalculation(carType, durationInMinutes, fixedDistance);
                return price.totalCost ? parseFloat(price.totalCost) : null;
            }),
            borderColor: '#ff5733',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(europcarData);

        const citizData = {
            label: 'Citiz',
            data: durations.map(days => {
                const durationInMinutes = days * 24 * 60;
                return parseFloat(noSubscriptionPricing(carType, durationInMinutes, fixedDistance));
            }),
            borderColor: '#FFB900',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(citizData);

        const avisData = {
            label: 'Avis',
            data: durations.map(days => {
                const durationInMinutes = days * 24 * 60;
                return parseFloat(avisPriceCalculation(carType, durationInMinutes));
            }),
            borderColor: '#FF69B4',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(avisData);

        return {
            labels: durations,
            datasets: datasets
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
                    label: function(context) {
                        return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}€`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Price (€)'
                },
                grid: {
                    display: true,
                    drawBorder: true,
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Duration (days)'
                },
                ticks: {
                    callback: function(value, index) {
                        const days = this.getLabelForValue(value);
                        return `${days} days`;
                    }
                },
                grid: {
                    display: true,
                    drawBorder: true,
                }
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Price vs Duration Comparison</h2>
            <Line data={generatePriceData()} options={chartOptions} />
        </div>
    );
};

export default PriceVsDuration;