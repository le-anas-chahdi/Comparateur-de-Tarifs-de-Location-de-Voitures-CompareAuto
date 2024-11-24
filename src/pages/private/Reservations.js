import React from 'react';
import Menu from './Menu'; // Importation du menu
import './Reservations.css'; // Importation du CSS pour les réservations
import Navbar from '../../components/layout/Navbar';

const Reservations = () => {
    const pastReservations = [
        { id: 1, date: '2024-09-15', location: 'Paris' },
        { id: 2, date: '2024-08-10', location: 'Lyon' },
    ];

    const upcomingReservations = [
        { id: 1, date: '2024-11-20', location: 'Marseille' },
        { id: 2, date: '2024-12-01', location: 'Nice' },
    ];

    return (
        <div>
            <Navbar />
            <div className="reservations-container">
                <Menu /> {/* Inclusion du menu */}
                <h2>Mes Réservations</h2>
                <div className="reservations-section">
                    <div className="reservations-block">
                        <h3>Réservations Passées</h3>
                        <ul>
                            {pastReservations.map(reservation => (
                                <li key={reservation.id}>
                                    <span>{reservation.date}</span> - <span>{reservation.location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="reservations-block">
                        <h3>Réservations à Venir</h3>
                        <ul>
                            {upcomingReservations.map(reservation => (
                                <li key={reservation.id}>
                                    <span>{reservation.date}</span> - <span>{reservation.location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservations;
