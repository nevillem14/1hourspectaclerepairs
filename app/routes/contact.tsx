// File: app/routes/contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { SITE_CONFIG } from "~/lib/constants";

export function meta() {
  return [
    { title: "Contact — Winter Shadow Designs" },
    {
      name: "description",
      content:
        "Get in touch with Winter Shadow Designs to start building your website — contact via email, WhatsApp or phone for a fast response.",
    },
    {
      name: "keywords",
      content:
        "Winter Shadow Designs contact, web design contact ZA, request quote website design, get in touch web agency South Africa",
    },
    { name: "author", content: "Winter Shadow Designs" },

    { property: "og:title", content: "Contact — Winter Shadow Designs" },
    {
      property: "og:description",
      content:
        "Ready to launch your website? Contact Winter Shadow Designs today — we reply fast to quotes, questions and support requests.",
    },
    { property: "og:url", content: "https://wsdxi.co.za/contact" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://wsdxi.co.za/og-image.jpg" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Contact — Winter Shadow Designs" },
    {
      name: "twitter:description",
      content:
        "Have questions or ready to start your project? Reach out to Winter Shadow Designs via email, phone or WhatsApp.",
    },
    { name: "twitter:image", content: "https://wsdxi.co.za/og-image.jpg" },
  ];
}

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
                  <p className="text-gray-600 mt-2">
                    <a
                      className="mt-2 font-normal hover:text-black block"
                      href={`mailto:${SITE_CONFIG.emailHello}`}
                    >
                      hello@wsdxi.co.za{" "}
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">
                    We reply asap on email during business days
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ translateY: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-5">
                <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
                  <Phone className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Call or WhatsApp
                  </h3>

                  {/* Phone Number (pretty display) */}
                  <p className="text-gray-700 font-medium mt-3 text-lg">
                    {SITE_CONFIG.phoneString}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {/* Call Button – only shows on mobile */}
                    <a
                      href={`tel:${SITE_CONFIG.phoneNumber}`}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition shadow-md "
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>

                    {/* WhatsApp Button – always visible */}
                    <a
                      href={SITE_CONFIG.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-medium transition shadow-md"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.498.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945l-1.037 3.787 3.875-1.015a11.79 11.79 0 005.64 1.437h.005c6.555 0 11.89-5.335 11.893-11.892A11.821 11.821 0 0020.884 3.088" />
                      </svg>
                      WhatsApp
                    </a>
                  </div>

                  <p className="text-sm text-gray-500 mt-4">
                    Mon–Fri: 8am – 4pm
                  </p>
                  <p className="text-sm text-gray-500">
                    We reply asap on WhatsApp during business days
                  </p>
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
                  <p className="text-sm text-gray-600 mt-2">
                    Mon–Fri: 8am – 4pm
                  </p>
                  <p className="text-sm text-gray-500">
                    Closed on Sat, Sun & Public holidays
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
                  placeholder="First and Last Name"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                  placeholder="Company Name"
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
                We reply to all messages asap during business days
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto mt-20 px-4 py-8 md:rounded-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Launch Your Website?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Let’s get your business online in days, not weeks.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/pricing">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition">
              View Packages
            </button>
          </a>

          <a
            href={`${SITE_CONFIG.whatsappLink}`}
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
