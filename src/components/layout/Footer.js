import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black space-y-4 p-4">
      <div className="flex gap-5 text-white justify-center lg:text-base sm:text-sm text-xs">
        <Link to="/comparison">Comparateur</Link>
        <Link to="/aboutuspage">A propos</Link>
        <Link to="/faqpage">FAQ</Link>
        <Link to="/privacypolicypage">Politique de confidentialité</Link>
        <Link to="/jobs">Recrutement</Link>
        <Link to="/legal">Mentions légales</Link>
        
      </div>
      <div className="text-white flex justify-center flex-col items-center gap-2 lg:text-base sm:text-sm text-xs">
        Contactez nous:
        <a href="mailto:contact@carrentalcompare.com">
          contact@carrentalcompare.com
        </a>
        <div className="flex gap-6 items-center">
          <FaFacebook size={25} color="white" className="cursor-pointer" />
          <FaXTwitter size={20} color="white" className="cursor-pointer" />
          <FaLinkedin size={25} color="white" className="cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
