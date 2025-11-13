// File: app/routes/Packages.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

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
    name: "Tier 1",
    priceMonthly: "R250",
    priceYearly: "R200",
    features: [
      "1–4 pages",
      "Mobile-friendly",
      "Basic SEO",
      "Email support",
      "1 Email account",
    ],
    image: "/images/pearl-stone.webp",
  },
  {
    name: "Tier 2",
    priceMonthly: "R550",
    priceYearly: "R500",
    features: [
      "Up to 10 pages",
      "Mobile-friendly",
      "Standard SEO",
      "Email support",
      "1 Email account",
    ],
    highlight: true,
    image: "/images/sapphire-stone.webp",
  },
  {
    name: "Tier 3",
    priceMonthly: "R950",
    priceYearly: "R800",
    features: [
      "Over 10 pages",
      "Mobile-friendly",
      "Advanced SEO",
      "Email support",
      "1 Email account",
    ],
    image: "/images/ruby-stone.webp",
  },
  {
    name: "Custom",
    priceMonthly: "Contact Sales",
    priceYearly: "Contact Sales",
    priceContact: true,
    features: [
      "Unlimited pages",
      "Mobile-friendly",
      "Full SEO package",
      "Email Support",
      "And more...",
    ],
    image: "/images/diamond-stone.webp",
  },
];

type EmailFeatureType = {
  title: string;
  description: string;
};

const emailFeatures: EmailFeatureType[] = [
  {
    title: "Why Professional Email Matters",
    description:
      "A professional email address, like yourname@yourbusiness.com, instantly elevates your company’s image. Unlike free email services (e.g., Gmail or Yahoo), a custom email shows customers you’re serious about your business. It builds trust, reinforces your brand, and makes every email you send feel polished and reliable—perfect for impressing clients and growing your reputation!",
  },
  {
    title: "3GB Mailbox",
    description:
      "Enjoy a spacious 3GB mailbox for each email account—plenty of room to store thousands of emails, attachments, and important client messages without worrying about running out of space. Keep your communications organized and accessible, so you can focus on running your business!",
  },
  {
    title: "Access Email from Anywhere",
    description:
      "Check and send emails wherever you are—whether on your phone at a coffee shop, your laptop at home, or a tablet on the go. Our email works seamlessly on any device with an internet connection, giving you the freedom to stay connected with clients anytime, anywhere.",
  },
  {
    title: "Sync Email Across All Your Devices",
    description:
      "Your emails, contacts, and calendar stay perfectly in sync across your phone, tablet, and computer. Update a meeting on your laptop, and it’s instantly on your phone—no extra steps needed. Stay organized and responsive, making it easy to manage your business on the move!",
  },
  {
    title: "Anti-Virus",
    description:
      "Keep your email safe with built-in anti-virus protection. Our system automatically scans for viruses in attachments and links, protecting your business from harmful threats. Focus on your work with peace of mind, knowing your emails are secure.",
  },
  {
    title: "Anti-Spam",
    description:
      "Say goodbye to annoying junk emails! Our anti-spam filters block unwanted messages, so your inbox stays clean and focused on what matters—client emails and important updates. Save time and avoid distractions with a clutter-free email experience.",
  },
];

export default function Packages() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openEmailIndex, setOpenEmailIndex] = useState<number | null>(null);
  const emailMonthly = 25;
  const emailMonthlyString = "R" + emailMonthly.toString();
  const emailAnnual = emailMonthly * 12;
  const emailAnnualString = "R" + emailAnnual.toString();

  const toggleEmailFeature = (index: number) => {
    setOpenEmailIndex(openEmailIndex === index ? null : index);
  };

  return (
    <main className="pt-16 pb-24 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Web Design Packages
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Pick a plan that aligns with your needs. Upgrade anytime.
        </p>

        {/* Billing Toggle */}
        <div className="bg-gray-200 rounded-lg mt-8 flex items-center justify-center space-x-4 mx-auto md:w-fit p-2">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 w-40 rounded-lg font-medium ${
              billing === "monthly"
                ? "bg-white text-black"
                : "bg-gray-200 text-black"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-2 w-40 rounded-lg font-medium ${
              billing === "yearly"
                ? "bg-white text-black"
                : "bg-gray-200 text-black"
            }`}
          >
            Yearly
          </button>
        </div>
        <span className="text-sm rounded-sm ml-2 px-2 py-1">
          Save up to 15% with Yearly
        </span>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.name}
            whileHover={{ translateY: -4 }}
            className={`relative rounded-2xl border ${
              pkg.highlight
                ? "border-black border-2 shadow-lg"
                : "border-gray-200 shadow"
            } bg-white flex flex-col overflow-hidden`}
          >
            <div className="bg-gray-100 p-6 flex-grow flex flex-col items-center text-center space-y-4">
              {/*<img
                src={pkg.image}
                alt={pkg.name + " gemstone"}
                className="h-12 object-contain"
              />*/}
              <h2 className="text-2xl font-semibold text-gray-900">
                {pkg.name}
              </h2>
              <p className="text-3xl font-bold text-gray-900">
                {pkg.priceContact ? (
                  "Contact Sales"
                ) : billing === "monthly" ? (
                  <span>
                    {pkg.priceMonthly}
                    <span className="block text-sm">per month</span>
                  </span>
                ) : (
                  <span>
                    {pkg.priceYearly}
                    <span className="block text-sm">per month</span>
                    <span className="block text-sm">billed annually</span>
                  </span>
                )}
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center">
                    <span className="mr-2">
                      <Check className="w-5 h-5" />
                    </span>
                    {f}
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

      {/*<div className="bg-blue-100/50 max-w-5xl mx-auto  my-16 px-4 py-16 rounded-lg">
      <div className="max-w-5xl mx-auto my-16 px-4 py-16 rounded-lg bg-gradient-to-r from-blue-100 via-gray-100/50 to-green-100/80 animate-gradient">*/}
      <div className="max-w-5xl mx-auto my-16 px-4 py-16 rounded-lg bg-gradient-to-r animate-aws-gradient-aws-variantA">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Email Package
        </h1>
        <img
          src="/images/wsdxi-email-1.webp"
          alt="email icon"
          className="h-16 md:h-32 mx-auto mb-4 opacity-60"
        />
        <p className="text-2xl font-bold text-center text-gray-900 mt-10">
          Get Additional Email Accounts
        </p>
        <p className="text-2xl font-bold text-center text-gray-900 mt-5">
          {emailMonthlyString} per month each, paid annually at{" "}
          {emailAnnualString}
        </p>
        <div className="max-w-2xl mx-auto mt-8">
          {emailFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ translateY: -4 }}
              className="border border-gray-200 rounded-lg mb-4 bg-white shadow"
              initial={false}
            >
              <button
                onClick={() => toggleEmailFeature(index)}
                className="w-full flex justify-between items-center p-6 text-left text-gray-900"
                aria-expanded={openEmailIndex === index}
                aria-controls={`email-feature-${index}`}
              >
                <span className="text-lg font-semibold">{feature.title}</span>
                <span>
                  {openEmailIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </span>
              </button>
              {openEmailIndex === index && (
                <div
                  id={`email-feature-${index}`}
                  className="p-6 pt-0 text-gray-600"
                >
                  <p>{feature.description}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            * Email accounts can only be paid annually.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-gray-800 text-white hover:bg-gray-900 py-2 px-6 rounded-lg font-medium transition">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
