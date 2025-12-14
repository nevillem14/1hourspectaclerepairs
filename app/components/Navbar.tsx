import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown, Menu, X, ChevronLeft, MapPin, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "~/lib/constants";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuHistory, setMenuHistory] = useState<any[]>([mainMenu]);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-black font-semibold"
      : "text-blue hover:text-black transition-colors";

  const currentMenu = menuHistory[menuHistory.length - 1];

  const goBack = () => {
    setMenuHistory((prev) => prev.slice(0, -1));
  };

  const goForward = (submenu: any[]) => {
    setMenuHistory((prev) => [...prev, submenu]);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/wsdxi-logo-black.svg"
              alt={SITE_CONFIG.name + "logo"}
              className="h-16 md:h-20 w-auto p-2"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>

            {/* About Dropdown
            <li className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="flex items-center text-white hover:text-yellow-400 transition-colors"
              >
                About <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {openDropdown === "about" && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md py-2">
                  <li>
                    <NavLink
                      to="/about/reports"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Reports
                    </NavLink>
                  </li>
                </ul>
              )}
            </li> */}

            {/* Services Dropdown 
            <li className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center text-white hover:text-yellow-400 transition-colors"
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {openDropdown === "services" && (
                <ul className="absolute left-0 mt-2 w-72 bg-white shadow-lg border rounded-md py-2">
                  {servicesMenu.map(([label, link]) => (
                    <li key={link}>
                      <NavLink
                        to={link}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            */}

            <li>
              <NavLink to="/pricing" className={navLinkClass}>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={navLinkClass}>
                Faq
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/domainlookup" className={navLinkClass}>
                Domain Lookup
              </NavLink>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-black"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMenuHistory([mainMenu]); // reset to root menu when reopening
            }}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#edf3f0] px-4 pb-6 space-y-4">
          {/* Back button if inside submenu */}
          {menuHistory.length > 1 && (
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-white py-4 border-b border-green-900"
            >
              <ChevronLeft size={20} /> Back
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.ul
              key={menuHistory.length}
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              {currentMenu.map((item: any) => (
                <li key={item.label}>
                  {item.children ? (
                    <button
                      onClick={() => goForward(item.children)}
                      className="block w-full text-left py-2"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <NavLink
                      to={item.href}
                      className="block w-full text-left py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      )}
    </nav>
  );
};

{
  /* Menu Definitions 
const servicesMenu = [
  ["Community Development", "/services/community-development"],
  ["Corporate Programmes", "/services/corporate-programmes"],
  ["Early Childhood Development (ECD)", "/services/ecd"],
  [
    "Offender Rehabilitation & Reintegration",
    "/services/offender-rehabilitation",
  ],
  ["Peace Making & Justice Programmes", "/services/peace-making-justice"],
  ["Primary & Secondary School Programmes", "/services/school-programmes"],
  ["Youth & Adult Programmes", "/services/youth-adult-programmes"],
  [
    "Youth & Adult Personal Development Programmes",
    "/services/personal-development",
  ],
];
*/
}

const mainMenu = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PRICING", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/contact" },
  { label: "DOMAIN LOOKUP", href: "/domainlookup" },
];

export default Navbar;
