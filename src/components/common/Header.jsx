// src/components/common/Header.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="NaijaTransit" className="w-8 h-8" />
          <span className="text-xl font-bold text-primary">NaijaTransit</span>
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : "text-gray-700 hover:text-primary"}>Home</NavLink>
          <NavLink to="/routes" className={({ isActive }) => isActive ? "text-primary" : "text-gray-700 hover:text-primary"}>Routes</NavLink>
          <NavLink to="/fares" className={({ isActive }) => isActive ? "text-primary" : "text-gray-700 hover:text-primary"}>Fares</NavLink>
          <NavLink to="/tips" className={({ isActive }) => isActive ? "text-primary" : "text-gray-700 hover:text-primary"}>Tips</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-primary" : "text-gray-700 hover:text-primary"}>About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
