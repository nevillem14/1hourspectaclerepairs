// File: app/routes/contact.tsx
import { motion } from "framer-motion";
import { Phone, Clock, MapPin, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { SITE_CONFIG } from "~/lib/constants";

export function meta() {
  return [
    { title: "Contact Us — 1 Hour Spectacle & Watch Repairs" },
    {
      name: "description",
      content:
        "Visit our shop in Durban or contact us via WhatsApp and phone for fast, direct repairs on spectacles and watches. Open Monday to Sunday.",
    },
    {
      name: "keywords",
      content:
        "spectacle repairs address Durban, watch repair shop Chatsworth, walk-in spectacle fixes, WhatsApp repair quote South Africa",
    },
    { name: "author", content: "1 Hour Spectacle & Watch Repairs" },

    {
      property: "og:title",
      content: "Contact Us — 1 Hour Spectacle & Watch Repairs",
    },
    {
      property: "og:description",
      content:
        "Visit our store or get in touch instantly via WhatsApp or phone call. Open Mon–Sun from 09h00 to 17h00.",
    },
    {
      property: "og:url",
      content: "https://1hourspectaclerepairs.co.za/contact",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: "https://1hourspectaclerepairs.co.za/og-image.jpg",
    },

    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Contact Us — 1 Hour Spectacle & Watch Repairs",
    },
    {
      property: "twitter:description",
      content:
        "Visit our Durban shop or reach out via WhatsApp or phone for immediate assistance.",
    },
    {
      property: "twitter:image",
      content: "https://1hourspectaclerepairs.co.za/og-image.jpg",
    },
  ];
}

export default function Contact() {
  const addressString = "12 Fragrance Street, Chatsworth, Durban, 4092";
  const mapsQueryUrl =
    "https://www.google.com/maps/search/?api=1&query=12+Fragrance+Street+Croftdene+Chatsworth+Durban";

  return (
    <main className="pt-24 pb-24 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-14">
        <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-3.5 py-1.5 rounded-full font-semibold mb-4 border border-green-200">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span>Open Mon – Sun (09h00 – 17h00)</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Get in Touch & Visit Us
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          We prefer direct communication! Reach out via WhatsApp or phone call
          for immediate assistance, or walk straight into our shop for
          while-you-wait repairs.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Hours Cards (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Card */}
            <motion.div
              whileHover={{ translateY: -4 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3.5 rounded-xl flex-shrink-0">
                  <FaWhatsapp className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    WhatsApp Us
                  </h3>
                  <p className="md:text-xs text-slate-500 mt-0.5">
                    Send photos of your broken glasses or watch for a quick
                    quote.
                  </p>
                  <a
                    href={SITE_CONFIG.whatsappLink_1}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-slate-900 font-extrabold mt-3 text-lg hover:text-green-600 transition"
                  >
                    {SITE_CONFIG.whatsappString_1}
                  </a>
                  <span className="inline-block mt-3 bg-green-50 text-green-700 md:text-xs font-semibold px-2.5 py-1 rounded-md border border-green-200">
                    Preferred Method
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Phone Call Card */}
            <motion.div
              whileHover={{ translateY: -4 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3.5 rounded-xl flex-shrink-0">
                  <Phone className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900">
                    Call Us Directly
                  </h3>
                  <p className="md:text-xs text-slate-500 mt-0.5">
                    Speak directly with a technician.
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phoneNumber_1}`}
                    className="block text-slate-900 font-extrabold mt-3 text-lg hover:text-blue-600 transition"
                  >
                    {SITE_CONFIG.phoneString_1}
                  </a>
                  <p className="md:text-xs text-slate-500 mt-0.5">
                    Primary Number
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phoneNumber_2}`}
                    className="block text-slate-900 font-extrabold mt-3 text-lg hover:text-blue-600 transition"
                  >
                    {SITE_CONFIG.phoneString_2}
                  </a>
                  <p className="md:text-xs text-slate-500 mt-0.5">
                    Alternative Number
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Operating Hours Card */}
            <motion.div
              whileHover={{ translateY: -4 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3.5 rounded-xl flex-shrink-0">
                  <Clock className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Operating Hours
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 mt-1">
                    Monday – Sunday: 9h00 – 17h00
                  </p>
                  <p className="md:text-xs text-slate-500 mt-1">
                    Open 7 days a week, including weekends.
                  </p>
                  <p className="md:text-xs text-slate-500 mt-1">
                    Public holidays - Call to confirm.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Physical Location & Interactive Map Embed (Span 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-rose-100 p-3.5 rounded-xl flex-shrink-0">
                <MapPin className="w-7 h-7 text-rose-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900">
                  Visit Our Shop (Walk-Ins Welcome)
                </h3>
                <p className="text-sm text-slate-600 mt-1">{addressString}</p>
                <a
                  href={mapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 mt-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 transition"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Google Maps Embedded iframe */}
            <div className="w-full h-[380px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 relative">
              <iframe
                title="1 Hour Spectacle & Watch Repairs Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.14019239453827!2d30.88512821787419!3d-29.91490346513538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef655286f268105%3A0x1ba71482d3606f34!2s12%20Fragrance%20St%2C%20Croftdene%2C%20Chatsworth%2C%204092!5e0!3m2!1sen!2sza!4v1785779754649!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:text-xs text-amber-800 leading-relaxed">
              <strong className="font-bold block mb-1">
                Quick Tip for Visitors:
              </strong>
              Most spectacle repairs (such as soldering frames, hinge
              replacements, or nose pad adjustments) are completed in around an
              hour while you wait or browse the market!
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-4xl mx-auto mt-20 px-4 text-center">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Have a question right now?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            Skip the delay and chat directly with a technician on WhatsApp for
            instant answers and quotes.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={SITE_CONFIG.whatsappLink_1}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 px-8 rounded-xl transition shadow-lg text-sm"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneNumber_1}`}
              className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-8 rounded-xl transition border border-slate-700 text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call {SITE_CONFIG.phoneString_1}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
