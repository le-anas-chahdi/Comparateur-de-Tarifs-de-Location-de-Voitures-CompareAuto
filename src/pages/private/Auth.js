import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate
import { auth, db, facebookProvider } from '../../config/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Navbar from '../../components/layout/Navbar';
import { TextField, Divider } from '@mui/material';
import { Link } from "react-router-dom";


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
            <div className="flex justify-center items-center md:mt-7 mt-10">
                <div className="md:w-[520px] md:h-auto md:shadow-2xl rounded-2xl flex flex-col justify-center gap-6 p-6">
                    <h1 classname="font-bold md:text-4xl text-3xl text-slate-700 font-lato mb-4">{isLogin ? 'Connexion' : 'Inscription'}</h1>
                    <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <>
                                <TextField
                                required
                                fullWidth
                                label="Nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                sx={outlinedInputStyles}
                                />
                                <TextField
                                required
                                fullWidth
                                label="Prénom"
                                name="prenom"
                                value={formData.prenom}
                                onChange={handleChange}
                                sx={outlinedInputStyles}
                                />
                                <TextField
                                required
                                fullWidth
                                label="Adresse"
                                name="adresse"
                                value={formData.adresse}
                                onChange={handleChange}
                                sx={outlinedInputStyles}
                                />
                                <TextField
                                required
                                fullWidth
                                label="Département"
                                name="departement"
                                value={formData.departement}
                                onChange={handleChange}
                                sx={outlinedInputStyles}
                                />
                                <TextField
                                required
                                fullWidth
                                label="N° de téléphone"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                sx={outlinedInputStyles}
                                />
                            </>
                        )}
                        <TextField
                        required
                        fullWidth
                        label="Adresse e-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        sx={outlinedInputStyles}
                        />
                        <TextField
                        required
                        fullWidth
                        label="Mot de passe"
                        type="password"
                        name="motDePasse"
                        value={formData.motDePasse}
                        onChange={handleChange}
                        sx={outlinedInputStyles}
                        />
                        {!isLogin && (
                        <TextField
                            required
                            fullWidth
                            label="Confirmer le mot de passe"
                            type="password"
                            name="confirmationMotDePasse"
                            value={formData.confirmationMotDePasse}
                            onChange={handleChange}
                            sx={outlinedInputStyles}
                        />
                        )}
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                        <button
                        type="submit"
                        className="hover:bg-[#ff9900] bg-[#ffcc00] p-3 px-24 rounded-xl text-slate-800 md:text-lg transition-colors duration-300 xs:text-sm"
                        >
                        {isLogin ? "Se connecter" : "S’inscrire"}
                        </button>
                    </form>
                    <Divider className="text-slate-500 md:pl-10 md:pr-10 text-sm">OU</Divider>
                    <section className="flex flex-col items-center gap-4">
                    {/* Sign up with Facebook button */}
                    <button
                    onClick={handleFacebookLogin}
                    className="bg-[#1877f2] hover:bg-[#145dbf] text-white shadow-lg rounded-lg flex items-center justify-center gap-2 px-6 py-3 md:px-10 md:py-3.5 md:text-lg xs:text-sm transition-all duration-300"
                    >
                    <i className="fab fa-facebook text-white text-xl"></i>
                    Se connecter avec Facebook
                    </button>

                    {/* Account toggle message */}
                    <div className="text-slate-700 md:text-base text-sm xs:text-xs">
                        {isLogin ? (
                        <>
                            {"Pas encore de compte?"}
                            <Link
                            to="/signup"
                            className="text-green-500 pl-1 hover:underline"
                            >
                            Créer un compte.
                            </Link>
                        </>
                        ) : (
                        <>
                            {"Déjà un compte?"}
                            <Link
                            to="/login"
                            className="text-green-500 pl-1 hover:underline"
                            >
                            Connexion.
                            </Link>
                        </>
                        )}
                    </div>
                    </section>
                </div>
            </div>
        </div>
     );
};

const outlinedInputStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#334155",
      },
      "&:hover fieldset": {
        borderColor: "#ffcc00",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ffcc00",
      },
    },
    "& .MuiInputLabel-outlined": {
      color: "#334155",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#ffcc00",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#ffcc00",
      fontWeight: "bold",
    },
  };

export default Auth;