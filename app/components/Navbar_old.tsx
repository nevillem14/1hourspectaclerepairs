import React, { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-[#333] shadow-[0_12px_8px_rgba(0,0,0,0.281)] border-b border-gray-300 rounded-sm">
      {/* Top row */}
      <div className="flex justify-between items-center flex-wrap">
        {/* Logo */}
        <div className="ml-4 mt-4">
          <Link to="/" className="inline-block">
            <img
              src="/images/1hourspectaclerepairs-logo-2.webp"
              alt="Waterfall Software Development 11 logo"
              className="h-8 sm:h-8 origin-top-left hover:scale-250 transition-transform duration-300 ease-in-out"
            />
          </Link>
        </div>

        {/* Hamburger */}
        <div className="mr-4 mt-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl sm:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } sm:flex flex-wrap justify-between gap-4 px-4 py-2 mt-2 border-t border-gray-300 text-[clamp(1rem,2vw,1.3rem)]`}
      >
        {["HOME", "ABOUT", "PRICING", "FAQ", "CONTACT", "DOMAIN LOOKUP"].map(
          (label) => {
            const path =
              label === "HOME"
                ? "/"
                : `/${label.toLowerCase().replace(" ", "")}`;
            return (
              <Link
                key={label} // ✅ FIXED
                to={path}
                className="text-[#007acc] font-bold hover:text-black"
              >
                {label}
              </Link>
            );
          },
        )}
      </div>
    </nav>
  );
}
