import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  MapPin,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copywriting & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Exclusive Badge */}
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full text-cyan-400 text-xs font-semibold tracking-wide uppercase">
              <Clock className="w-4 h-4" />
              <span>KwaZulu-Natal's Only 1-Hour Specialists</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Precision Repairs. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                Done in 1 Hour.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Backed by{" "}
              <strong className="text-white font-semibold">
                19 years of optical expertise
              </strong>
              . We repair all makes of sunglasses, spectacles, wristwatches, and
              grandfather clocks with guaranteed quality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition duration-200 shadow-lg shadow-cyan-500/20 text-sm group"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center space-x-2 text-slate-400 text-xs font-medium px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Serving KwaZulu-Natal</span>
              </div>
            </div>

            {/* Mini Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-xl font-bold text-white">19</p>
                <p className="text-xs text-slate-400">Years Experience</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">1 Hour</p>
                <p className="text-xs text-slate-400">Fast Turnaround</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">100%</p>
                <p className="text-xs text-slate-400">Guaranteed Work</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src="/images/broken-pair-of-sunglasses.png"
                alt="Spectacle and Watch Repair Workshop"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-700/80 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-semibold text-white">
                    All Brands & Makes Serviced
                  </span>
                </div>
                <span className="text-xs text-cyan-400 font-bold">
                  Walk-ins Welcome
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
