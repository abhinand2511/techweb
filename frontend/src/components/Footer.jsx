import React from "react";
import logo from "../assets/techspi-logo.svg";
import fb from "../assets/fb.png";
import ing from "../assets/in.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black font-sans">
      {/* Top Section */}
      <div className="bg-[#660021] text-white px-6 py-12 md:px-20">
        <h4 className="text-base md:text-lg mb-2">Have Any Question?</h4>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Let Us Reach You</h2>
        <div className="flex flex-col sm:flex-row sm:max-w-md">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 text-black w-full border border-white outline-none text-base"
          />
          <button className="mt-2 sm:mt-0 sm:ml-2 px-6 py-2 bg-[#660021] border border-white text-white hover:bg-white hover:text-[#660021] transition-all text-base">
            Send
          </button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Pages */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Pages</h4>
          <ul className="space-y-3 text-base">
            <li>
              <a href="#about" className="hover:underline hover:text-[#660021] transition">
                About
              </a>
            </li>
            <li>
              <a href="#whatwedo" className="hover:underline hover:text-[#660021] transition">
                What We Do
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline hover:text-[#660021] transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact</h4>
          <ul className="space-y-3 text-base">
            <li>000-000-00-07</li>
            <li>xyz@techspiration.in</li>
          </ul>
        </div>

        {/* Statement */}
        <div className="text-4xl text-right">
          <p className="text-4xl font-medium leading-relaxed">
            Committed. Skilled. <br />
            Respected.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 px-6 md:px-20 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Logo Section */}
        <div className="flex items-center md:justify-start justify-center">
          <img src={logo} alt="Techspiration Logo" className="w-40 h-auto" />
        </div>

        {/* Social and Terms Section */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-6">
            <img src={fb} alt="Facebook" className="w-8 h-8 hover:opacity-70 cursor-pointer" />
            <img src={ing} alt="LinkedIn" className="w-8 h-8 hover:opacity-70 cursor-pointer" />
          </div>
          <span className="text-gray-500 text-base">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
