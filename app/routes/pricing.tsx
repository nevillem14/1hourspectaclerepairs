// File: app/routes/WebDesignPackages.tsx
import React from "react";

const packages = [
  {
    name: "X Package",
    price: "R599 / mo",
    features: [
      "1-3 Page Website",
      "Mobile Responsive",
      "Basic SEO",
      "1 Email Account",
    ],
    color: "text-blue-600",
    symbol: "✖",
  },
  {
    name: "Square Package",
    price: "R799 / mo",
    features: [
      "Up to 5 Pages",
      "Mobile Responsive",
      "SEO Optimized",
      "3 Email Accounts",
      "Monthly Backup",
    ],
    color: "text-pink-600",
    symbol: "■",
  },
  {
    name: "Triangle Package",
    price: "R999 / mo",
    features: [
      "Up to 10 Pages",
      "Advanced SEO",
      "Blog Setup",
      "5 Email Accounts",
      "Weekly Backup",
    ],
    color: "text-green-600",
    symbol: "▲",
  },
  {
    name: "Circle Package",
    price: "Contact Sales",
    features: [
      "Unlimited Pages",
      "E-Commerce Store",
      "Custom Features",
      "Unlimited Email Accounts",
      "Daily Backup & Priority Support",
    ],
    color: "text-purple-600",
    symbol: "●",
  },
];

export default function WebDesignPackages() {
  return (
    <main className="pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">
          Web Design Packages
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className={`text-4xl font-bold mb-4 ${pkg.color}`}>
                {pkg.symbol}
              </div>
              <h2 className="text-xl font-semibold mb-2">{pkg.name}</h2>
              <p className="text-lg font-bold mb-4">{pkg.price}</p>
              <ul className="text-gray-600 space-y-2 mb-6">
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
