import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../../config/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Menu from './Menu';
import Navbar from '../../components/layout/Navbar';
import SideBarMenu from '../../components/SideBarMenu';

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
        <>
          <Navbar />
          <SideBarMenu />
          <section className="flex justify-center 2xl:py-32 xl:p-16 lg:p-12 p-8">
            <div className="text-slate-800 2xl:w-[40%] lg:w-[50%] sm:w-[50%] w-full shadow-2xl flex flex-col justify-center items-center space-y-4 2xl:space-y-5 2xl:py-20 xl:py-16 p-12">
              <h2 className="font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl 2xl:mb-2 mb-1 md:text-xl text-lg text-slate-800">
                Mon Profil
              </h2>
              <section className="flex gap-3 pb-6">
                <div className="font-semibold text-right 2xl:text-2xl xl:text-lg">
                  <p>Nom:</p>
                  <p>Prénom:</p>
                  <p>Adresse:</p>
                  <p>Téléphone:</p>
                  <p>Email:</p>
                </div>
                <div className="2xl:text-2xl xl:text-lg">
                  <p>{userData ? userData.nom : "Chargement..."}</p>
                  <p>{userData ? userData.prenom : "Chargement..."}</p>
                  <p>{userData && userData.adresse ? userData.adresse : "Vide"}</p>
                  <p>{userData && userData.telephone ? userData.telephone : "Vide"}</p>
                  <p>{userData ? userData.email : "Chargement..."}</p>
                </div>
              </section>
              <div className="flex flex-col items-center gap-6">
                <img
                  src={
                    profileImage || `${process.env.PUBLIC_URL}/images/defaut.jpg`
                  }
                  alt="Profil"
                  className="w-32 h-32 rounded-full object-cover border-2 border-slate-300"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ffcc00] file:text-slate-800 hover:file:bg-[#ff9900] transition-colors duration-300"
                />
                {message && (
                  <p className="text-center text-green-600 text-sm mt-4">
                    {message}
                  </p>
                )}
              </div>
            </div>
          </section>
        </>
      );
    };
    
    export default Profile;