// File: app/routes/about.tsx

import { motion } from "framer-motion";
import { Check, Linkedin, Mail } from "lucide-react";
import RotatingBlock from "~/components/RotatingBlock";
import { SITE_CONFIG } from "~/lib/constants";

export function meta() {
  return [
    { title: "About Us — Winter Shadow Designs XI" },
    {
      name: "description",
      content:
        "Meet the team behind Winter Shadow Designs XI — passionate web designers committed to making website creation simple, affordable and effective for South African businesses.",
    },
    {
      name: "keywords",
      content:
        "Winter Shadow Designs XI team, about Winter Shadow Designs XI, web agency South Africa, small business website support, web design studio ZA",
    },
    { name: "author", content: "Winter Shadow Designs XI" },

    { property: "og:title", content: "About — Winter Shadow Designs Xi" },
    {
      property: "og:description",
      content:
        "Learn how Winter Shadow Designs XI empowers small businesses to establish a professional online presence with custom websites and full-service support.",
    },
    { property: "og:url", content: "https://wsdxi.co.za/about" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://wsdxi.co.za/og-image.jpg" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "About — Winter Shadow Designs XI" },
    {
      name: "twitter:description",
      content:
        "Get to know the founders of Winter Shadow Designs XI and how we make building websites easy for South African businesses.",
    },
    { name: "twitter:image", content: "https://wsdxi.co.za/og-image.jpg" },
  ];
}

const team = [
  {
    name: "Vuyisile K",
    role: "Founder & Client Success Manager",
    bio: "Vuyisile makes sure every client feels heard and happy. He’s your go-to person from first chat to launch day and beyond.",
    linkedin: "https://linkedin.com/in/vuisile-khumalo",
    email: "vuyisile@wsdxi.co.za",
    image: "/images/team/vuyisile.jpg",
  },
  {
    name: "Neville M",
    role: "Founder & Lead Designer",
    bio: "With years of turning ideas into stunning, high-converting websites, we started Winter Shadow Designs XI to make professional web presence accessible to every South African business.",
    linkedin: "https://linkedin.com/in/neville-moodley",
    email: "neville@wsdxi.co.za",
    image: "/images/team/neville.jpg", // replace with real photo
  },
];

const About = () => {
  return (
    <main className="pt-16 pb-24 bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center mb-12 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900"
        >
          About {`${SITE_CONFIG.name}`}
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600">
          We make getting your business online simple and stress-free.
        </p>
      </motion.div>

      {/* Company Overview */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At {`${SITE_CONFIG.name}`}, we're passionate about empowering small
            businesses and entrepreneurs in South Africa to establish a strong
            online presence. Founded with the belief that every business
            deserves a professional website without the hassle, we specialize in
            custom web design solutions that are affordable, fast, and tailored
            to your needs.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Meet the Team
        </h2>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            {team.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ translateY: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex flex-col w-full max-w-md"
              >
                {/* BIG Initials Avatar */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center h-64">
                  <span className="text-white font-bold tracking-wider leading-none text-8xl md:text-9xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 3)}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mt-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mt-5 leading-relaxed">
                    {member.bio}
                  </p>

                  {/*
                  <div className="flex justify-center gap-5 mt-8">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600 transition"
                    >
                      <Linkedin className="w-7 h-7" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-500 hover:text-blue-600 transition"
                    >
                      <Mail className="w-7 h-7" />
                    </a>
                  </div>
                  */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 animate-aws-gradient-aws-variantA rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Our Mission
        </h2>
        <p className="text-xl text-center text-gray-700 leading-relaxed max-w-2xl mx-auto">
          To make website creation simple by handling the entire process after
          you share your vision. A website is your business’s digital storefront
          — professional, reliable, and always working for you.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          {[
            "Full ownership and control",
            "Better visibility on Google",
            "No distractions — 100% focus on your brand",
            "Scalable features (shop, bookings, etc.)",
          ].map((item) => (
            <div key={item} className="flex items-start space-x-3">
              <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-5xl mx-auto my-16 px-4 py-16 rounded-lg animate-aws-gradient-aws-variantA shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Ready to Build Your Online Presence?
        </h2>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Let our team take care of everything. Get in touch today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/pricing">
            <button className="bg-blue-500 text-white hover:bg-blue-600 py-3 px-8 rounded-lg font-medium transition">
              View Packages
            </button>
          </a>
          <a href="/contact">
            <button className="bg-gray-800 text-white hover:bg-gray-900 py-3 px-8 rounded-lg font-medium transition">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
