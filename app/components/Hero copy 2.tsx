import { Link } from "react-router";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-25  md:pt-12 overflow-hidden text-center bg-white">
      {/* Hero Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center"
      >
        {/* 2. THE IMAGE */}
        <div className="w-full mb-8 overflow-hidden shadow-2xl">
          <img
            src="/images/broken-pair-of-sunglasses.png"
            alt="Spectacle and Watch Repair Workshop"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* 1. WELCOME TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2.5rem,2vw,4rem)] font-extrabold mb-4"
        >
          Welcome to 1 Hour Spectacle and Watch Repairs
        </motion.h1>

        {/* 3. WE MAKE IT... TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[clamp(1.5rem,1vw,1.5rem)] leading-relaxed  max-w-2xl"
        >
          We repair all makes of sunglasses and spectacles!
        </motion.p>
      </motion.div>
    </section>
  );
}
