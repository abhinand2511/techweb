import { Link } from "react-router-dom";
import fb from "../assets/fb.png";
import ing from "../assets/in.png";
import logo from "../assets/techspi-logo.svg";
//created a footer using react and tailwind css
export const Footer = () => {
  return (
    <footer className="bg-white text-black font-sans">

      <div className="bg-[#610218] text-white px-6 py-12 md:px-20">
        <h4 className="text-sm md:text-base mb-2">Have Any Question?</h4>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">Let Us Reach You</h2>
        <div className="grid-center max-w-md flex">
          {/* created mail box using tailwind css*/}
          <input 
            type="email" 
            placeholder="Your Email" 
            className="bg-white flex-grow px-4 py-3 text-gray-800 focus:outline pr-1"
            />
          <button className="p-2 border border-white bg-[#610218] text-white"> Send
          </button>
        </div>
      </div>

      
      <div className="px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        <div>
          <h4 className="font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link
              to="/#about"
            >
              About
            </Link></li>
            <li> <Link
              to="/"
            >
              What We Do
            </Link></li>
            <li><Link
              to="/contact" >
              Contact Us
            </Link></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>000-000-00-07</li>
            <li>xyz@techspiration.in</li>
          </ul>
        </div>

        
        <div className="text-4xl text-right">
          <p className="text-4xl">
            Committed. Skilled. <br />
            Respected.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 px-6 md:px-20 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center md:justify-start justify-center">
          <img src={logo} alt="Techspiration Logo" className="w-40 h-30" />
        </div>

        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-4">
            <img src={fb} alt="Facebook" className="w-8 h-8 hover:opacity-70 cursor-pointer" />
            <img src={ing} alt="LinkedIn" className="w-8 h-8 hover:opacity-70 cursor-pointer" />
          </div>
          <span className="text-gray-500 text-sm">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};