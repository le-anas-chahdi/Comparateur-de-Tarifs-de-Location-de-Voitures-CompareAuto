// src/MapComponent.js
import React, { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Correction pour les icônes par défaut
delete L.Icon.Default.prototype._getIconUrl; // Pour corriger les icônes par défaut
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = ({ setStart, setEnd }) => {
    const [markers, setMarkers] = useState([]);

    // Écoute les événements de clic sur la carte
    useMapEvents({
        click(e) {
            const newMarkers = [...markers, e.latlng];
            setMarkers(newMarkers);

            if (newMarkers.length === 1) {
                setStart(e.latlng); // Premier clic pour le point de départ
            } else if (newMarkers.length === 2) {
                setEnd(e.latlng); // Deuxième clic pour le point d'arrivée
            } else {
                setMarkers([newMarkers[1]]); // Réinitialiser après deux marqueurs
                setStart(newMarkers[1]);
                setEnd(null);
            }
        },
    });

    return (
        <>
            {markers.map((position, idx) => (
                <Marker key={idx} position={position} />
            ))}
        </>
    );
};

export default MapComponent;
