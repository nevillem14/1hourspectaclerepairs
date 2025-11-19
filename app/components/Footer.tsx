// File: app/components/Footer.tsx

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { MapPin } from "lucide-react";

const contactNumber = "+27718185904";
const contactNumberDisplay = "+27 71 818 5904";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 mt-12 w-full">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div className="flex items-center justify-center lg:justify-start">
          <img
            src="/images/wsdxi-logo-2-white.png"
            alt="wsdxi-logo-white-image"
            className="w-full h-18 object-scale-down rounded-lg"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-yellow-400">
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
          <p className="mt-2">
            Phone:{" "}
            <a className="hover:text-yellow-400" href={"tel:" + contactNumber}>
              {contactNumberDisplay}
            </a>
          </p>
          <p className="mt-2">
            Email:{" "}
            <a
              className="hover:text-yellow-400"
              href="mailto:hello@wsdxi.co.za"
            >
              hello@wsdxi.co.za{" "}
              <span className="ml-12">support@wsdxi.co.za</span>
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-yellow-400"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-yellow-400"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}

      <div className="text-white/30 text-sm mx-auto px-4 py-4 border-t border-gray-900">
        <div className="flex flex-col items-center text-center sm:flex-row sm:justify-center sm:text-left">
          {/* Copyright */}
          <div className="flex items-center mb-2 sm:mb-0">
            <p className="mx-10 sm:mx-0">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
          <div>
            <span className="h-5 hidden sm:inline mx-2">|</span>
          </div>
          <div className="flex items-center mb-2 sm:mb-0">
            <p className="mx-10 sm:mx-0">Winter Shadow Designs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
