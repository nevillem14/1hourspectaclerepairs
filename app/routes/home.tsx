import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Winter Shadow Designs" },
    { name: "description", content: "Winter Shadow Designs" },
  ];
}

export default function Home() {
  return (
    <section>
      <div className="">
        <Hero mx-0 my-0 p-0 />
      </div>

      <div className="md:w-3/5 mt-10 mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Why do I need a website when I can use social media?
        </h2>
        <div className="p-6 pt-0 text-center text-gray-600 leading-relaxed">
          <p className="mb-4">
            A website is your own piece of the internet that you fully control –
            social media isn’t.
          </p>
          <p className="mb-4">
            Here’s why a proper website still beats relying only on Facebook,
            Instagram or TikTok:
          </p>
        </div>
        <div className="p-6 pt-0 text-gray-600 leading-relaxed">
          <ul className="space-y-3 ml-5">
            <li className=" items-start">
              <span className="mr-2 mt-1">•</span>
              <strong>You own it</strong> – Platforms can change rules, limit
              your reach, suspend accounts or even shut down overnight. Your
              website can never be taken away.
            </li>
            <li className="items-start">
              <span className="mr-2 mt-1">•</span>
              <strong>Customers trust you more</strong> – A professional site
              with your own domain (like www.yourbusiness.co.za) looks far more
              legitimate than just a Facebook page.
            </li>
            <li className="items-start">
              <span className="mr-2 mt-1">•</span>
              <strong>You show up on Google</strong> – People searching “plumber
              near me” or “hair salon Johannesburg” will find your website, not
              your Instagram profile.
            </li>
            <li className="items-start">
              <span className="mr-2 mt-1">•</span>
              <strong>No distractions</strong> – On social media, visitors see
              ads, friends’ posts and competitors. On your site, the focus is
              100% on your business and your offer.
            </li>
            <li className="items-start">
              <span className="mr-2 mt-1">•</span>
              <strong>You collect leads 24/7</strong> – Booking forms, WhatsApp
              buttons and contact details work even when you’re sleeping; social
              media algorithms often hide your posts.
            </li>
            <li className="items-start">
              <span className="mr-2 mt-1">•</span>
              <strong>It grows with your business</strong> – Add an online
              store, booking system, menu or portfolio whenever you’re ready –
              something social media pages can’t do properly.
            </li>
          </ul>
          <p className="w-3/5 mx-auto bg-fuchsia-100 rounded-lg mt-6 p-6 font-medium">
            <strong>In short:</strong> Social media is great for staying visible
            and chatting with customers, but a website is your real online home
            and the foundation every serious business needs.
          </p>
        </div>
      </div>
    </section>
  );
}
