import React from "react";
import logo from  "../assets/techspi-logo.svg";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-around items-center py-5 px-2 ">
        <img 
  src={logo} 
  alt="Logo" 
  className="h-10 border-2 border-none" // Debug border
/>
        <ul className="flex gap-7 mr-40 pr-20">
          <a
            href="#Header"
            className="font-bold text-black-700 hover:text-white hover:bg-[#B0E57C] hover:px-4 hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#Header"
            className="font-bold text-black-300 hover:text-white hover:bg-[#B0E57C] hover:px-4 hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
          >
            What We Do
          </a>
          <a
            href="#Header"
            className="font-bold text-black-300 hover:text-white hover:bg-[#B0E57C] hover:px-4 hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#Header"
            className="font-bold text-black-300 hover:text-white hover:bg-[#B0E57C] hover:px-4 hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
