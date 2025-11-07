import React from "react";
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-pink-100 via-yellow-100 to-purple-100 text-gray-800 p-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h6 className="text-purple-700 font-bold text-lg space-y-3">
            Services
          </h6>
          <Link
            to="/branding"
            className="block link link-hover hover:text-pink-500 transition-colors"
          >
            Branding
          </Link>
          <Link
            to="/design"
            className="block link link-hover hover:text-pink-500 transition-colors"
          >
            Design
          </Link>
          <Link
            to="/toy-customization"
            className="block link link-hover hover:text-pink-500 transition-colors"
          >
            Toy Customization
          </Link>
        </div>

        <div>
          <h6 className="text-purple-700 font-bold text-lg mb-3">Company</h6>
          <Link
            to="/about"
            className="block link link-hover hover:text-purple-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block link link-hover hover:text-purple-600 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/careers"
            className="block link link-hover hover:text-purple-600 transition-colors"
          >
            Careers
          </Link>
        </div>

        <div>
          <h6 className="text-purple-700 font-bold text-lg mb-3">Legal</h6>
          <Link
            to="/terms"
            className="block link link-hover hover:text-green-500 transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy"
            className="block link link-hover hover:text-green-500 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/refund"
            className="block link link-hover hover:text-green-500 transition-colors"
          >
            Refund Policy
          </Link>
        </div>

        <div>
          <h6 className="text-purple-700 font-bold text-lg mb-3">Follow Us</h6>
          <div className="flex space-x-3 mt-2">
            <Link
              to="https://twitter.com"
              className="p-3 bg-blue-400 rounded-full hover:bg-blue-500 transition-colors text-white"
              target="_blank"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              to="https://youtube.com"
              className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors text-white"
              target="_blank"
            >
              <FaYoutube size={20} />
            </Link>
            <Link
              to="https://facebook.com"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors text-white"
              target="_blank"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              to="https://instagram.com"
              className="p-3 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors text-white"
              target="_blank"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} ToyWorld. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
