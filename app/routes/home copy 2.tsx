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
  MapPin,
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
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Trust Bar / Stats Banner */}
      <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <Clock className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg">19 Years Strong</h4>
                <p className="text-sm text-slate-400">
                  Trusted optical and watch craftsmanship
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <ZapIcon className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg">KZN's Exclusive</h4>
                <p className="text-sm text-slate-400">
                  The region's only dedicated 1-hour turnaround
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Guaranteed Quality</h4>
                <p className="text-sm text-slate-400">
                  All makes and high-end brands serviced
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20"
      >
        {/* Spectacle Repairs & Products Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Spectacle Repairs Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col justify-between">
            <div className="relative h-64 overflow-hidden bg-slate-100">
              <img
                src="/images/image-of-broken-eyeglasses.jpg"
                alt="Broken eyeglasses repair"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1">
                <Glasses className="w-4 h-4 text-cyan-400" />
                <span>Optical Specialists</span>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Spectacle & Sunglasses Repairs
              </h2>
              <p className="text-slate-600 mb-6 text-sm">
                Don't replace your favourite frames—let our expert hands restore
                them to absolute perfection while you wait.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Repairs to all makes, brands, and designer sunglasses frames.",
                  "Transfer of lenses safely onto a new spectacle frame.",
                  "Precision realignment of bent or misaligned spectacle frames.",
                  "Drill-out of broken frame screws from barrels & replacement.",
                  "Expert cutting, fitting, and tinting of plastic lenses.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products & Retail Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 flex flex-col justify-between h-full">
            <div>
              <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl inline-block mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                Quality Products & Accessories
              </h2>
              <p className="text-slate-600 mb-6 text-sm">
                Explore our curated range of optical wear, watch utilities, and
                essential replacement items.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 mb-8">
                {[
                  "Designer Optical Frames & Sunglasses",
                  "Disposable Colour Contact Lenses",
                  "Diving Masks & Specialised Optical Gear",
                  "Premium Watch Straps & Bands (Leather, Metal, Stretch)",
                  "Replacement Watch Batteries & Fittings",
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Need a custom item?
              </p>
              <p className="text-sm font-semibold text-slate-900 mt-1">
                Visit our store for live consultations and fittings.
              </p>
            </div>
          </div>
        </div>

        {/* Watch & Clock Repair Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Watches */}
            <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col justify-between">
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-slate-100">
                  <img
                    src="/images/watch-repairs.jpg"
                    alt="Luxury watch repairs"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Watch className="w-4 h-4 text-cyan-400" />
                    <span>60 Years Master Watchmaker</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  Precision Watch Repairs
                </h2>
                <p className="text-slate-600 mb-6 text-sm">
                  Entrust your timepieces to master craftsmanship. We repair all
                  types of mechanical, automatic, and quartz wristwatches.
                </p>
                <ul className="space-y-3 text-sm text-slate-700">
                  {[
                    "Repairs to all hand watches – automatic (self-winding) and manual.",
                    "Fitment of glass, winders, hands, needles, batteries, and movements.",
                    "Replacement bands (leather, metal, stretch).",
                    "Expertise with elite luxury names like Rolex, Seiko, Citizen, and more.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Grandfather Clocks */}
            <div className="p-8 lg:p-12 flex flex-col justify-between bg-slate-50/50">
              <div>
                <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-slate-100">
                  <img
                    src="/images/clock-grandfather.jpg"
                    alt="Grandfather clock service"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Wrench className="w-4 h-4 text-cyan-400" />
                    <span>Specialised Restoration</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  Grandfather Clocks & Heavy Timepieces
                </h2>
                <p className="text-slate-600 mb-6 text-sm">
                  Complete overhauls and maintenance for heirloom grandfather
                  clocks, carried out with meticulous structural testing.
                </p>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <p className="text-sm font-semibold text-slate-900">
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
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl text-white p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-3 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Ready for 1-Hour Turnaround Service?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Visit KwaZulu-Natal's trusted optical and watch repair experts
              today. Walk in with a broken piece, walk out with perfection.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition duration-200 shadow-lg text-sm"
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
