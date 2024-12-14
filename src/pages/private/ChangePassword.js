import React, { useState } from 'react';
import { auth } from '../../config/firebaseConfig';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu'; 
import './ChangePassword.css';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const user = auth.currentUser;

        if (!user) {
            setError("Veuillez vous connecter pour changer votre mot de passe.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Le nouveau mot de passe et la confirmation ne correspondent pas.");
            return;
        }

        const credential = EmailAuthProvider.credential(user.email, oldPassword);

        try {
            await reauthenticateWithCredential(user, credential);
            await updatePassword(user, newPassword);

            setSuccess("Votre mot de passe a été modifié avec succès.");

            setTimeout(async () => {
                await signOut(auth);
                navigate('/'); 
            }, 2000); 
        } catch (err) {
            console.error("Erreur lors du changement de mot de passe :", err);
            setError("Erreur lors du changement de mot de passe : " + err.message);
        }
    };

    return (
        <div className="change-password-container">
            <Menu /> 
            <h2>Changer Mot de Passe</h2>
            <form onSubmit={handleChangePassword}>
                <div className="form-group">
                    <label htmlFor="oldPassword">Ancien Mot de Passe</label>
                    <input
                        type="password"
                        id="oldPassword"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">Nouveau Mot de Passe</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <small>Le mot de passe doit contenir au moins 6 caractères.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmer le Nouveau Mot de Passe</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="error">{error}</div>}
                {success && <div className="success">{success}</div>}
                <button type="submit">Changer Mot de Passe</button>
            </form>
        </div>
    );
};

export default ChangePassword;
