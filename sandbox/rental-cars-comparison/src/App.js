import React, { useEffect, useState } from 'react';
import './App.css';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; 
import MapComponent from './MapComponent'; // Import the Map component
import { MapContainer, TileLayer } from 'react-leaflet'; // Import MapContainer

// Register necessary Chart.js elements
Chart.register(...registerables);

const App = () => {
    const [distance, setDistance] = useState(0);
    const [temps, setTemps] = useState(0);
    const [graphData, setGraphData] = useState(null);
    const [tarifs, setTarifs] = useState({}); 
    const [start, setStart] = useState(null); // Starting point
    const [end, setEnd] = useState(null);     // Destination point

    useEffect(() => {
        const fetchData = async () => {
            try {
                // JSON file paths
                const citizResponse = await fetch('/data/citiz.json');
                const boltResponse = await fetch('/data/bolt.json');
                const leogoResponse = await fetch('/data/leogo.json');

                if (!citizResponse.ok || !boltResponse.ok || !leogoResponse.ok) {
                    throw new Error('Error loading JSON files');
                }

                const citizData = await citizResponse.json();
                const boltData = await boltResponse.json();
                const leogoData = await leogoResponse.json();

                setTarifs({
                    Citiz: citizData.vehicules,
                    Bolt: boltData.vehicules,
                    LeoGo: leogoData.vehicules,
                });
                
                // Initialize the graph
                genererGraphData(citizData.vehicules, boltData.vehicules, leogoData.vehicules, 0);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Function to generate graph data
    const genererGraphData = (citizVehicles, boltVehicles, leogoVehicles, distance) => {
        const labels = Array.from({ length: 101 }, (_, i) => i); // Distance from 0 to 100 km
        const datasets = Object.keys({ Citiz: citizVehicles, Bolt: boltVehicles, LeoGo: leogoVehicles }).map((entreprise) => {
            const vehicles = { Citiz: citizVehicles, Bolt: boltVehicles, LeoGo: leogoVehicles }[entreprise];
            return {
                label: entreprise,
                data: labels.map((km) =>
                    vehicles.reduce((acc, tarif) => acc + calculerTarif(tarif, entreprise, km), 0)
                ),
                fill: false,
                borderColor: entreprise === 'Citiz' ? 'red' : entreprise === 'Bolt' ? 'green' : 'blue',
            };
        });
        setGraphData({ labels, datasets });
    };

    // Calculate tariffs based on vehicles, company, distance, and time
    const calculerTarif = (tarif, entreprise, km) => {
        const kmCost = tarif.tarif.prixParKm * km;
        const minCost = tarif.tarif.prixParMinute * (temps / 60);
        let total = kmCost + minCost;

        // Add fixed fees for Bolt if applicable
        if (entreprise === 'Bolt' && tarif.tarif.fraisFixes) {
            total += tarif.tarif.fraisFixes; 
        }
        return total;
    };

    // Handle distance change
    const handleDistanceChange = (e) => {
        const newDistance = parseInt(e.target.value, 10);
        setDistance(newDistance);
        // Update the graph
        if (graphData) {
            genererGraphData(tarifs.Citiz, tarifs.Bolt, tarifs.LeoGo, newDistance);
        }
    };

    // Handle time change
    const handleTempsChange = (e) => {
        const newTemps = parseInt(e.target.value, 10);
        setTemps(newTemps);
        // Update the graph
        if (graphData) {
            genererGraphData(tarifs.Citiz, tarifs.Bolt, tarifs.LeoGo, distance);
        }
    };

    return (
        <>
            <h1>Tarifs de Location de Voiture</h1>

            {/* the MapComponent inside MapContainer */}
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <MapComponent setStart={setStart} setEnd={setEnd} />
            </MapContainer>

            <div>
                <label>
                    Distance (Km):
                    <input 
                        type="number" 
                        value={distance} 
                        onChange={handleDistanceChange} 
                    />
                </label>
                <label>
                    Temps (minutes):
                    <input 
                        type="number" 
                        value={temps} 
                        onChange={handleTempsChange} 
                    />
                </label>
            </div>

            <h2>Comparaison des Tarifs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Entreprise</th>
                        <th>Type de véhicule</th>
                        <th>Coût total estimé (€)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(tarifs).map((entreprise) => 
                        tarifs[entreprise].map((tarif) => (
                            <tr key={`${entreprise}-${tarif.type}`}>
                                <td>{entreprise}</td>
                                <td>{tarif.type}</td>
                                <td>{calculerTarif(tarif, entreprise, distance).toFixed(2)} €</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Display the graph */}
            {graphData && (
                <div>
                    <h2>Graphique des coûts en fonction de la distance</h2>
                    <Line data={graphData} />
                </div>
            )}
        </>
    );
};

export default App;
