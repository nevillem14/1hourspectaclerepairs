// File: app/routes/know-your-glasses.tsx

import { motion } from "framer-motion";
import { Eye, PhoneCall, HelpCircle, ArrowUp } from "lucide-react";

export function meta() {
  const siteUrl = "https://1hourspectaclerepairs.co.za";
  const ogImageUrl = `${siteUrl}/images/1hourspectaclerepairs-og-facebook-1200x630.jpg`;

  return [
    {
      title:
        "Know Your Glasses — Frame Types, Parts & Repair Guide | 1 Hour Spectacle Repairs",
    },
    {
      name: "description",
      content:
        "Learn how to identify frame types (Plastic, Metal, Semi-Rimless, Three-Piece Rimless) and specific parts like hinges, nose pads, and temples to easily describe faults for rapid repairs in Durban.",
    },
    {
      name: "keywords",
      content:
        "Know Your Glasses, frame types, spectacle parts, hinges, nose pads, plastic frame, metal frames, semi-rimless, rimless, polarized lenses, spectacle repairs Durban",
    },
    { name: "author", content: "1 Hour Spectacle & Watch Repairs" },

    // OpenGraph (Facebook, LinkedIn, WhatsApp)
    {
      property: "og:title",
      content:
        "Know Your Glasses — Frame Types, Parts & Repair Guide | 1 Hour Spectacle Repairs",
    },
    {
      property: "og:description",
      content:
        "Understand your eyewear parts and frame types so you can accurately describe faults when bringing your glasses in for express repairs.",
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
      content: "Know Your Glasses — Frame Types, Parts & Repair Guide",
    },
    {
      name: "twitter:description",
      content:
        "Understand your eyewear parts and frame types so you can accurately describe faults when bringing your glasses in for express repairs.",
    },
    { name: "twitter:image", content: ogImageUrl },
  ];
}

