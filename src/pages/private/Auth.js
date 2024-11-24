import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate
import { auth, db, facebookProvider } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import './Auth.css';
import Navbar from '../../components/layout/Navbar';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true); 
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        adresse: '',
        departement: '',
        telephone: '',
        email: '',
        motDePasse: '',
        confirmationMotDePasse: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialisation de useNavigate

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const { nom, prenom, adresse, departement, telephone, email, motDePasse, confirmationMotDePasse } = formData;

        if (isLogin) {
            // En mode Connexion, on ne vérifie que l'email et le mot de passe
            if (!email || !motDePasse) {
                setError('Veuillez remplir votre email et votre mot de passe.');
                return;
            }
        } else {
            // En mode Inscription, on vérifie tous les champs
            if (!nom || !prenom || !adresse || !departement || !telephone || !email || !motDePasse || !confirmationMotDePasse) {
                setError('Veuillez remplir tous les champs.');
                return;
            }

            // Vérification des mots de passe
            if (motDePasse !== confirmationMotDePasse) {
                setError('Les mots de passe ne correspondent pas.');
                return;
            }
        }

        try {
            if (isLogin) {
                // Connexion de l'utilisateur avec email et mot de passe
                await signInWithEmailAndPassword(auth, email, motDePasse);
                navigate('/profile'); // Redirection vers le profil avec useNavigate
            } else {
                // Inscription de l'utilisateur
                const userCredential = await createUserWithEmailAndPassword(auth, email, motDePasse);
                const user = userCredential.user;

                // Enregistrer l'utilisateur dans Firestore
                await setDoc(doc(db, 'users', user.uid), {
                    nom,
                    prenom,
                    adresse,
                    departement,
                    telephone,
                });

                navigate('/profile'); // Redirection vers le profil après l'inscription
            }
        } catch (err) {
            setError(err.message); // Si une erreur se produit
        }
    };

    const handleFacebookLogin = async () => {
        try {
            // Connexion via Facebook
            const result = await signInWithPopup(auth, facebookProvider);
            const user = result.user;

            // Enregistrer l'utilisateur dans Firestore après connexion
            await setDoc(doc(db, 'users', user.uid), {
                nom: user.displayName,
                email: user.email,
            });

            navigate('/profile'); // Redirection vers le profil après la connexion via Facebook
        } catch (err) {
            setError(err.message); // Afficher l'erreur si une exception se produit
        }
    };

    return (
        <div>
            <Navbar />
            <div className="auth-page">
                <div className="auth-container">
                    <h1>{isLogin ? 'Connexion' : 'Inscription'}</h1>
                    <form className="auth-form" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <>
                                <div className="form-group">
                                    <label htmlFor="nom">Nom</label>
                                    <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="prenom">Prénom</label>
                                    <input
                                        type="text"
                                        id="prenom"
                                        name="prenom"
                                        value={formData.prenom}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="adresse">Adresse</label>
                                    <input
                                        type="text"
                                        id="adresse"
                                        name="adresse"
                                        value={formData.adresse}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="telephone">N° de téléphone</label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="departement">Département</label>
                                    <input
                                        type="text"
                                        id="departement"
                                        name="departement"
                                        value={formData.departement}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </>
                        )}
                        <div className="form-group">
                            <label htmlFor="email">Adresse e-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="motDePasse">Mot de passe</label>
                            <input
                                type="password"
                                id="motDePasse"
                                name="motDePasse"
                                value={formData.motDePasse}
                                onChange={handleChange}
                                required
                            />
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
                    <div className="facebook-login">
                        <button onClick={handleFacebookLogin}>
                            <i className="fa fa-facebook"></i> Se connecter avec Facebook
                        </button>
                    </div>
                    <div className="auth-toggle">
                        <button onClick={() => setIsLogin(!isLogin)} className={isLogin ? '' : 'active'}>
                            {isLogin ? 'Créer un compte' : 'Déjà un compte ? Connexion'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;