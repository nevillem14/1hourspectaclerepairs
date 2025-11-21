// File: app/routes/about.tsx

import React from "react";
import { motion } from "framer-motion";
import { Check, Linkedin, Mail } from "lucide-react";
import RotatingBlock from "~/components/RotatingBlock";

const team = [
  {
    name: "Alex Winter",
    role: "Founder & Lead Designer",
    bio: "With over 8 years turning ideas into stunning, high-converting websites, Alex started Winter Shadow Designs to make professional web presence accessible to every South African business.",
    linkedin: "https://linkedin.com/in/alex-winter",
    email: "alex@wsdxi.co.za",
    image: "/images/team/alex.jpg", // replace with real photo
  },
  {
    name: "Sarah Mokoena",
    role: "Client Success Manager",
    bio: "Sarah makes sure every client feels heard and happy. She’s your go-to person from first chat to launch day and beyond.",
    linkedin: "https://linkedin.com/in/sarah-mokoena",
    email: "sarah@wsdxi.co.za",
    image: "/images/team/sarah.jpg",
  },
  {
    name: "Thabo Nkosi",
    role: "Senior Developer",
    bio: "Thabo builds fast, secure and future-proof websites. When he’s not coding, he’s probably teaching the next generation of South African developers.",
    linkedin: "https://linkedin.com/in/thabo-nkosi",
    email: "thabo@wsdxi.co.za",
    image: "/images/team/thabo.jpg",
  },
];

const About = () => {
  return (
    <main className="pt-16 pb-24 bg-white">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900">
          About Winter Shadow Designs
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We make getting your business online simple and stress-free.
        </p>
      </div>

      {/* Company Overview */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At Winter Shadow Designs, we're passionate about empowering small
            businesses and entrepreneurs in South Africa to establish a strong
            online presence. Founded with the belief that every business
            deserves a professional website without the hassle, we specialize in
            custom web design solutions that are affordable, fast, and tailored
            to your needs.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ translateY: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="h-64 bg-gray-200 border-2 border-dashed border-gray-300">
                {/* Replace with real photos */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${member.name}&background=1e3a8a&color=fff&size=256`;
                  }}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 animate-aws-gradient-aws-variantA rounded-lg">
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
      <div className="max-w-5xl mx-auto my-16 px-4 py-16 rounded-lg animate-aws-gradient-aws-variantA">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Ready to Build Your Online Presence?
        </h2>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-2xl mx-auto">
          Let our team take care of everything. Get in touch today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/packages">
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
