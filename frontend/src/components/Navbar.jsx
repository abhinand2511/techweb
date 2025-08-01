import React from "react";
import logo from  "../assets/hh.png";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div>
        <img src="/hh.png" alt="" />
        <ul>
          <a
            href="#Header"
            className="text-gray-300 hover:text-white hover:bg-[#B0E57C] hover:px-4 hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#Header"
            className="text-gray-300 hover:text-white hover:bg-[#B0E57C] hover:px-4 hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
          >
            What We Do
          </a>
          <a
            href="#Header"
            className="text-gray-300 hover:text-white hover:bg-[#B0E57C] hover:px-4 hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#Header"
            className="text-gray-300 hover:text-white hover:bg-[#B0E57C] hover:px-4 hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
