// src/ChangePassword.js
import React, { useState } from 'react';
import { auth } from '../../config/firebaseConfig'; // Assurez-vous d'importer l'auth

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError('');

        const user = auth.currentUser;

        try {
            await user.updatePassword(newPassword);
            alert("Mot de passe changé avec succès.");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="change-password-container">
            <h2>Changer Mot de Passe</h2>
            <form onSubmit={handleChangePassword}>
                <div className="form-group">
                    <label htmlFor="newPassword">Nouveau Mot de Passe</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Changer Mot de Passe</button>
            </form>
        </div>
    );
};

export default ChangePassword;
