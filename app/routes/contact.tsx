// File: app/routes/contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-16 pb-24 bg-white">
      {/* Hero */}
      <div className="max-w-5xl mx-auto text-center px-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question or ready to start your project? We’re here to help —
          fast, friendly replies guaranteed.
        </p>
      </div>

      {/* Contact Info + Form Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <div className="space-y-10">
            <motion.div
              whileHover={{ translateY: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-5">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Mail className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mt-2">hello@wsdxi.co.za</p>
                  <p className="text-sm text-gray-500">
                    We reply within a few hours
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ translateY: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-5">
                <div className="bg-green-100 p-4 rounded-full">
                  <Phone className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Call or WhatsApp
                  </h3>
                  <p className="text-gray-600 mt-2">+27 67 123 4567</p>
                  <p className="text-sm text-gray-500">Mon–Fri: 8am – 5pm</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ translateY: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-5">
                <div className="bg-purple-100 p-4 rounded-full">
                  <Clock className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Working Hours
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Monday – Friday: 8:00 – 17:00
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 – 13:00</p>
                  <p className="text-sm text-gray-500">
                    Closed on Sundays & public holidays
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <div className="animate-aws-gradient-aws-variantA rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  placeholder="+27 82 123 4567"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
                  placeholder="Tell us about your project or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-3 transition"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>

              <p className="text-center text-gray-700 text-sm flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                We reply to all messages within 2–4 hours during business days
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto my-20 px-4 py-16 rounded-2xl animate-aws-gradient-aws-variantA text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Launch Your Website?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Let’s get your business online in days, not weeks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/packages">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition">
              View Packages
            </button>
          </a>
          <a
            href="https://wa.me/27671234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium transition flex items-center gap-2 mx-auto sm:mx-0">
              <span>Chat on WhatsApp</span>
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
