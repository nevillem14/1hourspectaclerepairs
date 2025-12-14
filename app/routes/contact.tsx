import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
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

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  const isBrowser = typeof window !== "undefined";

  useEffect(() => {
    if (!isBrowser) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.onload = () => setRecaptchaReady(true);
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [isBrowser]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isBrowser || !recaptchaReady) return;

    setStatus("sending");

    try {
      const recaptchaToken = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, {
              action: "contact_form",
            })
            .then(resolve)
            .catch(reject);
        });
      });

      const form = e.currentTarget;
      const formData = new FormData(form);

      const payload = {
        name: formData.get("name")?.toString() ?? "",
        company: formData.get("company")?.toString() ?? "",
        email: formData.get("email")?.toString() ?? "",
        phone: formData.get("phone")?.toString() ?? "",
        message: formData.get("message")?.toString() ?? "",
        recaptchaToken,
      };

      const res = await fetch("/.netlify/functions/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  if (!isBrowser) return null; // SSR-safe

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

            {/* Phone Card */}
            <motion.div
              whileHover={{ translateY: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-5">
                <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
                  <Phone className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">Call</h3>

                  {/* Phone Number */}
                  <a
                    href={`tel:${SITE_CONFIG.phoneNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 font-medium mt-3 text-lg"
                  >
                    {SITE_CONFIG.phoneString}
                  </a>

                  <p className="text-sm text-gray-500 mt-4">
                    Mon–Fri: 8am – 4pm
                  </p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Contact Card */}
            <motion.div
              whileHover={{ translateY: -6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-start space-x-5">
                <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
                  <FaWhatsapp className="w-7 h-7 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    WhatsApp
                  </h3>

                  {/* Whatsapp Number */}
                  <a
                    href={SITE_CONFIG.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 font-medium mt-3 text-lg"
                  >
                    {SITE_CONFIG.whatsappString}
                  </a>

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Your Name
                </label>
                <input
                  name="name"
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
                  name="company"
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
                  name="email"
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
                  name="phone"
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
                  name="message"
                  rows={5}
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
                  placeholder="Tell us about your project or question..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-3 transition"
                disabled={status === "sending"}
              >
                <Send className="w-5 h-5" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p
                  className="text-center text-green-600 flex items-center justify-center gap-2 mt-4"
                  aria-live="polite"
                >
                  <CheckCircle className="w-5 h-5" />
                  Your message was sent! We’ll get back to you during business
                  hours.
                </p>
              )}

              {status === "error" && (
                <p className="text-center text-red-600 mt-4">
                  Oops! Something went wrong. Please try again later.
                </p>
              )}
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
