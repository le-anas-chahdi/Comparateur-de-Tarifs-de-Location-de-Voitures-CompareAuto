import React from 'react';
import './App.css';
import leoAndGoPrices from './leoAndGoPrices';

function App() {
    return (
        <div className="container">
          
            <h1>Rental Cars Comparison</h1>

            <h2>Prix de Leo & Go pour les petites voitures</h2>
            <h3>Frais d'inscription : {leoAndGoPrices.smallCars.registrationFee}</h3>
            <h3>Frais de déverrouillage : {leoAndGoPrices.smallCars.unlockFee}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Durée</th>
                        <th>Prix</th>
                        <th>Km inclus</th>
                    </tr>
                </thead>
                <tbody>
                    {leoAndGoPrices.smallCars.durations.map((duration, index) => (
                        <tr key={index}>
                            <td>{duration.duration}</td>
                            <td>{duration.price}</td>
                            <td>{duration.kmIncluded}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Prix de Leo & Go pour les grandes voitures</h2>
            <h3>Frais d'inscription : {leoAndGoPrices.biggerCars.registrationFee}</h3>
            <h3>Frais de déverrouillage : {leoAndGoPrices.biggerCars.unlockFee}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Durée</th>
                        <th>Prix</th>
                        <th>Km inclus</th>
                    </tr>
                </thead>
                <tbody>
                    {leoAndGoPrices.biggerCars.durations.map((duration, index) => (
                        <tr key={index}>
                            <td>{duration.duration}</td>
                            <td>{duration.price}</td>
                            <td>{duration.kmIncluded}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Prix de Leo & Go pour les véhicules utilitaires 3m3</h2>
            <h3>Frais d'inscription : {leoAndGoPrices.utilityVehicles3m3.registrationFee}</h3>
            <h3>Frais de déverrouillage : {leoAndGoPrices.utilityVehicles3m3.unlockFee}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Durée</th>
                        <th>Prix</th>
                        <th>Km inclus</th>
                    </tr>
                </thead>
                <tbody>
                    {leoAndGoPrices.utilityVehicles3m3.durations.map((duration, index) => (
                        <tr key={index}>
                            <td>{duration.duration}</td>
                            <td>{duration.price}</td>
                            <td>{duration.kmIncluded}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default App;
