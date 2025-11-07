import React from "react";
import { FaTwitter, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-pink-100 via-yellow-100 to-purple-100 text-gray-800 p-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h6 className="text-purple-700 font-bold text-lg mb-3">Services</h6>
          <a className="block link link-hover hover:text-pink-500 transition-colors">
            Branding
          </a>
          <a className="block link link-hover hover:text-pink-500 transition-colors">
            Design
          </a>
          <a className="block link link-hover hover:text-pink-500 transition-colors">
            Toy Customization
          </a>
        </div>

        <div>
          <h6 className="text-purple-700 font-bold text-lg mb-3">Company</h6>
          <a className="block link link-hover hover:text-purple-600 transition-colors">
            About Us
          </a>
          <a className="block link link-hover hover:text-purple-600 transition-colors">
            Contact
          </a>
          <a className="block link link-hover hover:text-purple-600 transition-colors">
            Careers
          </a>
        </div>

        <div>
          <h6 className="text-purple-700 font-bold text-lg mb-3">Legal</h6>
          <a className="block link link-hover hover:text-green-500 transition-colors">
            Terms & Conditions
          </a>
          <a className="block link link-hover hover:text-green-500 transition-colors">
            Privacy Policy
          </a>
          <a className="block link link-hover hover:text-green-500 transition-colors">
            Refund Policy
          </a>
        </div>

        <div>
          <h6 className="text-purple-700 font-bold text-lg mb-3">Follow Us</h6>
          <div className="flex space-x-3 mt-2">
            <a className="p-3 bg-blue-400 rounded-full hover:bg-blue-500 transition-colors text-white">
              <FaTwitter size={20} />
            </a>
            <a className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors text-white">
              <FaYoutube size={20} />
            </a>
            <a className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors text-white">
              <FaFacebookF size={20} />
            </a>
            <a className="p-3 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors text-white">
              <FaInstagram size={20} />
            </a>
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
