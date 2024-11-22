import React, { useState } from 'react';
import './ComparisonForm.css';
import { noSubscriptionPricing, subscriptionPricing } from '../utils/pricingCalculations/citizpriceCalculation';
import { leoAndGoPricingCalculation } from '../utils/pricingCalculations/leoAndGoPriceCalculation';
import leoAndGoPricing from '../data/leoAndGoPricing'; // Import pricing data directly
import { Line } from 'react-chartjs-2'; // Import chart component
import { avisPriceCalculation } from '../utils/pricingCalculations/avisPriceCalculation';
import { europcarPriceCalculation } from '../utils/pricingCalculations/europcarPriceCalculation';

// Import necessary Chart.js components and manually register them
import {
    Chart as ChartJS,
    CategoryScale,  // The "category" scale
    LinearScale,    // Linear scale for the y-axis
    PointElement,   // Points on the line chart
    LineElement,    // Line element for line chart
    Title,          // Title plugin (optional)
    Tooltip,        // Tooltip plugin
    Legend,         // Legend plugin
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// List of car types not offered by Citiz and Leo&Go
const unavailableCitizCarTypes = ['utilityVehicles3m3', 'teslaCars', 'airportCars'];
const unavailableLeoAndGoCarTypes = ['smallCars', 'mpvCars'];

const ComparisonForm = () => {
    const [duration, setDuration] = useState('');
    const [durationScale, setDurationScale] = useState('days'); // Default scale
    const [carType, setCarType] = useState('verysmallCars');
    const [kilometers, setKilometers] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false); // State for Citiz subscription
    const [showSubscriberPrices, setShowSubscriberPrices] = useState(false); // State for showing subscriber prices if not subscribed
    const [priceData, setPriceData] = useState(null); // To hold the price data for the chart
    const [citizErrorMessage, setCitizErrorMessage] = useState(''); // To hold any Citiz-related error messages
    const [leoAndGoErrorMessage, setLeoAndGoErrorMessage] = useState(''); // To hold any Leo&Go-related error messages
    const [maxDurationMessage, setMaxDurationMessage] = useState(''); // To display a message for max duration for Leo&Go

    const handleSubmit = (e) => {
        e.preventDefault();
        const durationInMinutes = convertDurationToMinutes(duration, durationScale);
        const kilometersValue = parseFloat(kilometers);

        let priceComparisonData = {
            labels: [],
            datasets: [
                {
                    label: 'Car Rental Price Comparison (€)',
                    data: [],
                    borderColor: [],
                    borderWidth: 2,
                },
            ],
        };

        // Check if the selected car type is unavailable for Leo&Go
        if (unavailableLeoAndGoCarTypes.includes(carType)) {
            setLeoAndGoErrorMessage('Leo&Go does not offer this type of vehicle.');
            setMaxDurationMessage(''); // Clear the max duration message if car type is unavailable
        } else {
            setLeoAndGoErrorMessage(''); // Clear previous Leo&Go error messages

            // Get Leo&Go pricing data for the selected car type
            const carPricing = leoAndGoPricing[carType];
            const maxDuration = carPricing.durations[carPricing.durations.length - 1].duration; // Max duration
            const maxPrice = leoAndGoPricingCalculation(carType, maxDuration, kilometersValue).totalCost;

            // Convert max duration to the most appropriate scale for display
            const maxDurationFormatted = formatDuration(maxDuration);

            // If duration exceeds the maximum available duration
            if (durationInMinutes > maxDuration) {
                setMaxDurationMessage(
                    `For durations above ${maxDurationFormatted}, please refer to Leo&Go directly. 
                    The price for ${maxDurationFormatted} with ${kilometers} kilometers is €${maxPrice}.`
                );
                // Set the price for the max duration
                priceComparisonData.labels.push('Leo&Go');
                priceComparisonData.datasets[0].data.push(maxPrice);
                priceComparisonData.datasets[0].borderColor.push('#ffcc00');
            } else {
                setMaxDurationMessage(''); // Clear the max duration message
                let leoAndGoPrice = leoAndGoPricingCalculation(carType, durationInMinutes, kilometersValue).totalCost;
                priceComparisonData.labels.push('Leo&Go');
                priceComparisonData.datasets[0].data.push(leoAndGoPrice);
                priceComparisonData.datasets[0].borderColor.push('#ffcc00');
            }
        }

        // Check if the selected car type is unavailable for Citiz
        if (unavailableCitizCarTypes.includes(carType)) {
            setCitizErrorMessage('Citiz does not offer this type of vehicle.');
        } else {
            setCitizErrorMessage(''); // Clear any previous Citiz error messages

            // If the user is a Citiz subscriber, show both subscriber and non-subscriber prices
            if (isSubscribed) {
                const citizNoSubPrice = noSubscriptionPricing(carType, durationInMinutes, kilometersValue);
                const citizSubPrice = subscriptionPricing(carType, durationInMinutes, kilometersValue);

                // Add Citiz prices to the comparison chart
                priceComparisonData.labels.push('Citiz (No Subscription)', 'Citiz (Subscription)');
                priceComparisonData.datasets[0].data.push(citizNoSubPrice, citizSubPrice);
                priceComparisonData.datasets[0].borderColor.push('#007bff', '#28a745');
            } else if (showSubscriberPrices) {
                // If the user is not subscribed but opts to see subscriber prices
                const citizNoSubPrice = noSubscriptionPricing(carType, durationInMinutes, kilometersValue);
                const citizSubPrice = subscriptionPricing(carType, durationInMinutes, kilometersValue);

                // Add both prices to the chart
                priceComparisonData.labels.push('Citiz (No Subscription)', 'Citiz (Subscription)');
                priceComparisonData.datasets[0].data.push(citizNoSubPrice, citizSubPrice);
                priceComparisonData.datasets[0].borderColor.push('#007bff', '#28a745');
            } else {
                // If the user is not subscribed and opts to see only non-subscriber prices
                const citizNoSubPrice = noSubscriptionPricing(carType, durationInMinutes, kilometersValue);

                // Add only the non-subscriber price to the chart
                priceComparisonData.labels.push('Citiz (No Subscription)');
                priceComparisonData.datasets[0].data.push(citizNoSubPrice);
                priceComparisonData.datasets[0].borderColor.push('#007bff');
            }
        }

        const avisPrice = avisPriceCalculation(carType, durationInMinutes);
        if (avisPrice > 0) {
            priceComparisonData.labels.push('Avis');
            priceComparisonData.datasets[0].data.push(avisPrice);
            priceComparisonData.datasets[0].borderColor.push('#ffa500'); // Use a unique color for Avis
        }

        const europcarPrice = europcarPriceCalculation(
            carType, 
            durationInMinutes, 
            kilometersValue, 
        );
        
        if (europcarPrice.totalCost > 0){
            priceComparisonData.labels.push('Europcar');
            priceComparisonData.datasets[0].data.push(europcarPrice.totalCost);
            priceComparisonData.datasets[0].borderColor.push('#ff5733');
        }

        setPriceData(priceComparisonData); // Set data for chart
    };

    // Helper function to convert the duration based on the scale
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
                return parseFloat(duration) * 43800; // Approximation: 1 month = 30.42 days
            default:
                return parseFloat(duration);
        }
    };

    // Helper function to format the duration into a human-readable format
    const formatDuration = (durationInMinutes) => {
        if (durationInMinutes >= 43800) { // Convert to months
            const months = (durationInMinutes / 43800).toFixed(2);
            return `${months} months`;
        } else if (durationInMinutes >= 10080) { // Convert to weeks
            const weeks = (durationInMinutes / 10080).toFixed(2);
            return `${weeks} weeks`;
        } else if (durationInMinutes >= 1440) { // Convert to days
            const days = (durationInMinutes / 1440).toFixed(2);
            return `${days} days`;
        } else if (durationInMinutes >= 60) { // Convert to hours
            const hours = (durationInMinutes / 60).toFixed(2);
            return `${hours} hours`;
        } else {
            return `${durationInMinutes} minutes`; // Keep in minutes
        }
    };

    // Define chart options to properly scale the y-axis
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true, // Start y-axis at 0
                suggestedMax: 500, // Set a suggested maximum value for the y-axis
            }
        }
    };

    return (
        <div className="comparison-form-container">
            <form onSubmit={handleSubmit}>
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
                        className="form-control"
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
                        <option value="verysmallcars">Very Small Cars</option>
                        <option value="smallCars">Small Cars</option>
                        <option value="compactCars">Compact Cars</option>
                        <option value="airportCars">Airport Cars</option>
                        <option value="utilityVehicles3m3">Utility Vehicles (3m³)</option>
                        <option value="utilityVehicles6m3">Utility Vehicles (6m³)</option>
                        <option value="teslaCars">Tesla Cars</option>
                        <option value="mpvCars">MPV Cars</option>
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
    
                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        checked={isSubscribed}
                        onChange={(e) => setIsSubscribed(e.target.checked)}
                    />
                    <label>Are you a Citiz subscriber?</label>
                </div>
    
                {!isSubscribed && (
                    <div className="checkbox-group">
                        <input
                            type="checkbox"
                            checked={showSubscriberPrices}
                            onChange={(e) => setShowSubscriberPrices(e.target.checked)}
                        />
                        <label>Citiz subscriber prices are more advantageous. Would you like to see both prices?</label>
                    </div>
                )}
    
                <button type="submit" className="btn-submit">Submit</button>
            </form>
    
            {leoAndGoErrorMessage && (
                <div className="error-message">
                    <p>{leoAndGoErrorMessage}</p>
                </div>
            )}
    
            {citizErrorMessage && (
                <div className="error-message">
                    <p>{citizErrorMessage}</p>
                </div>
            )}
    
            {maxDurationMessage && (
                <div className="max-duration-message">
                    <p>{maxDurationMessage}</p>
                </div>
            )}
    
            {priceData && (
                <div>
                    <Line data={priceData} options={chartOptions} />
                </div>
            )}
        </div>
    );
    
};

export default ComparisonForm;
