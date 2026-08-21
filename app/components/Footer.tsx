import { Link } from "react-router";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  ShieldCheck,
  Glasses,
  Watch,
} from "lucide-react";
import { SITE_CONFIG } from "~/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <img
              src="/images/1-hour-spectacle-repairs-logo_white.png"
              alt={SITE_CONFIG.extendedName + " logo"}
              className="w-full h-10 md:h-12 object-left object-scale-down rounded-lg"
            />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We strive to provide the best possible service when repairing your
              spectacles or your watch. Our technicians are very experienced and
              are trained in both precision utilizing hand craftsmanship and the
              latest technology.
            </p>
            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition duration-150"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-cyan-400 transition duration-150"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/know-your-glasses"
                  className="hover:text-cyan-400 transition duration-150"
                >
                  Know Your Glasses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-cyan-400 transition duration-150"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Channels (No public email) */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400 mt-0.5">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phoneNumber_1}`}
                  className="hover:text-white transition duration-150"
                >
                  {SITE_CONFIG.phoneString_1}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phoneNumber_2}`}
                  className="hover:text-white transition duration-150"
                >
                  {SITE_CONFIG.phoneString_2}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={SITE_CONFIG.whatsappLink_1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition duration-150"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  Shop 102/3 Fragrance Street Market, 12 Fragrance Street,
                  Croftdene, Chatsworth, Durban, KwaZulu-Natal, South Africa
                  (Walk-ins Welcome)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-xs mx-auto px-4  border-t border-gray-900 bg-slate-950/60 py-6">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Left / centre: copyright + name */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-0">
            <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>

            <p className="ml-1">{SITE_CONFIG.extendedName}</p>
          </div>

          {/* Right: Designed Credit */}
          <p className="sm:text-right pt-10">
            <a
              href="https://wsdxi.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Design Credits
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
