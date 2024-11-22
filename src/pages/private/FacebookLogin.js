import React from "react";
import { signInWithPopup } from "firebase/auth"; // Importer signInWithPopup
import { auth, facebookProvider } from '../../config/firebaseConfig'; // Importer l'auth et le provider de Firebase

const FacebookLogin = () => {
  const handleLogin = async () => {
    try {
      // Démarrer le processus d'authentification via Facebook
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;  // L'utilisateur connecté
      console.log("Utilisateur connecté avec Facebook : ", user);
      // Tu peux gérer l'utilisateur ici, par exemple le rediriger vers une autre page
    } catch (error) {
      console.error("Erreur de connexion avec Facebook : ", error.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>
        Se connecter avec Facebook
      </button>
    </div>
  );
};

export default FacebookLogin;
