import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import fb from "../assets/fb.png";
import ing from "../assets/in.png";
import logo from "../assets/techspi-logo.svg";

export const Footer = () => {
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    if (!subscriberEmail) {
      setStatus("Please enter an email.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/subscribe", {
        email: subscriberEmail,
      });
      setStatus("Thank you! We'll be in touch.");
      setSubscriberEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-white text-black font-sans">
      {/* Purple CTA Section */}
      <div className="bg-[#610218] text-white px-6 py-12 md:px-20">
        <h4 className="text-sm md:text-base mb-2">Have Any Question?</h4>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6">
          Let Us Reach You
        </h2>
        <div className="grid-center max-w-md flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={subscriberEmail}
            onChange={(e) => setSubscriberEmail(e.target.value)}
            placeholder="Your Email"
            className="bg-white flex-grow px-4 py-3 text-gray-800 focus:outline-none"
          />
          <button
            onClick={handleSubscribe}
            className="p-2 px-4 border border-white bg-[#610218] text-white hover:bg-[#7a0a2a] transition"
          >
            Send
          </button>
          {status && (
            <p className="text-sm text-white mt-2 sm:ml-2">{status}</p>
          )}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div>
          <h4 className="font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/">What We Do</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
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

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 px-6 md:px-20 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center md:justify-start justify-center">
          <img src={logo} alt="Techspiration Logo" className="w-40 h-30" />
        </div>

        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-4">
            <img
              src={fb}
              alt="Facebook"
              className="w-8 h-8 hover:opacity-70 cursor-pointer"
            />
            <img
              src={ing}
              alt="LinkedIn"
              className="w-8 h-8 hover:opacity-70 cursor-pointer"
            />
          </div>
          <span className="text-gray-500 text-sm">Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};
