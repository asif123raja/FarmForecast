import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* App Info */}
        <div className="mb-4 md:mb-0">
        <span className="text-white text-3xl font-bold">
            <span className=" text-green-950">Farm</span>
            <span className="text-white">Forecast</span>
          </span>
          <p className="text-sm">Your go-to marketplace for fresh vegetables and more.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm border-t border-white pt-4">
        © 2024 Commodities. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