export default function KnowYourGlasses() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {/* Page Hero Banner */}
      <div className="flex flex-col items-center justify-center text-center mx-auto px-4 md:px-8 py-18 md:py-28 bg-gradient-to-r from-slate-900 to-slate-800 text-white border-b border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border border-cyan-500/20">
            <Eye className="w-4 h-4" />
            <span>Eyewear Anatomy & Guide</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-100 font-bold tracking-tight mb-4">
            Know Your Glasses
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Understand your frame styles and key components so you can easily
            identify and describe any damage or faults to our workshop
            technicians.
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
        {/* Quick Jump Navigation */}
        <div
          id="frame-categories"
          className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 scroll-mt-28"
        >
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 text-center">
            Jump to Frame Category
          </h3>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <a
              href="#plastic-frames"
              className="px-4 py-2 bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-700 rounded-xl text-xs sm:text-sm font-medium transition"
            >
              Plastic (Zyl)
            </a>

            <a
              href="#metal-frames"
              className="px-4 py-2 bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-700 rounded-xl text-xs sm:text-sm font-medium transition"
            >
              Metal Frames
            </a>

            <a
              href="#semi-rimless"
              className="px-4 py-2 bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-700 rounded-xl text-xs sm:text-sm font-medium transition"
            >
              Semi-Rimless
            </a>

            <a
              href="#three-piece-rimless"
              className="px-4 py-2 bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-700 rounded-xl text-xs sm:text-sm font-medium transition"
            >
              Three-Piece Rimless
            </a>

            <a
              href="#polarised-lenses"
              className="px-4 py-2 bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-700 rounded-xl text-xs sm:text-sm font-medium transition"
            >
              Polarised Lenses
            </a>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Section 1: Plastic Frame (Zyl) */}
        {/* ========================================================= */}

        <div
          id="plastic-frames"
          className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden scroll-mt-28"
        >
          <div className="p-6 sm:p-8 md:p-12 space-y-8">
            {/* Heading */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <span>Category 01</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Plastic Frames (Zyl)
              </h2>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-xl overflow-hidden shadow-md bg-white p-2">
                <img
                  src="/images/plastic3.jpg"
                  alt="Plastic Frames breakdown and parts"
                  className=""
                />
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-md bg-white p-2">
                <img
                  src="/images/plastic4.jpg"
                  alt="Plastic Frames breakdown and parts"
                  className=""
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
              Classic acetate and plastic frames offer versatile styling. Key
              fault areas include bridge stress fractures, hinge looseness, and
              temple arm warping.
            </p>

            {/* Common Faults */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-cyan-600">
                Common Faults to Describe:
              </h4>

              <p className="text-xs sm:text-sm text-slate-600">
                Hinge pulls loose from plastic, snapped bridge across the nose,
                or warped temple arms causing uneven fitting behind the ears.
              </p>
            </div>

            {/* Back to Frame Types */}
            <div className="flex justify-end pt-2">
              <a
                href="#frame-categories"
                aria-label="Back to frame types"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 text-xs sm:text-sm font-medium transition"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Frame Types
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Section 2: Metal Frames */}
        {/* ========================================================= */}

        <div
          id="metal-frames"
          className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden scroll-mt-28"
        >
          <div className="p-6 sm:p-8 md:p-12 space-y-8">
            {/* Heading */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <span>Category 02</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Metal Frames
              </h2>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-xl overflow-hidden shadow-md bg-white p-2">
                <img
                  src="/images/metal-frame.jpg"
                  alt="Metal Frames breakdown and parts"
                  className=""
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
              Sturdy metal frames feature adjustable nose pads, brow bars, and
              delicate hinge assemblies (single or double barrel designs).
            </p>

            {/* Common Faults */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-cyan-600">
                Common Faults to Describe:
              </h4>

              <p className="text-xs sm:text-sm text-slate-600">
                Broken solder joints at the bridge or eye wire, snapped nose pad
                arms, stripped screw threads, or bent temple tips.
              </p>
            </div>

            {/* Back to Frame Types */}
            <div className="flex justify-end pt-2">
              <a
                href="#frame-categories"
                aria-label="Back to frame types"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 text-xs sm:text-sm font-medium transition"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Frame Types
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Section 3: Semi-Rimless */}
        {/* ========================================================= */}

        <div
          id="semi-rimless"
          className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden scroll-mt-28"
        >
          <div className="p-6 sm:p-8 md:p-12 space-y-8">
            {/* Heading */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <span>Category 03</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Semi-Rimless
              </h2>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative rounded-xl overflow-hidden shadow-md bg-white p-2">
                <img
                  src="/images/plastic3.jpg"
                  alt="Semi-Rimless Frames breakdown and parts"
                  className=""
                />
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-md bg-white p-2">
                <img
                  src="/images/plastic4.jpg"
                  alt="Semi-Rimless Frames breakdown and parts"
                  className=""
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
              Frames where the upper structure holds the lens with a nylon cord
              (supra wire) running along the lower edge groove of the lens.
            </p>

            {/* Common Faults */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-cyan-600">
                Common Faults:
              </h4>

              <p className="text-xs sm:text-sm text-slate-600">
                Nylon cord snapping, lens slipping out of the bottom groove, or
                chipping around the cord slot.
              </p>
            </div>

            {/* Back to Frame Types */}
            <div className="flex justify-end pt-2">
              <a
                href="#frame-categories"
                aria-label="Back to frame types"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 text-xs sm:text-sm font-medium transition"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Frame Types
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Section 4: Three-Piece Rimless */}
        {/* ========================================================= */}

        <div
          id="three-piece-rimless"
          className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden scroll-mt-28"
        >
          <div className="p-6 sm:p-8 md:p-12 space-y-8">
            {/* Heading */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <span>Category 04</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Three-Piece Rimless
              </h2>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 gap-6">
              <div className="relative rounded-xl overflow-hidden shadow-md bg-white p-2">
                <img
                  src="/images/three-piece-rimless-frame-1024x157.jpg"
                  alt="Three piece rimless frame breakdown and parts"
                  className=""
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
              Minimalist frames consisting of a central bridge and two temples
              mounted directly to the lenses via screws, bushings, or plugs.
            </p>

            {/* Common Faults */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-cyan-600">
                Common Faults:
              </h4>

              <p className="text-xs sm:text-sm text-slate-600">
                Loose mount screws, cracked lens holes around mounting points,
                or wobbling temple attachments.
              </p>
            </div>

            {/* Back to Frame Types */}
            <div className="flex justify-end pt-2">
              <a
                href="#frame-categories"
                aria-label="Back to frame types"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 text-xs sm:text-sm font-medium transition"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Frame Types
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Section 5: Polarised Lenses */}
        {/* ========================================================= */}

        <div
          id="polarised-lenses"
          className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden scroll-mt-28"
        >
          <div className="p-6 sm:p-8 md:p-12 space-y-8">
            {/* Heading */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <span>Specialty Optics</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Polarised Lenses
              </h2>
            </div>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden shadow-md bg-white p-2">
              <img
                src="/images/polarised-lens-1024x208.jpg"
                alt="Polarised lens"
                className=""
              />
            </div>

            {/* Description */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
              Designed to eliminate harsh glare from water, snow, and roads.
              Essential for driving, fishing, and outdoor sports in
              KwaZulu-Natal's bright climate.
            </p>

            {/* Common Faults */}
            <div className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-100">
              <h4 className="font-bold text-xs uppercase tracking-wider text-cyan-600 mb-2">
                Lens Damage to Watch For:
              </h4>

              <p className="text-xs sm:text-sm text-slate-600">
                Surface scratch peeling, delamination of the polarization filter
                layer, or deep abrasions affecting clarity.
              </p>
            </div>

            {/* Back to Frame Types */}
            <div className="flex justify-end pt-2">
              <a
                href="#frame-categories"
                aria-label="Back to frame types"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 text-xs sm:text-sm font-medium transition"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Frame Types
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Breakdown of Key Spectacle Parts */}
        {/* ========================================================= */}

        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-cyan-500/20">
              <HelpCircle className="w-4 h-4" />
              <span>Fault Reporting Guide</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              How to Describe Your Fault to Us
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm">
              Use these exact terms when contacting our workshop to help us
              diagnose and quote your repair instantly:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-sm">
                Hinges & Temples
              </span>

              <p className="text-xs text-slate-300">
                "The arm snapped off at the hinge barrel" or "The screw fell out
                of the side."
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-sm">
                Bridge & Solder
              </span>

              <p className="text-xs text-slate-300">
                "The metal bridge across my nose snapped in half" or "The solder
                joint broke."
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-sm">Nose Pads</span>

              <p className="text-xs text-slate-300">
                "The plastic nose pad broke off" or "The metal arm holding the
                pad is bent."
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-sm">
                Rimless / Supra
              </span>

              <p className="text-xs text-slate-300">
                "The nylon string broke at the bottom of the lens" or "The
                mounting screw came loose."
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Call to Action Banner */}
        {/* ========================================================= */}

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl text-white p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Ready to fix your glasses?
            </h3>

            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto md:mx-0">
              Visit our shop today for fast, professional repairs completed in
              around an hour.
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
