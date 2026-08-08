import { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import { Menu, X, Phone, MapPin, User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "~/lib/constants";
import { supabase } from "~/utils/supabaseClient";

export default function Navbar() {
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
      ? "text-cyan-600 font-semibold border-b-2 border-cyan-600 pb-1"
      : "text-slate-600 hover:text-slate-900 transition-colors pb-1";

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar - Location & Contact Details */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center space-x-2">
            <MapPin className="hidden md:block w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="hidden md:block truncate">
              Shop 102/3 Fragrance Street Market, Croftdene, Chatsworth, Durban
            </span>
          </div>

          {/* Added w-full so justify-end pushes the contents to the far right on mobile */}
          <div className="flex items-center justify-end md:justify-start space-x-2 w-full sm:w-auto">
            <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <a
              href="tel:0743769563"
              className="hover:text-white transition duration-150 font-medium whitespace-nowrap"
            >
              074 376 9563
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:0742788261"
              className="hover:text-white transition duration-150 font-medium whitespace-nowrap"
            >
              074 278 8261
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/1-hour-spectacle-repairs-logo.svg"
              alt={SITE_CONFIG.name + " logo"}
              className="h-7 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 font-medium items-center text-sm">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/know-your-glasses" className={navLinkClass}>
                Know Your Glasses
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Desktop Right Actions (Auth / Dashboard) */}
          <div className="hidden lg:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-3">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-1.5 text-sm font-semibold text-slate-700 hover:text-cyan-600 transition"
                >
                  <User className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/contact"
                  className="text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2.5 rounded-xl shadow-sm transition"
                >
                  Book Repair
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
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
            className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 shadow-xl"
          >
            <ul className="flex flex-col space-y-4 font-medium">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Know Your Glasses", path: "/services" },
                { name: "Contact & Location", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="block text-base py-1.5 text-slate-700 hover:text-cyan-600 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              <hr className="border-slate-100 my-2" />

              {session ? (
                <>
                  <li>
                    <NavLink
                      to="/dashboard"
                      className="flex items-center space-x-2 text-base py-2 text-cyan-600 font-semibold"
                      onClick={() => setMobileOpen(false)}
                    >
                      <User className="w-5 h-5" />
                      <span>My Dashboard</span>
                    </NavLink>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full text-left text-base py-2 text-red-500 font-semibold"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </button>
                  </li>
                </>
              ) : (
                <div className="flex flex-col space-y-3 pt-2">
                  <Link
                    to="/login"
                    className="block text-center py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-center py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition shadow-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    Book a Repair
                  </Link>
                </div>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
