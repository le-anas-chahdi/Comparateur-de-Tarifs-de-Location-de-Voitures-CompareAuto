import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";

export default function MenuDawer() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <section className="lg:hidden block">
      <IoMenu
        size={31}
        onClick={showDrawer}
        className="cursor-pointer"
        color="#ffcc00"
      />
      <Drawer
        onClose={onClose}
        open={open}
        width={300}
        closeIcon={null}
        headerStyle={{ borderBottom: "none" }}
      >
        <RiCloseLargeLine
          size={20}
          style={{ color: "#475569", cursor: "pointer" }}
          onClick={onClose}
        />
        <div
          className={`flex flex-col gap-6 items-center font-medium text-slate-800 font-lato text-base pt-[15%]`}
        >
          <Link className="hover:text-[#ffcc00]" to="/" onClick={onClose}>
            Home
          </Link>
          <Link
            className="hover:text-[#ffcc00]"
            to="/comparison"
            onClick={onClose}
          >
            Comparison
          </Link>
          <Link
            className="hover:text-[#ffcc00]"
            to="/commentcamarchepage"
            onClick={onClose}
          >
            Comment Ça Marche
          </Link>
          <Link
            className="hover:text-[#ffcc00]"
            to="/aboutuspage"
            onClick={onClose}
          >
            About Us
          </Link>
          <Link
            className="hover:text-[#ffcc00]"
            to="/contactpage"
            onClick={onClose}
          >
            Contact
          </Link>
          <Link to="/auth"
          className="hover:bg-[#ff9900]/80 bg-[#ffcc00] p-3 rounded-xl hover:text-slate-800 text-slate-700 transition-colors duration-300"
          onClick={onClose}
          >
              Login / Sign Up
          </Link>

        </div>
      </Drawer>
    </section>
  );
}
