import React, { useEffect, useState } from 'react';
import { auth, db } from '../../config/firebaseConfig'; 
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Menu from './Menu'; 
import Navbar from '../../components/layout/Navbar';
import SideBarMenu from '../../components/SideBarMenu'

const PersonalInfo = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        adresse: '',
        telephone: '',
    });

    useEffect(() => {
        const user = auth.currentUser;

        if (user) {
            const fetchUserInfo = async () => {
                try {
                    const docRef = doc(db, 'users', user.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setUserInfo(docSnap.data());
                        setFormData({
                            ...docSnap.data(),
                            telephone: docSnap.data().telephone || 'non renseigné',
                        });
                    }
                } catch (err) {
                    console.error("Erreur lors de la récupération des données :", err);
                } finally {
                    setLoading(false);
                }
            };
            fetchUserInfo();
        } else {
            setLoading(false);
        }
    }, []);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = auth.currentUser;

        if (!user) {
            return;
        }

        try {
            await setDoc(doc(db, 'users', user.uid), formData);
            setUserInfo(formData);
            setEditMode(false);
        } catch (err) {
            console.error("Erreur lors de la mise à jour des données :", err);
        }
    };

    if (loading) {
        return <div>Chargement des informations...</div>;
    }

    if (!auth.currentUser) {
        return <div>Veuillez vous connecter pour accéder à vos informations personnelles.</div>;
    }

    return (
        <>
          <Navbar />
          <SideBarMenu />
          <section className="flex justify-center 2xl:py-32 xl:p-16 lg:p-12 p-8">
            <div className="text-slate-800 2xl:w-[40%] lg:w-[50%] sm:w-[50%] w-full shadow-2xl flex flex-col justify-center items-center space-y-4 2xl:space-y-5 2xl:py-20 xl:py-16 p-12">
              <h2 className="font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl 2xl:mb-2 mb-1 md:text-xl text-lg text-slate-800">
                Informations Personnelles
              </h2>
              {userInfo ? (
                editMode ? (
                  <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div className="flex flex-col">
                      <label className="font-semibold">Nom:</label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-semibold">Prénom:</label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-semibold">Adresse:</label>
                      <input
                        type="text"
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="font-semibold">Téléphone:</label>
                      <input
                        type="text"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-[#FFCC00] hover:bg-[#FF9900] text-slate-800 font-semibold py-2 px-4 rounded-md transition-all"
                    >
                      Enregistrer les modifications
                    </button>
                  </form>
                ) : (
                  <section className="flex gap-3 pb-2 w-full">
                    <div className="font-semibold text-right 2xl:text-2xl xl:text-lg">
                      <p>Nom:</p>
                      <p>Prénom:</p>
                      <p>Adresse:</p>
                      <p>Téléphone: </p>
                      <p>Email: </p>
                    </div>
                    <div className="2xl:text-2xl xl:text-lg">
                      <p>{userInfo.nom}</p>
                      <p>{userInfo.prenom}</p>
                      <p>{userInfo.adresse}</p>
                      <p>{userInfo.telephone || "non renseigné"}</p>
                      <p>{auth.currentUser.email}</p>
                    </div>
                  </section>
                )
              ) : (
                <div>Aucune donnée trouvée.</div>
              )}
              {!editMode && (
                <button
                  onClick={handleEditClick}
                  className="bg-[#FFCC00] hover:bg-[#FF9900] text-slate-800 font-semibold py-2 px-4 rounded-md transition-all"
                >
                  Modifier
                </button>
              )}
            </div>
          </section>
        </>
      );
    };
    
    export default PersonalInfo;