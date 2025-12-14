// File: app/routes/domainlookup.tsx
import { motion } from "framer-motion";
import { Search, Globe, CheckCircle } from "lucide-react";
import DomainChecker from "~/components/DomainChecker";
import { SITE_CONFIG } from "~/lib/constants";

export function meta() {
  return [
    { title: "Domain Lookup — Winter Shadow Designs" },
    {
      name: "description",
      content:
        "Use Winter Shadow Designs’ domain lookup tool to check availability of your desired domain name before registering your online presence.",
    },
    {
      name: "keywords",
      content:
        "domain lookup South Africa, check domain availability, Winter Shadow Designs domain lookup, .co.za domain search, register domain ZA",
    },
    { name: "author", content: "Winter Shadow Designs" },

    { property: "og:title", content: "Domain Lookup — Winter Shadow Designs" },
    {
      property: "og:description",
      content:
        "Find the perfect domain for your business with our easy domain lookup tool — get your brand online with Winter Shadow Designs.",
    },
    { property: "og:url", content: "https://wsdxi.co.za/domainlookup" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://wsdxi.co.za/og-image.jpg" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Domain Lookup — Winter Shadow Designs" },
    {
      name: "twitter:description",
      content:
        "Check if your desired domain name is available using Winter Shadow Designs’ domain lookup feature before launch.",
    },
    { name: "twitter:image", content: "https://wsdxi.co.za/og-image.jpg" },
  ];
}

export default function DomainLookup() {
  return (
    <main className="pt-16 pb-24 bg-white">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center px-4 mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Find Your Perfect Domain
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Search for your ideal domain name in seconds. We’ll help you secure
          the perfect online address for your brand.
        </motion.p>
      </div>

      {/* Main Content: Domain Checker Card */}
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Optional decorative top bar */}
          <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600" />

          <div className="p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-100 p-5 rounded-full">
                <Globe className="w-12 h-12 text-blue-600" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              Check Domain Availability
            </h2>

            <div className="max-w-3xl mx-auto">
              <DomainChecker />
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Real-time results • Supports .co.za, .com, .org and more
              </p>
            </div>
          </div>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <motion.div
            whileHover={{ translateY: -6 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <Search className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Instant Search
            </h3>
            <p className="text-gray-600">
              Check hundreds of domain extensions in real-time — no waiting.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ translateY: -6 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Secure & Trusted
            </h3>
            <p className="text-gray-600">
              We partner with reliable registrars to ensure your domain is safe.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ translateY: -6 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Local & Global
            </h3>
            <p className="text-gray-600">
              Perfect for South African businesses — .co.za priority support.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto mt-20 px-4 py-12 md:rounded-2xl text-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Found Your Domain? Let’s Build Your Website!
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Once you’ve secured your domain, we can have your professional website
          live in days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/pricing">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition shadow-md">
              View Website Packages
            </button>
          </a>

          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium transition shadow-md flex items-center gap-2 mx-auto sm:mx-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.498.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945l-1.037 3.787 3.875-1.015a11.79 11.79 0 005.64 1.437h.005c6.555 0 11.89-5.335 11.893-11.892A11.821 11.821 0 0020.884 3.088" />
              </svg>
              Chat on WhatsApp
            </button>
          </a>
        </div>
      </div>
    </main>
  );
}
