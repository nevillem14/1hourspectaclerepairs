// File: app/routes/know-your-glasses.tsx

import { motion } from "framer-motion";
import { Eye, ShieldCheck, Wrench, Sparkles, PhoneCall } from "lucide-react";

export function meta() {
  const siteUrl = "https://1hourspectaclerepairs.co.za";
  const ogImageUrl = `${siteUrl}/images/1hourspectaclerepairs-og-facebook-1200x630.jpg`;

  return [
    {
      title:
        "Know Your Glasses — Guide to Frame Care & Maintenance | 1 Hour Spectacle Repairs",
    },
    {
      name: "description",
      content:
        "Learn how to care for your eyeglasses, choose the right frames for your face shape, and maintain your lenses properly with expert tips from KwaZulu-Natal's specialists.",
    },
    {
      name: "keywords",
      content:
        "Know Your Glasses, frame care, spectacle maintenance, lens care, face shapes, eyeglasses guide, 1 Hour Spectacle Repairs Durban",
    },
    { name: "author", content: "1 Hour Spectacle & Watch Repairs" },

    // OpenGraph (Facebook, LinkedIn, WhatsApp)
    {
      property: "og:title",
      content:
        "Know Your Glasses — Guide to Frame Care & Maintenance | 1 Hour Spectacle Repairs",
    },
    {
      property: "og:description",
      content:
        "Discover essential tips on keeping your spectacles in pristine condition, choosing proper frames, and extending the lifespan of your eyewear.",
    },
    { property: "og:url", content: `${siteUrl}/know-your-glasses` },
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
      content: "Know Your Glasses — Guide to Frame Care & Maintenance",
    },
    {
      name: "twitter:description",
      content:
        "Discover essential tips on keeping your spectacles in pristine condition and extending eyewear lifespan.",
    },
    { name: "twitter:image", content: ogImageUrl },
  ];
}

export default function KnowYourGlasses() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white overflow-x-hidden pt-20">
      {/* Page Hero Banner */}
      <div className="flex flex-col items-center justify-center text-center mx-auto px-4 md:px-8 py-12 md:py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white border-b border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border border-cyan-500/20">
            <Eye className="w-4 h-4" />
            <span>Eyewear Care Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-100 font-bold tracking-tight mb-4">
            Know Your Glasses
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Your comprehensive guide to understanding frame materials, proper
            daily maintenance, and getting the most out of your eyewear.
          </p>
        </motion.div>
      </div>

      {/* Main Content Container */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16"
      >
        {/* Intro Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Protecting Your Vision & Investment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Glasses are more than just a medical necessity or a fashion
              statement—they are precision optical instruments. Understanding
              how your frames are constructed and how to care for them properly
              ensures crystal-clear vision and long-lasting durability.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 space-y-4">
            <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl inline-block">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Frame Materials
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you wear lightweight titanium, durable acetate, or
              flexible memory metal, each material requires specific handling to
              prevent warping and stress fractures.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 space-y-4">
            <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl inline-block">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Proper Cleaning
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Avoid scratching anti-reflective coatings by using microfiber
              cloths and approved lens solutions instead of paper towels,
              clothing, or household glass cleaners.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 space-y-4">
            <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl inline-block">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Professional Tune-Ups
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Loose screws, bent hinges, and stretched nose pads happen over
              time. Bring them into our Durban workshop for a professional
              alignment in under an hour.
            </p>
          </div>
        </div>

        {/* Tips Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 md:p-12 space-y-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
            Top 5 Rules for Eyewear Longevity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-slate-950 font-bold shrink-0 text-sm">
                1
              </span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Use Both Hands
                </h4>
                <p className="text-sm text-slate-600">
                  Always put on and take off your glasses using both hands to
                  prevent stretching one side of the frame.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-slate-950 font-bold shrink-0 text-sm">
                2
              </span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Store in a Hard Case
                </h4>
                <p className="text-sm text-slate-600">
                  Never drop your glasses loosely into bags or pockets where
                  keys or coins can scratch lenses or bend frames.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-slate-950 font-bold shrink-0 text-sm">
                3
              </span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Avoid Extreme Heat
                </h4>
                <p className="text-sm text-slate-600">
                  Keep glasses away from car dashboards in the summer heat, as
                  high temperatures can warp plastic frames and ruin coatings.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-slate-950 font-bold shrink-0 text-sm">
                4
              </span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Never Rest Lenses Face Down
                </h4>
                <p className="text-sm text-slate-600">
                  Always place your spectacles resting on their temples or
                  folded inside a case to protect the optical surface.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl text-white p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Need a quick adjustment or repair?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto md:mx-0">
              Visit our KwaZulu-Natal workshop today for fast, professional
              service while you wait.
            </p>
          </div>
          <div className="w-full md:w-auto shrink-0">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition duration-200 shadow-lg text-sm"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
