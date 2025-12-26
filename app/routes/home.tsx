import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";

export function meta() {
  return [
    { title: "Winter Shadow Designs — Launch Your Professional Website" },
    {
      name: "description",
      content:
        "Winter Shadow Designs helps South African businesses launch fast, mobile-friendly websites with full ownership, scalable features and professional support.",
    },
    {
      name: "keywords",
      content:
        "Winter Shadow Designs, web design South Africa, website development, affordable websites, small business web design, SEO friendly websites, startup web design ZA",
    },
    { name: "author", content: "Winter Shadow Designs" },

    // OpenGraph
    {
      property: "og:title",
      content: "Winter Shadow Designs — Launch Your Website",
    },
    {
      property: "og:description",
      content:
        "We build websites that give businesses their own online home — not just social media pages — with SEO, scalability and full control.",
    },
    { property: "og:url", content: "https://wsdxi.co.za" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/wsdxi-og-facebook-1200x648.png" }, // replace if you have a real image

    // Twitter card
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: "Winter Shadow Designs — Launch Your Website",
    },
    {
      name: "twitter:description",
      content:
        "Professional, affordable website solutions for South African businesses — built by Winter Shadow Designs.",
    },
    { name: "twitter:image", content: "https://wsdxi.co.za/og-image.jpg" },
  ];
}

export default function Home() {
  return (
    <section>
      <div className="">
        <Hero mx-0 my-0 p-0 />
      </div>

      <div className="md:w-3/5 mt-10 mx-auto text-left">
        <h2 className="text-2xl p-4 md:text-3xl text-center md:text-left font-bold text-gray-900 mb-6">
          Why do I need a website when I can use social media?
        </h2>
        <div className="p-6 pt-0 text-lg text-center md:text-left text-gray-600 leading-relaxed">
          <p className="mb-4 ">
            A website is your own piece of the internet that you fully control –
            social media isn’t.
          </p>
        </div>

        <div className="p-6 pt-0 text-gray-600 leading-relaxed">
          <p className="mb-4 text-lg font-semibold text-blue-600">
            Here’s why a proper website still beats relying only on Facebook,
            Instagram or TikTok:
          </p>
          <ul className="space-y-6 ">
            <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
              <strong>You own it</strong> – Platforms can change rules, limit
              your reach, suspend accounts or even shut down overnight. Your
              website can never be taken away.
            </li>
            <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
              <strong>Customers trust you more</strong> – A professional site
              with your own domain (like www.yourbusiness.co.za) looks far more
              legitimate than just a Facebook page.
            </li>
            <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
              <strong>You show up on Google</strong> – People searching “plumber
              near me” or “hair salon Johannesburg” will find your website, not
              your Instagram profile.
            </li>
            <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
              <strong>No distractions</strong> – On social media, visitors see
              ads, friends’ posts and competitors. On your site, the focus is
              100% on your business and your offer.
            </li>
            <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
              <strong>You collect leads 24/7</strong> – Booking forms, WhatsApp
              buttons and contact details work even when you’re sleeping; social
              media algorithms often hide your posts.
            </li>
            <li className="items-start p-4 border border-gray-300 rounded-lg shadow-md border-l-4 border-l-blue-600 ">
              <strong>It grows with your business</strong> – Add an online
              store, booking system, menu or portfolio whenever you’re ready –
              something social media pages can’t do properly.
            </li>
            <li className=" mx-auto bg-fuchsia-100 p-4 rounded-lg shadow-2xl font-medium border border-fuchsia-300 border-l-4 border-l-fuchsia-600">
              <strong>In short – </strong> Social media is great for staying
              visible and chatting with customers, but a website is your real
              online home and the foundation every serious business needs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
