import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importez useNavigate
import { auth } from '../../config/firebaseConfig'; // Importez l'objet d'authentification
import './Menu.css';

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); // Déclarez la fonction de navigation

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = async () => {
        try {
            // Déconnecter l'utilisateur via Firebase
            await auth.signOut();
            // Rediriger l'utilisateur vers la page d'accueil (WelcomePage)
            navigate('../MainPages/WelcomePage.js'); // Assurez-vous du bon chemin relatif
        } catch (error) {
            console.error("Erreur de déconnexion :", error);
        }
    };

    return (
        <div className="menu-container">
            <div className="menu-icon" onClick={toggleMenu}>
                <i className="fas fa-bars"></i>
            </div>
            {menuOpen && (
                <div className="menu-content">
                    <div className="menu-item">
                        <Link to="/profile">Mon Profil</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/PersonalInfo">Info Personnelle</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/changePassword">Changer Mot de Passe</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/Reservations">Voir Mes Réservations</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/subscriptions">Mes Abonnements</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="../components/ComparaisonForm.js">Comparer les Tarifs</Link>
                    </div>

                    {/* Ajout de l'élément Déconnexion */}
                    <div className="menu-footer">
                        <div className="menu-item logout" onClick={handleLogout}>
                            Déconnexion
                        </div>
                    </div>
                </div>
            )}
        </div>// 1613061129585926  0da2722ab03d955721e08a013302a1ab https://comparetarifs-24a17.firebaseapp.com/__/auth/handler
    );
};

export default Menu;
