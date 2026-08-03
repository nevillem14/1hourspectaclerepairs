// File: app/routes/about.tsx

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { SITE_CONFIG } from "~/lib/constants";

export function meta() {
  const siteUrl = "https://1hourspectaclerepairs.co.za";
  const ogImageUrl = `${siteUrl}/images/1hourspectaclerepairs-og-facebook-1200x630.jpg`;

  return [
    {
      title:
        "About Us — 1 Hour Spectacle & Watch Repairs | KwaZulu-Natal Specialists",
    },
    {
      name: "description",
      content:
        "Learn about KwaZulu-Natal's only 1-hour spectacle and watch repair specialists. With 19 years of dedicated experience, we provide fast, high-quality, and affordable repairs.",
    },
    {
      name: "keywords",
      content:
        "About 1 Hour Spectacle & Watch Repairs, spectacle repair history, watch repair KwaZulu-Natal, optical experts Chatsworth Durban, 19 years experience",
    },
    { name: "author", content: "1 Hour Spectacle & Watch Repairs" },

    // OpenGraph (Facebook, LinkedIn, WhatsApp)
    {
      property: "og:title",
      content:
        "About Us — 1 Hour Spectacle & Watch Repairs | KwaZulu-Natal Specialists",
    },
    {
      property: "og:description",
      content:
        "With 19 years of experience, we are KwaZulu-Natal's exclusive 1-hour spectacle and watch repair experts. Discover our story and commitment to excellence.",
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
        "About Us — 1 Hour Spectacle & Watch Repairs | KwaZulu-Natal Specialists",
    },
    {
      name: "twitter:description",
      content:
        "With 19 years of experience, we are KwaZulu-Natal's exclusive 1-hour spectacle and watch repair experts.",
    },
    { name: "twitter:image", content: ogImageUrl },
  ];
}

export default function About() {
  return (
    <div className="bg-slate-50 text-slate-900 selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      <div className="flex flex-col items-center justify-center text-center mx-auto px-4 md:px-8 py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border border-cyan-500/20">
          <Clock className="w-4 h-4" />
          <span>19 Years of Excellence</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-slate-300 font-bold tracking-tight mb-4">
          About Us
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
          KwaZulu-Natal's exclusive 1-hour specialist destination for precision
          spectacle, sunglasses, and watch restorations.
        </p>
        <img
          src="/images/1_hour_spectacle_and_watch_repair_about.png"
          alt="Spectacle and Watch Repair Workshop"
          className="mx-auto h-full scale-105 mt-10 "
        />
      </div>

      {/* Page Hero with Background Image & Dark Overlay */}
      <section className="mx-auto text-white overflow-hidden">
        {/* Hero Background Image */}
      </section>

      {/* Main Content Container */}
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16"
      >
        {/* Story Section with Visuals */}
        <div className="bg-white shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Image Showcase Column */}
            <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="rounded-xl shadow-md">
                <img
                  src="/images/cover_gb.jpg"
                  alt="Specialist Repair Tools and Workspace"
                  className="h-full "
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-items-start space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
                  Crafting Perfection in KZN for 19 Years
                </h2>
                <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    My business has been operating for the past{" "}
                    <strong className="text-slate-900">19 years</strong> and
                    it’s growing day by day, driven by customer trust and
                    meticulous precision work.
                  </p>
                  <p>
                    My extensive experience in optics brought me a long way.
                    That’s why I decided to establish my own specialized
                    workshop in KwaZulu-Natal. I am proud to operate as the
                    exclusive{" "}
                    <strong className="text-cyan-600">
                      “1 Hour Spectacle and Watch Repairs”
                    </strong>{" "}
                    facility in KwaZulu-Natal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Commitment Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <h3 className="font-bold text-slate-900 text-base">
            What I do to keep my clients happy:
          </h3>
          <ul className="space-y-3 text-sm text-slate-700">
            {[
              "Provide the best service that will always be remembered.",
              "Deliver uncompromising craftsmanship and top quality.",
              "Maintain the best, most competitive pricing for our community.",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 space-y-3">
            <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl">
              <Clock className="mx-auto w-16 h-16" />
              <h4 className="mx-auto mt-2 text-center text-lg font-bold text-slate-900">
                1-Hour Turnaround
              </h4>
            </div>

            <p className="text-sm text-slate-600">
              Walk in with your broken spectacles or watch, and walk out with
              absolute perfection while you wait.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 space-y-3">
            <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl items-center">
              <ShieldCheck className="mx-auto w-16 h-16" />
              <h4 className="mx-auto mt-2 text-center text-lg font-bold text-slate-900">
                Guaranteed Quality
              </h4>
            </div>

            <p className="text-sm text-slate-600">
              All brands, designer frames, precision wristwatches, and grand
              grandfather clocks serviced with expert care.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 space-y-3">
            <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl items-center">
              <MapPin className="mx-auto w-16 h-16" />
              <h4 className="mx-auto mt-2 text-center text-lg font-bold text-slate-900">
                Convenient Location
              </h4>
            </div>

            <p className="text-sm text-slate-600">
              Visit our store conveniently situated at Shop 102/3 Fragrance
              Street Market, Croftdene, Chatsworth, Durban.
            </p>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl text-white p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div className="space-y-2 sm:space-y-3">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              Ready to restore your favorite items?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto md:mx-0">
              Stop by our shop today or get in touch for quick live consultation
              and professional assistance.
            </p>
          </div>
          <div className="w-full md:w-auto shrink-0">
            <a
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition duration-200 shadow-lg text-sm"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Get in Touch
            </a>
          </div>
        </div>
      </motion.main>
    </div>
  );
}
