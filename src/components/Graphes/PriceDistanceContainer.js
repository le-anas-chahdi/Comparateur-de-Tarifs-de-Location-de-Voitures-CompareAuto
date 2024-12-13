import React from 'react';
import PriceVsDistance from './priv/PriceVsDistance';
import PriceScenarios from './priv/PriceScenarios';
import PriceContainer from './priv/PriceContainer';
import { useState } from 'react';

const PriceDistanceContainer = () => {
    const [time, setTimer] = useState("12");
    const [typeofTime, setTypeofTime] = useState("days");
    const [carType, setCarType] = useState("catS");

    const carTypes = [
        { value: "catS", label: "Citadine" },
        { value: "catM", label: "Compacte" },
        { value: "catL", label: "Familiale" },
        { value: "catXL", label: "SUV" },
        { value: "catXXL", label: "Van" }
    ];
    
    return (
        <div className="flex flex-col sm:w-full lg:w-2/3 mx-auto p-5 gap-10 py-8">
            <div className="mb-8 flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time Duration
                    </label>
                    <input
                        type="number"
                        value={time}
                        onChange={(e) => setTimer(e.target.value)}
                        min="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time Unit
                    </label>
                    <select
                        value={typeofTime}
                        onChange={(e) => setTypeofTime(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="minutes">Minutes</option>
                        <option value="hours">Hours</option>
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="months">Months</option>
                    </select>
                </div>

                <div className="flex-1">
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
            </div>

            <PriceVsDistance 
                time={time} 
                typeoftime={typeofTime} 
                carType={carType}
            />
            <PriceContainer/>
            <PriceScenarios
                carType={carType}
            />
        </div>
    );
};

export default PriceDistanceContainer;