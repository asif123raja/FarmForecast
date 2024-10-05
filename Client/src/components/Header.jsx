import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and App Name */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-white text-3xl font-bold">
            <span className="text-green-950">Farm</span>
            <span className="text-white">Forecast</span>
          </span>
        </div>

        {/* Hamburger menu (for mobile view) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Header links (Desktop view only) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/employee" className="text-white hover:bg-green-700 px-3 py-2 rounded-md">Stuffs</Link>
          <Link to="/admin" className="text-white hover:bg-green-700 px-3 py-2 rounded-md">Admin</Link>
          <Link to="/rand" className="text-white hover:bg-green-700 px-3 py-2 rounded-md">Rand</Link>
          <Link to="/signup" className="text-white hover:bg-green-700 px-3 py-2 rounded-md border border-white rounded">Sign Up</Link>
        </div>
      </div>

      {/* Dropdown menu (Mobile view only) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link to="/employee" className="block text-white bg-green-700 px-3 py-2 rounded-md">Stuffs</Link>
          <Link to="/admin" className="block text-white bg-green-700 px-3 py-2 rounded-md">Admin</Link>
          <Link to="/rand" className="block text-white bg-green-700 px-3 py-2 rounded-md">Rand</Link>
          <Link to="/signup" className="block text-white bg-green-700 px-3 py-2 rounded-md border border-white rounded">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
