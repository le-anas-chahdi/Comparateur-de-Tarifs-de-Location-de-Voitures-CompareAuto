import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black space-y-4 p-4">
      <div className="flex gap-5 text-white justify-center lg:text-base sm:text-sm text-xs">
        <Link to="/comparison">Comparison</Link>
        <Link to="/aboutuspage">About Us</Link>
        <div className="cursor-pointer">FAQ</div>
        <div className="cursor-pointer">Privacy</div>
        <div className="cursor-pointer">Policy</div>
      </div>
      <div className="text-white flex justify-center flex-col items-center gap-2 lg:text-base sm:text-sm text-xs">
        Contact us:
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
