// src/Reservations.js
import React, { useState } from 'react';

const Reservations = () => {
    const [pastReservations, setPastReservations] = useState([
        // Ajoutez ici des réservations passées fictives ou récupérées depuis votre base de données
        { id: 1, date: '2024-09-15', location: 'Paris' },
        { id: 2, date: '2024-08-10', location: 'Lyon' },
    ]);
    
    const [upcomingReservations, setUpcomingReservations] = useState([
        // Ajoutez ici des réservations à venir fictives ou récupérées depuis votre base de données
        { id: 1, date: '2024-11-20', location: 'Marseille' },
        { id: 2, date: '2024-12-01', location: 'Nice' },
    ]);

    return (
        <div className="reservations-container">
            <h2>Mes Réservations</h2>
            <div className="reservations-section">
                <div className="past-reservations">
                    <h3>Réservations Passées</h3>
                    <ul>
                        {pastReservations.map(reservation => (
                            <li key={reservation.id}>
                                {reservation.date} - {reservation.location}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="upcoming-reservations">
                    <h3>Réservations à Venir</h3>
                    <ul>
                        {upcomingReservations.map(reservation => (
                            <li key={reservation.id}>
                                {reservation.date} - {reservation.location}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Reservations;
