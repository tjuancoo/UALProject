import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Importa la imagen del logo
import logoutIcon from "../assets/logoutIcon.png"; // Importa el icono de cerrar sesión

const Navbar = ({ showTitles }) => {
  const location = useLocation();

  const isHome = location.pathname === "/home";

  const isLogin = location.pathname === "/";

  return (
    <nav className="p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2 cursor-pointer" />
        </Link>
        {showTitles && !isLogin && (
          <div className="ml-8 flex space-x-4">
            <Link to="/maestros" className="text-lg">
              Maestros
            </Link>
            <Link to="/nominas" className="text-lg">
              Nóminas
            </Link>
          </div>
        )}
      </div>
      {!isLogin && (
        <Link to="/" className="cursor-pointer">
          <img src={logoutIcon} alt="Cerrar Sesión" className="h-6" />
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
