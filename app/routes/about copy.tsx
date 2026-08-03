// File: app/routes/about.tsx

import { motion } from "framer-motion";
import { Check, Linkedin, Mail } from "lucide-react";
import RotatingBlock from "~/components/RotatingBlock";
import { SITE_CONFIG } from "~/lib/constants";

export function meta() {
  const siteUrl = "https://1hourspectaclerepairs.co.za";
  const ogImageUrl = `${siteUrl}/images/1hourspectaclerepairs-og-facebook-1200x630.jpg`;

  return [
    {
      title:
        "1 Hour Spectacle & Watch Repairs — Launch Your Professional Website",
    },
    {
      name: "description",
      content:
        "1 Hour Spectacle & Watch Repairs - we repairs all makes of sunglasses and spectacles! Contact us for fast, affordable repairs. Visit our website to learn more and book your appointment today!",
    },
    {
      name: "keywords",
      content:
        "1 Hour Spectacle & Watch Repairs, spectacle repair, watch repair, sunglasses repair, affordable repairs, fast service, professional repairs, contact us, book appointment",
    },
    { name: "author", content: "1 Hour Spectacle & Watch Repairs" },

    // OpenGraph (Facebook, LinkedIn, WhatsApp)
    {
      property: "og:title",
      content:
        "1 Hour Spectacle & Watch Repairs — Professional Spectacle & Watch Repair Services",
    },
    {
      property: "og:description",
      content:
        "1 Hour Spectacle & Watch Repairs - we repairs all makes of sunglasses and spectacles! Contact us for fast, affordable repairs. Visit our website to learn more and book your appointment today!",
    },
    { property: "og:url", content: siteUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: ogImageUrl },
    { property: "og:image:secure_url", content: ogImageUrl }, // Important for WhatsApp/SSL
    { property: "og:image:type", content: "image/jpeg" }, // Helps crawler identify the file
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "1 Hour Spectacle & Watch Repairs" }, // Shown above the title in WhatsApp

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content:
        "1 Hour Spectacle & Watch Repairs — Professional Spectacle & Watch Repair Services",
    },
    {
      name: "twitter:description",
      content:
        "1 Hour Spectacle & Watch Repairs - we repairs all makes of sunglasses and spectacles! Contact us for fast, affordable repairs. Visit our website to learn more and book your appointment today!",
    },
    { name: "twitter:image", content: ogImageUrl },
  ];
}

const About = () => {
  return (
    <main className="pt-26 md:pt-16 pb-24 bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-12 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900"
        >
          About Us
        </motion.h1>
        <div className="w-full mb-8 overflow-hidden shadow-2xl">
          <img
            src="/images/1_hour_spectacle_and_watch_repair_fb_820_461.jpg"
            alt="Spectacle and Watch Repair Workshop"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex gap-4">
          <div>
            <img
              src="/images/cover_gb.jpg"
              alt="Spectacle and Watch Repair Workshop"
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl ">
              My business is operating for the past 19 years and it’s growing
              day by day.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl ">
              My experience in optics has brought me a long way. That’s why I
              have decided to open my own business in KwaZulu Natal and I am
              proud to be the only “1 Hour Spectacle and Watch Repairs” in
              KwaZulu Natal.
            </p>
            <br></br>
            <p className="text-xl text-left  leading-relaxed max-w-3xl ">
              This is what I do to be the best to make my people happy:
            </p>
            <ul className="text-xl list-disc list-inside mt-4 text-gray-700 text-left max-w-2xl">
              <li>Provide the best service that will be always remembered.</li>
              <li> The best quality.</li>
              <li>The best price.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default About;
