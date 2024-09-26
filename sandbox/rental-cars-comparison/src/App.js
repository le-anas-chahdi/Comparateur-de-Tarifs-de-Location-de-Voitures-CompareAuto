import React from 'react';
import './App.css';
import leoAndGoPrices from './leoAndGoPrices';
import CarCategory from './CarCategory';


function App() {
    return (
        <div className="container">
            <h1>Rental Cars Comparison</h1>
            
            <CarCategory 
            title="Prix de Leo & Go pour les petites voitures"
            registrationFee={leoAndGoPrices.smallCars.registrationFee}
            unlockFee={leoAndGoPrices.smallCars.unlockFee}
            durations={leoAndGoPrices.smallCars.durations}
            />

            <CarCategory 
            title="Prix de Leo & Go pour les grandes voitures"
            registrationFee={leoAndGoPrices.biggerCars.registrationFee}
            unlockFee={leoAndGoPrices.biggerCars.unlockFee}
            durations={leoAndGoPrices.biggerCars.durations}
            />

            <CarCategory 
            title="Prix de Leo & Go pour les véhicules utilitaires 3m3"
            registrationFee={leoAndGoPrices.utilityVehicles3m3.registrationFee}
            unlockFee={leoAndGoPrices.utilityVehicles3m3.unlockFee}
            durations={leoAndGoPrices.utilityVehicles3m3.durations}
            />
        </div>
    );
}

export default App;
