import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../../config/firebaseConfig'; // Assurez-vous d'importer auth, db et storage
import { Link } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import Menu from './Menu'; // Importation de Menu.js
import './Profile.css';

const defaultProfileImage = `${process.env.PUBLIC_URL}/images/defaut.jpg`; // Utiliser PUBLIC_URL pour accéder à public

const Profile = () => {
    const [user, setUser] = useState(null);
    const [profileImage, setProfileImage] = useState(defaultProfileImage); // Image par défaut
    const [imageFile, setImageFile] = useState(null); // Pour stocker le fichier image

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);

                // Récupérer les données utilisateur depuis Firestore
                const docRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();

                    // Définir l'image récupérée
                    if (data.profileImage) {
                        setProfileImage(data.profileImage);
                    }
                } else {
                    // Si l'utilisateur est connecté via Facebook, enregistrez ses informations
                    if (currentUser.providerData[0].providerId === 'facebook.com') {
                        await setDoc(doc(db, 'users', currentUser.uid), {
                            displayName: currentUser.displayName || "Utilisateur Facebook",
                            email: currentUser.email,
                            profileImage: currentUser.photoURL || defaultProfileImage,
                        });
                        console.log("Utilisateur Facebook enregistré dans Firestore.");
                        setProfileImage(currentUser.photoURL || defaultProfileImage);
                    }
                }
            } else {
                // Redirection si l'utilisateur n'est pas connecté
                window.location.href = '/login';
            }
        });

        return () => unsubscribe();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file); // Stocke le fichier image pour le téléchargement
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result); // Met à jour l'état avec l'image sélectionnée pour l'afficher
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = async () => {
        if (!imageFile) {
            alert("Veuillez sélectionner une image !");
            return;
        }

        const currentUser = auth.currentUser;
        const storageRef = ref(storage, `profileImages/${currentUser.uid}/${imageFile.name}`);

        try {
            // Télécharge l'image
            await uploadBytes(storageRef, imageFile);
            console.log("Image téléchargée dans Firebase Storage.");

            // Obtient l'URL de l'image
            const url = await getDownloadURL(storageRef);
            console.log("URL de l'image obtenue depuis Firebase Storage :", url);

            // Met à jour l'image de profil affichée
            setProfileImage(url);

            // Enregistre l'URL dans Firestore
            await setDoc(doc(db, 'users', currentUser.uid), { profileImage: url }, { merge: true });
            console.log("URL de l'image enregistrée dans Firestore.");
        } catch (error) {
            console.error("Erreur lors du téléchargement de l'image ou de l'enregistrement dans Firestore :", error);
        }
    };

    return (
        <div className="profile-container">
            {/* Icône du menu à gauche */}
            <Menu /> {/* Intégration de Menu.js ici */}

            {/* Titre du Profil */}
            <div className="profile-header">
                <h2>Mon Profil</h2>
            </div>

            {/* Image de profil et téléchargement */}
            <div className="profile-content">
                <div className="profile-photo">
                    <img src={profileImage} alt="Profil" />
                    <input 
                        type="file" 
                        accept="image/*" 
                        id="file-upload" 
                        onChange={handleImageChange} 
                        className="upload-button" 
                    />
                    <label htmlFor="file-upload" className="custom-upload-button">Choisir une photo de profil</label>
                    <button onClick={handleUpload} className="upload-button">Télécharger</button>
                </div>
                {user ? (
                    <div className="user-info">
                        <h3>{user.displayName || "Utilisateur"}</h3>
                        <p className="user-email">{user.email}</p>
                    </div>
                ) : (
                    <p>Aucun utilisateur connecté.</p>
                )}
                <div className="profile-actions">
                    <Link to="/comparison" className="action-button">Accéder aux Tarifs</Link>
                </div>
            </div>
        </div>
    );
};

export default Profile;
