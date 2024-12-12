// src/SignUp.js
import React, { useState } from 'react';
import { auth, db } from '../../config/firebaseConfig'; // Assurez-vous d'importer auth et db (Firestore)
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Navbar from '../../components/layout/Navbar';
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

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
        <div>
          <Navbar />
          <section className="flex justify-center md:mt-7 mt-4 mb-4">
            <div className="md:w-[600px] md:shadow-2xl md:pt-11 md:pb-11 pt-8 pb-8 md:rounded-xl">
              <form className="flex flex-col items-center gap-5" onSubmit={handleSignUp}>
                <h3 className="font-bold md:text-4xl text-3xl text-slate-800 font-lato mb-4">Inscription</h3>
                <section className="space-y-4 md:pl-16 md:pr-16 pr-10 pl-10 xs:pl-5 xs:pr-5">
                  <TextField
                    required
                    fullWidth
                    label="Prénom"
                    sx={outlinedInputStyles}
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Nom"
                    sx={outlinedInputStyles}
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Adresse"
                    sx={outlinedInputStyles}
                    value={adresse}
                    onChange={(e) => setAdresse(e.target.value)}
                  />
                  <TextField
                    required
                    fullWidth
                    label="Adresse e-mail"
                    sx={outlinedInputStyles}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    required
                    fullWidth
                    type="password"
                    label="Mot de passe"
                    sx={outlinedInputStyles}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </section>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                type="submit"
                className="hover:bg-[#ff9900] bg-[#ffcc00] py-3 px-10 rounded-xl text-slate-800 md:text-lg text-sm transition-colors duration-300 w-auto"
                >
                Inscription
                </button>
              </form>
              <div className="flex justify-center text-slate-700 mt-3 md:text-base text-sm xs:text-xs">
                {"Already have an account?"}
                <Link to="/auth" className="text-green-500 pl-1 hover:underline">
                  Connectez-vous maintenant.
                </Link>
              </div>
            </div>
          </section>
        </div>
      );
    };
    
    const outlinedInputStyles = {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#1e293b",
        },
        "&:hover fieldset": {
          borderColor: "#ffcc00",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#ffcc00",
        },
      },
      "& .MuiInputLabel-outlined": {
        color: "#1e293b",
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "#ffcc00",
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#ffcc00",
        fontWeight: "bold",
      },
    };
    
    export default SignUp;