import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function  SidebarMenu (){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-max h-max">
      <button
        onClick={toggleMenu}
        className="absolute top-4 left-4 z-50 bg-black text-white inline-flex flex-col items-center justify-center w-10 h-10 rounded-md focus:outline-none"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FFCC00] p-4 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-4 text-black text-lg pt-40">
          <Link
            className="hover:text-green-900 font-semibold"
            to="/personalinfo"
            onClick={toggleMenu}
          >
            Info Personnelle
          </Link>
          <Link
            className="hover:text-green-900 font-semibold"
            to="/changePassword"
            onClick={toggleMenu}
          >
           Changer Mot de Passe
          </Link>
          <Link
            className="hover:text-green-900 font-semibold"
            to="/subscriptions"
            onClick={toggleMenu}
          >
          Mes Abonnements
          </Link>
          <Link
            className="hover:text-green-900 font-semibold"
            to="/comparison"
            onClick={toggleMenu}
          >
          Comparer les Tarifs
          </Link>
        </ul>
      </div>
    </div>
  );
};

