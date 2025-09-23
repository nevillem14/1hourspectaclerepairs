// File: app/routes/Packages.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

type PackageType = {
  name: string;
  priceMonthly: string;
  priceYearly: string;
  priceContact?: boolean;
  features: string[];
  highlight?: boolean;
  image: string;
};

const packages: PackageType[] = [
  {
    name: "Starter",
    priceMonthly: "R599 / mo",
    priceYearly: "R6,590 / yr",
    features: ["1–3 pages", "Mobile-friendly", "Basic SEO", "Email support"],
    image: "/images/pearl-stone.webp",
  },
  {
    name: "Sapphire",
    priceMonthly: "R799 / mo",
    priceYearly: "R8,790 / yr",
    features: [
      "Up to 5 pages",
      "Mobile-friendly",
      "Standard SEO",
      "Priority support",
    ],
    highlight: true,
    image: "/images/sapphire-stone.webp",
  },
  {
    name: "Ruby",
    priceMonthly: "R999 / mo",
    priceYearly: "R10,990 / yr",
    features: [
      "Up to 10 pages",
      "Mobile-friendly",
      "Advanced SEO",
      "WhatsApp support",
    ],
    image: "/images/ruby-stone.webp",
  },
  {
    name: "Diamond",
    priceMonthly: "Contact Sales",
    priceYearly: "Contact Sales",
    priceContact: true,
    features: [
      "Unlimited pages",
      "Mobile-friendly",
      "Full SEO package",
      "Dedicated account manager",
    ],
    image: "/images/diamond-stone.webp",
  },
];

export default function Packages() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="pt-16 pb-24 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Web Design Packages
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Pick a plan that aligns with your needs. Upgrade anytime.
        </p>

        {/* Billing Toggle */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 rounded-lg font-medium ${
              billing === "monthly"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-2 rounded-lg font-medium ${
              billing === "yearly"
                ? "bg-gray-900 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.name}
            whileHover={{ translateY: -4 }}
            className={`relative rounded-2xl border ${
              pkg.highlight
                ? "border-blue-500 shadow-lg"
                : "border-gray-200 shadow"
            } bg-white flex flex-col overflow-hidden`}
          >
            <div className="p-6 flex-grow flex flex-col items-center text-center space-y-4">
              <img
                src={pkg.image}
                alt={pkg.name + " gemstone"}
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-2xl font-semibold text-gray-900">
                {pkg.name}
              </h2>
              <p className="text-3xl font-bold text-gray-900">
                {pkg.priceContact
                  ? "Contact Sales"
                  : billing === "monthly"
                    ? pkg.priceMonthly
                    : pkg.priceYearly}
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center">
                    <span className="mr-2 text-green-500">✔</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border-t border-gray-200">
              <button
                className={`w-full py-2 font-medium rounded-lg ${
                  pkg.highlight
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-800 text-white hover:bg-gray-900"
                } transition`}
              >
                {pkg.priceContact ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
