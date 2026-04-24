import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronLeft, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "~/lib/constants";
import { supabase } from "~/utils/supabaseClient";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const navigate = useNavigate();

  // Check auth state
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setMobileOpen(false);
    navigate("/");
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-black font-semibold border-b-2 border-blue-600 pb-1"
      : "text-gray-600 hover:text-black transition-colors pb-1";

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/wsdxi-logo-black.svg"
              alt={SITE_CONFIG.name + " logo"}
              className="h-16 md:h-20 w-auto p-2"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 font-medium items-center">
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
            <li>
              <NavLink to="/pricing" className={navLinkClass}>
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/domainlookup" className={navLinkClass}>
                Domain Lookup
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={navLinkClass}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>

            {/* Auth Buttons */}
            <li className="pl-4 border-l border-gray-200 flex items-center space-x-4">
              {session ? (
                <>
                  <NavLink
                    to="/dashboard"
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <User size={18} /> Dashboard
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="text-gray-500 hover:text-red-600 flex items-center gap-1"
                  >
                    <LogOut size={18} /> Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="text-gray-600 hover:text-black"
                  >
                    Login
                  </NavLink>
                  <Link
                    to="/signup"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-black"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 px-4 pb-8"
          >
            <ul className="flex flex-col space-y-4 pt-4">
              {[
                "Home",
                "About",
                "Pricing",
                "Domain Lookup",
                "FAQ",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    className="block text-lg py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}

              <hr className="border-gray-100" />

              {session ? (
                <>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="block text-lg py-2 text-blue-600 font-semibold"
                      onClick={() => setMobileOpen(false)}
                    >
                      My Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left text-lg py-2 text-red-500 font-semibold"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className="block text-lg py-2"
                      onClick={() => setMobileOpen(false)}
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/signup"
                      className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold"
                      onClick={() => setMobileOpen(false)}
                    >
                      Sign Up Now
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
