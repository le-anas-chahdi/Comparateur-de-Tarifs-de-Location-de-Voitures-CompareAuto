import React, { useEffect, useState } from 'react';
import { auth, db, storage } from '../../firebaseConfig'; // Assurez-vous d'importer auth, db et storage
import { Link } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import './Profile.css'; // Assurez-vous d'importer le CSS

const Profile = () => {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileImage, setProfileImage] = useState('/default-profile.png');
    const [imageFile, setImageFile] = useState(null); // Pour stocker le fichier image

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                // Récupérer l'URL de l'image de profil de Firestore
                const docRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    if (data.profileImage) {
                        setProfileImage(data.profileImage); // Définir l'image récupérée
                    }
                }
            } else {
                window.location.href = '/login';
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        auth.signOut().then(() => {
            window.location.href = '/';
        });
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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

        const user = auth.currentUser;
        const storageRef = ref(storage, `profileImages/${user.uid}/${imageFile.name}`);

        try {
            await uploadBytes(storageRef, imageFile); // Télécharge l'image
            const url = await getDownloadURL(storageRef); // Obtient l'URL de l'image
            setProfileImage(url); // Met à jour l'image de profil affichée
            // Enregistre l'URL dans Firestore
            await setDoc(doc(db, 'users', user.uid), { profileImage: url }, { merge: true });
            console.log("Image téléchargée et URL enregistrée !");
        } catch (error) {
            console.error("Erreur lors du téléchargement de l'image :", error);
        }
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
                <h2>Mon Profil</h2>
                <div className="profile-icons">
                    <i className="fas fa-bell"></i>
                    <i className="fas fa-sign-out-alt" onClick={handleLogout}></i>
                </div>
            </div>
            {menuOpen && (
                <div className="profile-menu">
                    <div className="menu-item">
                        <Link to="/PersonalInfo">Info Personnelle</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/changePassword">Changer Mot de Passe</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/Reservations">Voir Mes Réservations</Link>
                    </div>
                </div>
            )}
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
                        <h3>{user.displayName || "Nom de l'utilisateur"}</h3>
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
