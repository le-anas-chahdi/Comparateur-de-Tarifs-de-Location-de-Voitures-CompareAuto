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

const convertDurationToMinutes = (duration, scale) => {
    switch (scale) {
        case 'minutes':
            return parseFloat(duration);
        case 'hours':
            return parseFloat(duration) * 60;
        case 'days':
            return parseFloat(duration) * 1440;
        case 'weeks':
            return parseFloat(duration) * 10080;
        case 'months':
            return parseFloat(duration) * 43800;
        default:
            return parseFloat(duration);
    }
};


const PriceVsDistance = ({ time, typeoftime, carType }) => {
    const timeInMinutes = convertDurationToMinutes(time || '0', typeoftime);

    const generatePriceData = () => {
        const distances = Array.from({ length: 41 }, (_, i) => i * 250);
        const datasets = [];

    
        const leoAndGoData = {
            label: 'Leo&Go',
            data: distances.map(km => {
                const price = leoAndGoPricingCalculation(carType, timeInMinutes, km);
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
            data: distances.map(km => {
                const price = europcarPriceCalculation(carType, timeInMinutes, km);
                return price.totalCost ? parseFloat(price.totalCost) : null;
            }),
            borderColor: '#ff5733',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(europcarData);

    
        const citizNoSubData = {
            label: 'Citiz No Subscription',
            data: distances.map(km => 
                parseFloat(noSubscriptionPricing(carType, timeInMinutes, km))
            ),
            borderColor: '#007bff',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(citizNoSubData);


        const citizSubData = {
            label: 'Citiz Subscribed',
            data: distances.map(km => 
                parseFloat(subscriptionPricing(carType, timeInMinutes, km))
            ),
            borderColor: '#28a745',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(citizSubData);

    
        const avisData = {
            label: 'Avis',
            data: distances.map(km => 
                parseFloat(avisPriceCalculation(carType, timeInMinutes, km))
            ),
            borderColor: '#FF69B4',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(avisData);

        const hertzData = {
            label: 'Hertz',
            data: distances.map(km => 
                parseFloat(HertzPriceCalculation(carType, timeInMinutes, km))
            ),
            borderColor: '#007FFF',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(hertzData);


        const sixtData = {
            label: 'Sixt',
            data: distances.map(km => 
                parseFloat(sixtPriceCalculation(carType, timeInMinutes, km))
            ),
            borderColor: '#800080',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(sixtData);


        const boltData = {
            label: 'Bolt',
            data: distances.map(km => 
                parseFloat(boltPriceCalculation(carType, timeInMinutes, km))
            ),
            borderColor: '#32CD32',
            tension: 0.4,
            borderWidth: 2,
            fill: false
        };
        datasets.push(boltData);

        return {
            labels: distances,
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
                    text: 'Distance (km)'
                },
                ticks: {
                    callback: function(value, index) {
                        const distance = this.getLabelForValue(value);
                        return `${distance}km`;
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
            <h2 className="text-xl font-bold mb-4">Price vs Distance Comparison</h2>
            <Line data={generatePriceData()} options={chartOptions} />
        </div>
    );
};

export default PriceVsDistance;