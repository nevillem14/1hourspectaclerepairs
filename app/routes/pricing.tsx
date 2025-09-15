// File: app/routes/WebDesignPackages.tsx
import React from "react";

const packages = [
  {
    name: "Radium",
    price: "R599 / mo",
    features: [
      "1–3 Page Website",
      "Mobile Responsive",
      "Basic SEO",
      "1 Email Account",
    ],
    color: "from-green-400 to-green-600",
    textColor: "text-green-500",
    symbol: "Ra",
    number: 88,
    glow: false,
  },
  {
    name: "Thorium",
    price: "R799 / mo",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive",
      "SEO Optimized",
      "3 Email Accounts",
      "Monthly Backup",
    ],
    color: "from-blue-400 to-blue-600",
    textColor: "text-blue-500",
    symbol: "Th",
    number: 90,
    glow: false,
  },
  {
    name: "Uranium",
    price: "R999 / mo",
    features: [
      "Up to 10 Pages",
      "Advanced SEO",
      "Blog Setup",
      "5 Email Accounts",
      "Weekly Backup",
    ],
    color: "from-yellow-400 to-yellow-600",
    textColor: "text-yellow-600",
    symbol: "U",
    number: 92,
    glow: true,
  },
  {
    name: "Plutonium",
    price: "Contact Sales",
    features: [
      "Unlimited Pages",
      "E-Commerce Store",
      "Custom Features",
      "Unlimited Email Accounts",
      "Daily Backup & Priority Support",
    ],
    color: "from-purple-400 to-purple-600",
    textColor: "text-purple-600",
    symbol: "Pu",
    number: 94,
    glow: true,
  },
];

export default function WebDesignPackages() {
  return (
    <main className="pt-20 pb-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">
          Web Design Packages
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-white transition`}
            >
              {/* Glowing background */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pkg.color} opacity-20 blur-xl ${
                  pkg.glow ? "animate-pulse-glow" : ""
                }`}
              ></div>

              {/* Periodic table style */}
              <div className="relative w-full h-40 flex flex-col justify-between p-3 border border-gray-700 rounded-xl bg-black/40">
                <span className="text-sm text-gray-300 text-left">
                  {pkg.number}
                </span>
                <span className={`text-5xl font-bold ${pkg.textColor}`}>
                  {pkg.symbol}
                </span>
                <span className="text-sm text-gray-300 text-right">
                  {pkg.price}
                </span>
              </div>

              {/* Package details */}
              <h2 className="text-xl font-semibold mt-4">{pkg.name}</h2>
              <ul className="text-gray-300 text-sm space-y-2 mt-4 mb-6">
                {pkg.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <button className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                {pkg.price === "Contact Sales"
                  ? "Contact Sales"
                  : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
