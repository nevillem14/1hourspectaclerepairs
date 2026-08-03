import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { motion } from "framer-motion";
import {
  Wrench,
  Clock,
  ShieldCheck,
  Sparkles,
  Glasses,
  Watch,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

export function meta() {
  const siteUrl = "https://1hourspectaclerepairs.co.za";
  const ogImageUrl = `${siteUrl}/images/1hourspectaclerepairs-og-facebook-1200x630.jpg`;

  return [
    {
      title:
        "1 Hour Spectacle & Watch Repairs — KwaZulu-Natal's Only 1-Hour Specialists",
    },
    {
      name: "description",
      content:
        "KwaZulu-Natal's exclusive 1-hour spectacle and watch repair specialists. 19 years of experience. We fix all makes of frames, watches, and grandfather clocks.",
    },
    {
      name: "keywords",
      content:
        "1 Hour Spectacle & Watch Repairs, spectacle repair KwaZulu-Natal, watch repair, sunglasses repair, grandfather clock service, fast optical repair KZN",
    },
    { name: "author", content: "1 Hour Spectacle & Watch Repairs" },

    // OpenGraph (Facebook, LinkedIn, WhatsApp)
    {
      property: "og:title",
      content:
        "1 Hour Spectacle & Watch Repairs — KwaZulu-Natal's Only 1-Hour Specialists",
    },
    {
      property: "og:description",
      content:
        "KwaZulu-Natal's exclusive 1-hour spectacle and watch repair specialists. 19 years of expertise. Fast, guaranteed quality repairs.",
    },
    { property: "og:url", content: siteUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: ogImageUrl },
    { property: "og:image:secure_url", content: ogImageUrl },
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "1 Hour Spectacle & Watch Repairs" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content:
        "1 Hour Spectacle & Watch Repairs — KwaZulu-Natal's Only 1-Hour Specialists",
    },
    {
      name: "twitter:description",
      content:
        "KwaZulu-Natal's exclusive 1-hour spectacle and watch repair specialists. 19 years of experience.",
    },
    { name: "twitter:image", content: ogImageUrl },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Trust Bar / Stats Banner - Fully Mobile Optimized */}
      <section className="bg-slate-900 text-white py-6 md:py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl shrink-0">
                <Clock className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  19 Years Strong
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  Trusted craftsmanship
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl shrink-0">
                <ZapIcon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  KZN's Exclusive
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  Dedicated 1-hr turnaround
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 sm:col-span-2 md:col-span-1">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl shrink-0">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  Guaranteed Quality
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  All brands & makes serviced
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services & Products Grid */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12 md:space-y-20"
      >
        {/* Spectacle Repairs & Products Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Spectacle Repairs Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div>
              <h2 className="p-6 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Spectacle & Sunglasses Repairs
              </h2>
              <div className="relative overflow-hidden">
                <img
                  src="/images/image-of-broken-eyeglasses.jpg"
                  alt="Broken eyeglasses repair"
                  className="transform hover:scale-105 transition duration-500"
                />
              </div>
              {/* Badge positioned cleanly above/outside the image container */}
              <div className="px-6 pt-4">
                <div className="bg-slate-900 text-white px-3 py-1.5 rounded-full text-xs font-semibold inline-flex items-center space-x-1 shadow-sm">
                  <Glasses className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                  <span>Optical Specialists</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
              <div>
                <p className="text-slate-600 mb-5 sm:mb-6 text-sm">
                  Don't replace your favourite frames—let our expert hands
                  restore them to absolute perfection while you wait.
                </p>
                <ul className="space-y-2.5 sm:space-y-3 text-sm text-slate-700">
                  {[
                    "Repairs to all makes, brands, and designer sunglasses frames.",
                    "Transfer of lenses safely onto a new spectacle frame.",
                    "Precision realignment of bent or misaligned spectacle frames.",
                    "Drill-out of broken frame screws from barrels & replacement.",
                    "Expert cutting, fitting, and tinting of plastic lenses.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2.5 sm:space-x-3"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Products & Retail Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl inline-block mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
                Quality Products & Accessories
              </h2>
              <p className="text-slate-600 mb-5 sm:mb-6 text-sm">
                Explore our curated range of optical wear, watch utilities, and
                essential replacement items.
              </p>
              <ul className="space-y-2.5 sm:space-y-3 text-sm text-slate-700 mb-6 sm:mb-8">
                {[
                  "Designer Optical Frames & Sunglasses",
                  "Disposable Colour Contact Lenses",
                  "Diving Masks & Specialised Optical Gear",
                  "Premium Watch Straps & Bands (Leather, Metal, Stretch)",
                  "Replacement Watch Batteries & Fittings",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2.5 sm:space-x-3"
                  >
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 sm:p-4 text-center">
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium uppercase tracking-wider">
                Need a custom item?
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-1">
                Visit our store for live consultations and fittings.
              </p>
            </div>
          </div>
        </div>

        {/* Watch & Clock Repair Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Watches */}
            <div className="p-6 sm:p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
                  Precision Watch Repairs
                </h2>
                {/* Badge placed cleanly below the image box */}
                <div className="mb-5">
                  <div className="bg-slate-900 text-white px-3 py-1.5 rounded-full text-xs font-semibold inline-flex items-center space-x-1 shadow-sm">
                    <Watch className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                    <span>Master Watchmaker</span>
                  </div>
                </div>

                <p className="text-slate-600 mb-5 sm:mb-6 text-sm">
                  Entrust your timepieces to master craftsmanship. We repair all
                  types of mechanical, automatic, and quartz wristwatches.
                </p>
                <div className="relative h-44 sm:h-48 rounded-xl overflow-hidden mb-3 ">
                  <img
                    src="/images/watch-repairs.jpg"
                    alt="Luxury watch repairs"
                    className="mt-8"
                  />
                </div>
                <ul className="space-y-2.5 sm:space-y-3 text-sm text-slate-700">
                  {[
                    "Repairs to all hand watches – automatic (self-winding) and manual.",
                    "Fitment of glass, winders, hands, needles, batteries, and movements.",
                    "Replacement bands (leather, metal, stretch).",
                    "Expertise with elite luxury names like Rolex, Seiko, Citizen, and more.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2.5 sm:space-x-3"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Grandfather Clocks */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between bg-slate-50/50">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">
                  Grandfather Clocks & Heavy Timepieces
                </h2>
                {/* Badge placed cleanly below the image box */}
                <div className="mb-5">
                  <div className="bg-slate-900 text-white px-3 py-1.5 rounded-full text-xs font-semibold inline-flex items-center space-x-1 shadow-sm">
                    <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                    <span>Specialised Restoration</span>
                  </div>
                </div>

                <p className="text-slate-600  text-sm">
                  Complete overhauls and maintenance for heirloom grandfather
                  clocks, carried out with meticulous structural testing.
                </p>
                <div className="relative rounded-xl overflow-hidden my-6">
                  <img
                    src="/images/clock-grandfather.jpg"
                    alt="Grandfather clock service"
                    className="h-full"
                  />
                </div>
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    Service & Testing Process:
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Complete service takes approximately{" "}
                    <span className="font-bold text-cyan-600">1 week</span> for
                    servicing, followed by{" "}
                    <span className="font-bold text-cyan-600">2 weeks</span> of
                    rigorous timing and mechanical testing to guarantee absolute
                    accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl text-white p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Ready for 1-Hour Turnaround Service?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto md:mx-0">
              Visit KwaZulu-Natal's trusted optical and watch repair experts
              today. Walk in with a broken piece, walk out with perfection.
            </p>
          </div>
          <div className="w-full md:w-auto shrink-0">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition duration-200 shadow-lg text-sm"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Contact Us Today
            </a>
          </div>
        </div>
      </motion.main>
    </div>
  );
}

// Internal helper for Zap icon if lucide-react variant needed
function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
