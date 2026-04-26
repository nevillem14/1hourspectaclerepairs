import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { motion } from "framer-motion";

export function meta() {
  const siteUrl = "https://wsdxi.co.za";
  const ogImageUrl = `${siteUrl}/images/wsdxi-og-facebook-1200x630.jpg`;

  return [
    { title: "Winter Shadow Designs — Launch Your Professional Website" },
    {
      name: "description",
      content:
        "Winter Shadow Designs helps South African businesses launch fast, mobile-friendly websites with professional email and full business compliance support.",
    },
    {
      name: "keywords",
      content:
        "Winter Shadow Designs, web design South Africa, website development, affordable websites, CIPC registration, business email, SEO friendly websites, startup web design ZA",
    },
    { name: "author", content: "Winter Shadow Designs" },

    // OpenGraph (Facebook, LinkedIn, WhatsApp)
    {
      property: "og:title",
      content:
        "Winter Shadow Designs — Professional Web & Compliance Solutions",
    },
    {
      property: "og:description",
      content:
        "Establish your business online with professional web design, custom email, and CIPC compliance. Simple, stress-free, and built for South African entrepreneurs.",
    },
    { property: "og:url", content: siteUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: ogImageUrl },
    { property: "og:image:secure_url", content: ogImageUrl }, // Important for WhatsApp/SSL
    { property: "og:image:type", content: "image/jpeg" }, // Helps crawler identify the file
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "Winter Shadow Designs" }, // Shown above the title in WhatsApp

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Winter Shadow Designs — Launch Your Business Online",
    },
    {
      name: "twitter:description",
      content:
        "Professional and affordable web solutions for South African businesses. We handle the tech so you can focus on growth.",
    },
    { name: "twitter:image", content: ogImageUrl },
  ];
}

export default function Home() {
  return (
    <>
      <section className="">
        <Hero mx-0 my-0 p-0 />
      </section>

      <section className="max-w-5xl mx-auto bg-gray-100 py-8 md:py-8 rounded-lg shadow-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-3/5 mx-auto text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl p-4 md:text-3xl text-center md:text-left font-bold text-gray-900 mb-6"
          >
            Affordable Website Design for Small Businesses
          </motion.h2>
          <div className="p-6 pt-0 text-lg text-center md:text-left text-gray-600 leading-relaxed">
            <p className="mb-4 ">
              Getting your business online shouldn't be complicated or break the
              bank. We build high-performance, custom websites designed to
              showcase your brand, attract local customers, and give you the
              professional edge you need to compete in today's digital market.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-3/5 mx-auto text-left"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl p-4 md:text-3xl text-center md:text-left font-bold text-gray-900 mb-6"
          >
            Why do I need a website when I can use social media?
          </motion.h2>
          <div className="p-6 pt-0 text-lg text-center md:text-left text-gray-600 leading-relaxed">
            <p className="mb-4 ">
              A website is your own piece of the internet that you fully control
              – social media isn’t.
            </p>
          </div>

          <div className="p-6 pt-0 text-gray-600 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-lg font-semibold "
            >
              Here’s why a proper website still beats relying only on Facebook,
              Instagram or TikTok:
            </motion.p>
            <ul className="space-y-6 ">
              <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
                <strong>You own it</strong> – Platforms can change rules, limit
                your reach, suspend accounts or even shut down overnight. Your
                website can never be taken away.
              </li>
              <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
                <strong>Customers trust you more</strong> – A professional site
                with your own domain (like www.yourbusiness.co.za) looks far
                more legitimate than just a Facebook page.
              </li>
              <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
                <strong>You show up on Google</strong> – People searching
                “plumber near me” or “hair salon Johannesburg” will find your
                website, not your Instagram profile.
              </li>
              <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
                <strong>No distractions</strong> – On social media, visitors see
                ads, friends’ posts and competitors. On your site, the focus is
                100% on your business and your offer.
              </li>
              <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
                <strong>You collect leads 24/7</strong> – Booking forms,
                WhatsApp buttons and contact details work even when you’re
                sleeping; social media algorithms often hide your posts.
              </li>
              <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
                <strong>It grows with your business</strong> – Add an online
                store, booking system, menu or portfolio whenever you’re ready –
                something social media pages can’t do properly.
              </li>
              <li className=" mx-auto p-4 rounded-lg shadow-2xl font-medium border border-gray-300 border-l-4 border-l-yellow-400">
                <strong>In short – </strong> Social media is great for staying
                visible and chatting with customers, but a website is your real
                online home and the foundation every serious business needs.
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </>
  );
}
