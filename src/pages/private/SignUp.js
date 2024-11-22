// src/SignUp.js
import React, { useState } from 'react';
import { auth, db } from '../../config/firebaseConfig'; // Assurez-vous d'importer auth et db (Firestore)
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Crée un document pour l'utilisateur dans Firestore
            await setDoc(doc(db, 'users', user.uid), {
                nom,
                prenom,
                adresse
            });

            console.log("Utilisateur créé et ajouté à Firestore !");
            // Redirige ou affiche un message de succès ici
        } catch (error) {
            console.error("Erreur lors de la création de l'utilisateur :", error);
            setError(error.message); // Affiche l'erreur dans l'état
        }
    };

    return (
        <div className="signup-container">
            <h2>Inscription</h2>
            <form onSubmit={handleSignUp}>
                <input 
                    type="text" 
                    placeholder="Nom" 
                    value={nom} 
                    onChange={(e) => setNom(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Prénom" 
                    value={prenom} 
                    onChange={(e) => setPrenom(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Adresse" 
                    value={adresse} 
                    onChange={(e) => setAdresse(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Mot de passe" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    );
};

export default SignUp;