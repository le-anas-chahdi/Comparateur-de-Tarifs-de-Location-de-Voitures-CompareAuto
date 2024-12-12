import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const PriceScenarios = () => {
    //hna dir scenarios li bghiti
    const scenarios = [
        { label: '10 km, 1 hr', distance: 10, hours: 1 },
        { label: '50 km, 3 hrs', distance: 50, hours: 3 },
        { label: '100 km, 8 hrs', distance: 100, hours: 8 }
    ];

    const generatePriceData = () => {
        // hna dekhel l values li bghiti
        const rates = {
            leoAndGo: { base: 50, perKm: 0.45 },
            europcar: { base: 40, perKm: 0.35 },
            citiz: { base: 30, perKm: 0.30 },
            avis: { base: 20, perKm: 0.25 }
        };

        const priceData = {
            labels: scenarios.map(s => s.label),
            datasets: [
                {
                    label: 'Leo&Go',
                    data: scenarios.map(s => rates.leoAndGo.base + (s.distance * rates.leoAndGo.perKm)),
                    backgroundColor: '#FF6B00',
                    borderWidth: 1
                },
                {
                    label: 'Europcar',
                    data: scenarios.map(s => rates.europcar.base + (s.distance * rates.europcar.perKm)),
                    backgroundColor: '#ff5733',
                    borderWidth: 1
                },
                {
                    label: 'Citiz',
                    data: scenarios.map(s => rates.citiz.base + (s.distance * rates.citiz.perKm)),
                    backgroundColor: '#FFB900',
                    borderWidth: 1
                },
                {
                    label: 'Avis',
                    data: scenarios.map(s => rates.avis.base + (s.distance * rates.avis.perKm)),
                    backgroundColor: '#FF69B4',
                    borderWidth: 1
                }
            ]
        };

        return priceData;
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
                    display: true
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Scenarios'
                },
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Price Comparison by Scenarios</h2>
            <Bar data={generatePriceData()} options={chartOptions} />
        </div>
    );
};

export default PriceScenarios;