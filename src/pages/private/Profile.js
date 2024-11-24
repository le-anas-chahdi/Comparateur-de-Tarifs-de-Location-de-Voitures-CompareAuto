import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../../config/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Menu from './Menu';
import './Profile.css';
import Navbar from '../../components/layout/Navbar';

const Profile = () => {
    const [profileImage, setProfileImage] = useState(null); // URL de l'image de profil
    const [userData, setUserData] = useState(null); // Informations utilisateur (nom, email)
    const [message, setMessage] = useState(''); // Message pour l'utilisateur

    // Charger les données utilisateur depuis Firestore
    useEffect(() => {
        const fetchUserData = async () => {
            const currentUser = auth.currentUser;

            if (currentUser) {
                try {
                    const userDocRef = doc(db, 'users', currentUser.uid);
                    const userSnapshot = await getDoc(userDocRef);

                    if (userSnapshot.exists()) {
                        const userData = userSnapshot.data();
                        setUserData({
                            email: currentUser.email,
                            nom: userData.nom || 'Utilisateur',
                            prenom: userData.prenom || '',
                        });
                        setProfileImage(userData.profileImage || null); // Charger l'image si disponible
                    } else {
                        setMessage("Aucune donnée utilisateur trouvée.");
                    }
                } catch (error) {
                    console.error("Erreur lors de la récupération des données utilisateur :", error);
                    setMessage("Erreur lors de la récupération des données utilisateur.");
                }
            } else {
                setMessage('Veuillez vous connecter.');
            }
        };

        fetchUserData();
    }, []);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            alert('Veuillez sélectionner une image.');
            return;
        }

        const currentUser = auth.currentUser;
        if (!currentUser) {
            alert('Utilisateur non connecté.');
            return;
        }

        try {
            const storageRef = ref(storage, `profileImages/${currentUser.uid}/${file.name}`); // Chemin de stockage
            await uploadBytes(storageRef, file); // Télécharger l'image dans Firebase Storage

            const downloadURL = await getDownloadURL(storageRef); // Obtenir l'URL de téléchargement

            // Sauvegarder l'URL de l'image dans Firestore
            await setDoc(
                doc(db, 'users', currentUser.uid),
                { profileImage: downloadURL },
                { merge: true }
            );

            setProfileImage(downloadURL); // Mettre à jour l'image dans l'état
            setMessage('Image de profil mise à jour avec succès.');
        } catch (error) {
            console.error('Erreur lors de l’upload de l’image :', error);
            setMessage("Erreur lors du téléchargement de l'image.");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="profile-container">
                <Menu /> {/* Menu pour la navigation */}
                <h2>Mon Profil</h2>
                <div className="profile-content">
                    {userData ? (
                        <>
                            <div className="user-info">
                                <p><strong>Nom :</strong> {userData.nom} {userData.prenom}</p>
                                <p><strong>Email :</strong> {userData.email}</p>
                            </div>
                            <div className="profile-photo">
                                <img
                                    src={profileImage || `${process.env.PUBLIC_URL}/images/defaut.jpg`}
                                    alt="Profil"
                                    className="profile-image"
                                />
                                <input type="file" accept="image/*" onChange={handleImageUpload} />
                            </div>
                            {message && <p className="message">{message}</p>}
                        </>
                    ) : (
                        <p>Chargement des informations utilisateur...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;