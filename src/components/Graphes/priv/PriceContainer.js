import React from 'react';
import PriceVsDuration from './PriceVsDuration';
import { useState } from 'react';

const PriceContainer = () => {
    const [carType, setCarType] = useState("verysmallCars");
    const [kilometers, setKilometers] = useState("50");

    const carTypes = [
        { value: "verysmallCars", label: "Very Small Cars" },
        { value: "smallCars", label: "Small Cars" },
        { value: "compactCars", label: "Compact Cars" },
        { value: "airportCars", label: "Airport Cars" },
        { value: "utilityVehicles3m3", label: "Utility Vehicles (3m³)" },
        { value: "utilityVehicles6m3", label: "Utility Vehicles (6m³)" },
        { value: "teslaCars", label: "Tesla Cars" },
        { value: "mpvCars", label: "MPV Cars" }
    ];
    
    return (
        <div>
         <div className="mb-8 flex flex-col sm:flex-row gap-4 items-end">
            <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Car Type
                    </label>
                    <select
                        value={carType}
                        onChange={(e) => setCarType(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                        {carTypes.map((car) => (
                            <option key={car.value} value={car.value}>
                                {car.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Distance (km)
                    </label>
                    <input
                        type="number"
                        value={kilometers}
                        onChange={(e) => setKilometers(e.target.value)}
                        min="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                </div>
            </div>
        </div>
            <PriceVsDuration
                carType={carType}
                kilometers={kilometers}
                />
                </div>
    );
};

export default PriceContainer;