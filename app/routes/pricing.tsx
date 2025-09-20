// File: app/routes/Packages.tsx
import React from "react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Quartz",
    price: "R599 / mo",
    color: "from-gray-200 to-gray-400",
    text: "text-gray-900",
    features: ["1–3 pages", "Mobile-friendly", "Basic SEO", "Email support"],
  },
  {
    name: "Sapphire",
    price: "R799 / mo",
    color: "from-blue-400 to-blue-700",
    text: "text-white",
    features: [
      "Up to 5 pages",
      "Mobile-friendly",
      "Standard SEO",
      "Priority support",
    ],
    glow: "blue-glow",
  },
  {
    name: "Ruby",
    price: "R999 / mo",
    color: "from-red-400 to-red-700",
    text: "text-white",
    features: [
      "Up to 10 pages",
      "Mobile-friendly",
      "Advanced SEO",
      "WhatsApp support",
    ],
    glow: "red-pulse",
  },
  {
    name: "Diamond",
    price: "Contact Sales",
    color: "from-slate-200 to-slate-50",
    text: "text-gray-900",
    features: [
      "Unlimited pages",
      "Mobile-friendly",
      "Full SEO package",
      "Dedicated account manager",
    ],
    sparkle: true,
  },
];

export default function Packages() {
  return (
    <main className="pt-20 pb-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Web Design Packages
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose a plan that fits your business goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.name}
            whileHover={{ scale: 1.05 }}
            className={`relative rounded-2xl shadow-lg bg-gradient-to-br ${pkg.color} p-6 flex flex-col justify-between overflow-hidden ${
              pkg.glow || ""
            }`}
          >
            {/* Diamond sparkle shimmer */}
            {pkg.sparkle && (
              <div className="absolute inset-0 pointer-events-none shimmer"></div>
            )}

            <div className="relative z-10">
              <h2 className={`text-2xl font-bold ${pkg.text}`}>{pkg.name}</h2>
              <p className={`mt-2 text-xl font-semibold ${pkg.text}`}>
                {pkg.price}
              </p>
              <ul className={`mt-4 space-y-2 ${pkg.text}`}>
                {pkg.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </div>
            <button className="relative z-10 mt-6 w-full py-2 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
