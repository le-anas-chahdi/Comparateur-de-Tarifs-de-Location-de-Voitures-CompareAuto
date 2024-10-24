// src/Auth.js
import React, { useState } from 'react';
import { auth, db } from '../../config/firebaseConfig'; // Assurez-vous d'importer auth et db (Firestore)
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true); // État pour savoir si l'utilisateur est en mode connexion ou inscription
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        adresse: '',
        email: '',
        motDePasse: '',
        confirmationMotDePasse: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if (isLogin) {
                // Connexion
                await signInWithEmailAndPassword(auth, formData.email, formData.motDePasse);
                window.location.href = '/profile'; // Redirection vers le profil après connexion
            } else {
                // Inscription
                if (formData.motDePasse !== formData.confirmationMotDePasse) {
                    setError('Les mots de passe ne correspondent pas');
                    return;
                }

                // Création de l'utilisateur
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.motDePasse);
                const user = userCredential.user;

                // Crée un document pour l'utilisateur dans Firestore
                await setDoc(doc(db, 'users', user.uid), {
                    nom: formData.nom,
                    prenom: formData.prenom,
                    adresse: formData.adresse,
                });

                window.location.href = '/profile'; // Redirection vers le profil après inscription
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>{isLogin ? 'Connexion' : 'Inscription'}</h1>
                <form className="auth-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <div className="form-group">
                                <label htmlFor="nom">Nom</label>
                                <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="prenom">Prénom</label>
                                <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="adresse">Adresse</label>
                                <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} required />
                            </div>
                        </>
                    )}
                    <div className="form-group">
                        <label htmlFor="email">Adresse e-mail</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="motDePasse">Mot de passe</label>
                        <input type="password" id="motDePasse" name="motDePasse" value={formData.motDePasse} onChange={handleChange} required />
                    </div>
                    {!isLogin && (
                        <div className="form-group">
                            <label htmlFor="confirmationMotDePasse">Confirmer le mot de passe</label>
                            <input
                                type="password"
                                id="confirmationMotDePasse"
                                name="confirmationMotDePasse"
                                value={formData.confirmationMotDePasse}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    {error && <div className="error">{error}</div>}
                    <button type="submit">{isLogin ? 'Se connecter' : 'S’inscrire'}</button>
                </form>
                <div className="auth-toggle">
                    <button onClick={() => setIsLogin(!isLogin)} className={isLogin ? '' : 'active'}>
                        {isLogin ? 'Créer un compte' : 'Déjà un compte ? Connexion'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
