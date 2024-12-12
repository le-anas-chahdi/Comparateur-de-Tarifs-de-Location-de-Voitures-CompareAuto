import React, { useState } from 'react';
import { auth } from '../../config/firebaseConfig';
import { EmailAuthProvider, reauthenticateWithCredential, updatePassword, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu'; 
import './ChangePassword.css';
import Navbar from '../../components/layout/Navbar';
import { TextField } from "@mui/material";
import SideBarMenu from '../../components/SideBarMenu'

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChangePassword = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const user = auth.currentUser;

        if (!user) {
            setError("Veuillez vous connecter pour changer votre mot de passe.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Le nouveau mot de passe et la confirmation ne correspondent pas.");
            return;
        }

        const credential = EmailAuthProvider.credential(user.email, oldPassword);

        try {
            await reauthenticateWithCredential(user, credential);
            await updatePassword(user, newPassword);

            setSuccess("Votre mot de passe a été modifié avec succès.");

            setTimeout(async () => {
                await signOut(auth);
                navigate('/'); 
            }, 2000); 
        } catch (err) {
            console.error("Erreur lors du changement de mot de passe :", err);
            setError("Erreur lors du changement de mot de passe : " + err.message);
        }
    };

    return (
        <>
          <Navbar />
          <SideBarMenu />
          <section className="flex justify-center xl:pt-28">
            <form
              className="2xl:w-[40%] lg:w-[50%] sm:w-[50%] w-full md:shadow-2xl space-y-5 text-slate-800 2xl:p-20 xl:p-16 p-8 flex flex-col items-center"
              onSubmit={handleChangePassword}
            >
              <h2 className="font-semibold 2xl:text-5xl xl:text-4xl lg:text-3xl 2xl:mb-2 mb-1 md:text-xl text-lg">
                CHANGER MOT DE PASSE
              </h2>
              <TextField
                type="password"
                required
                fullWidth
                label="Ancien mot de passe"
                value={oldPassword}
                sx={outlinedInputStyles}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <TextField
                type="password"
                required
                fullWidth
                label="Nouveau mot de passe"
                value={newPassword}
                sx={outlinedInputStyles}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <TextField
                type="password"
                required
                fullWidth
                label="Confirmer le nouveau mot de passe"
                value={confirmPassword}
                sx={outlinedInputStyles}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              {success && <p className="text-green-500 text-sm text-center">{success}</p>}
              <button
                type="submit"
                className="hover:bg-[#ff9900] bg-[#ffcc00] rounded-xl text-slate-800 transition-colors duration-300"
              >
                <p className="lg:py-4 lg:px-24 py-2 px-11 2xl:text-2xl xl:text-lg md:text-base text-sm">
                  Changer mot de passe
                </p>
              </button>
            </form>
          </section>
        </>
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
    
    export default ChangePassword;