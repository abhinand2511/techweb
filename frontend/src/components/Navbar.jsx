import { Link } from "react-router-dom";
import logo from "../assets/techspi-logo.svg";

export const Navbar = () => {
  return (
    <div className="font-manrope absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-around items-center py-5 px-2">
        <img
          src={logo}
          alt="Logo"
          className="h-10"
        />
        <ul className="flex gap-7 mr-40 pr-20">
          <li>
            <Link
              to="/"
              className="font-bold text-black-700 hover:text-white hover:bg-[#B0E57C] hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#whatwedo"
              className="font-bold text-black-300 hover:text-white hover:bg-[#e67300] hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              className="font-bold text-black-300 hover:text-white hover:bg-[#e6b800] hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-bold text-black-300 hover:text-white hover:bg-[#00ccff] hover:py-2 hover:rounded-full transition-all duration-300 ease-in-out"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};