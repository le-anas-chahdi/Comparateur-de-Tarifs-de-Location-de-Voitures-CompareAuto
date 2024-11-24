import React, { useEffect, useState } from 'react';
import { auth, db } from '../../config/firebaseConfig'; 
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Menu from './Menu'; 
import './PersonalInfo.css';
import Navbar from '../../components/layout/Navbar';

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
        <div>
            <Navbar />
            <div className="personal-info-container">
                <Menu /> 
                <h2>Informations Personnelles</h2>
                {userInfo ? (
                    <div className="personal-info">
                        {editMode ? (
                            <form onSubmit={handleSubmit}>
                                <label>
                                    <strong>Nom :</strong>
                                    <input
                                        type="text"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label>
                                    <strong>Prénom :</strong>
                                    <input
                                        type="text"
                                        name="prenom"
                                        value={formData.prenom}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label>
                                    <strong>Adresse :</strong>
                                    <input
                                        type="text"
                                        name="adresse"
                                        value={formData.adresse}
                                        onChange={handleChange}
                                        required
                                    />
                                </label>
                                <label>
                                    <strong>Téléphone :</strong>
                                    <input
                                        type="text"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                    />
                                </label>
                                <button type="submit">Enregistrer les modifications</button>
                            </form>
                        ) : (
                            <div>
                                <p><strong>Nom :</strong> {userInfo.nom}</p>
                                <p><strong>Prénom :</strong> {userInfo.prenom}</p>
                                <p><strong>Adresse :</strong> {userInfo.adresse}</p>
                                <p><strong>Téléphone :</strong> {userInfo.telephone || 'non renseigné'}</p>
                                <p><strong>Email :</strong> {auth.currentUser.email}</p>
                                <button onClick={handleEditClick}>Modifier</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>Aucune donnée trouvée.</div>
                )}
            </div>
        </div>
    );
};

export default PersonalInfo;
