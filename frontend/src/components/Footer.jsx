import React from "react";
import Logo from "../Images/logo.png"

const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full h-16 bg-[#2A2D1A] flex justify-between items-center px-12 py-5">

      <div className="flex items-center gap-2">
        <a href="/"><img src={Logo} alt="Code-Shalla Logo" className=" h-10 " /></a>
        <div className="h-8 border-r-2 border-white mx-1"></div>
        <span className="text-m text-gray-300">Copyright © 2024 CodeShalla.com</span>
      </div>

      <div className="flex items-center gap-4">
        <a href="https://facebook.com" className="text-white text-lg hover:text-[#99ff00]"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="https://twitter.com" className="text-white text-lg hover:text-[#99ff00]"><i className="fa-brands fa-twitter"></i></a>
        <a href="https://instagram.com" className="text-white text-lg hover:text-[#99ff00]"><i className="fa-brands fa-instagram"></i></a>
        <a href="https://github.com" className="text-white text-lg hover:text-[#99ff00]"><i className="fa-brands fa-github"></i></a>
      </div>

    </footer>
  );
};

export default Footer;
