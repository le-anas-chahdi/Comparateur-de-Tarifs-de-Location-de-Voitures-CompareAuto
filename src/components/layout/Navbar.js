import { Link } from "react-router-dom";
import MenuDawer from "./MenuDrawer";

const Navbar = () => {

  return (
    <nav className="flex justify-between w-full h-[80px] items-center lg:pl-10 lg:pr-10 pl-6 pr-6 shadow-lg sticky top-0 z-10 bg-white text-lg">
      <div className="text-[#ffcc00] font-bold lg:text-2xl text-xl tracking-wide">
        <Link to="/">KomparAuto</Link>
      </div>
      <section className="hidden lg:block">
        <div
          className={`flex gap-6  items-center font-medium text-slate-800 font-lato`}
        >
          <Link className="hover:text-[#ffcc00]" to="/">
            Accueil
          </Link>
          <Link className="hover:text-[#ffcc00]" to="/comparison">
            Comparateur
          </Link>
          <Link className="hover:text-[#ffcc00]" to="/commentcamarchepage">
            Comment Ça Marche
          </Link>
          <Link className="hover:text-[#ffcc00]" to="/aboutuspage">
            A propos
          </Link>
          <Link className="hover:text-[#ffcc00]" to="/contactpage">
            Contact
          </Link>
          <Link to="/auth" className="hover:bg-[#ff9900]/80 bg-[#ffcc00] p-3 rounded-xl text-slate-700 transition-colors duration-300">
            Connexion | Inscription
          </Link>
        </div>
      </section>
      <MenuDawer />
    </nav>
  );
};

export default Navbar;
