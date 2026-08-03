import type { Route } from "./+types/home";
import { Hero } from "~/components/Hero";
import { motion } from "framer-motion";

export function meta() {
  const siteUrl = "https://1hourspectaclerepairs.co.za";
  const ogImageUrl = `${siteUrl}/images/1hourspectaclerepairs-og-facebook-1200x630.jpg`;

  return [
    {
      title:
        "1 Hour Spectacle & Watch Repairs — Launch Your Professional Website",
    },
    {
      name: "description",
      content:
        "1 Hour Spectacle & Watch Repairs - we repairs all makes of sunglasses and spectacles! Contact us for fast, affordable repairs. Visit our website to learn more and book your appointment today!",
    },
    {
      name: "keywords",
      content:
        "1 Hour Spectacle & Watch Repairs, spectacle repair, watch repair, sunglasses repair, affordable repairs, fast service, professional repairs, contact us, book appointment",
    },
    { name: "author", content: "1 Hour Spectacle & Watch Repairs" },

    // OpenGraph (Facebook, LinkedIn, WhatsApp)
    {
      property: "og:title",
      content:
        "1 Hour Spectacle & Watch Repairs — Professional Spectacle & Watch Repair Services",
    },
    {
      property: "og:description",
      content:
        "1 Hour Spectacle & Watch Repairs - we repairs all makes of sunglasses and spectacles! Contact us for fast, affordable repairs. Visit our website to learn more and book your appointment today!",
    },
    { property: "og:url", content: siteUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: ogImageUrl },
    { property: "og:image:secure_url", content: ogImageUrl }, // Important for WhatsApp/SSL
    { property: "og:image:type", content: "image/jpeg" }, // Helps crawler identify the file
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "1 Hour Spectacle & Watch Repairs" }, // Shown above the title in WhatsApp

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content:
        "1 Hour Spectacle & Watch Repairs — Professional Spectacle & Watch Repair Services",
    },
    {
      name: "twitter:description",
      content:
        "1 Hour Spectacle & Watch Repairs - we repairs all makes of sunglasses and spectacles! Contact us for fast, affordable repairs. Visit our website to learn more and book your appointment today!",
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

      <section className="max-w-5xl mx-auto bg-gray-100 py-16 md:py-8 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-4">Spectacle Repairs</h2>
            <div>
              <img
                src="/images/image-of-broken-eyeglasses.jpg"
                alt="broken eyeglasses"
                className="h-auto"
              />
              <ul className="mt-4 list-disc pl-5">
                <li>We repair all makes and brands of spectacles.</li>
                <li>
                  We offer guaranteed repairs to all makes of spectacles,
                  sunglasses frames.
                </li>
                <li>Transfer of lenses onto a new spectacle frame.</li>

                <li>We can realign your spectacle frame.</li>
                <li>
                  Drill-out of broken spectacle frame screws from barrel and
                  replacement.
                </li>
                <li>Cutting and fitting of spectacle lenses</li>
                <li>Tinting of plastic lenses for spectacle or sunglasses.</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Products</h2>
            <div>
              <ul className="mt-4 list-disc pl-5">
                <li>Designer Frames and Optical Frames</li>
                <li>Disposal Colour Contact Lenses</li>
                <li>
                  Branded sunglasses, lenses, diving masks and related optical
                  products
                </li>

                <li>Watch Straps and Bands</li>
                <li>Watch Batteries</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Watch Repairs</h2>
            <div>
              <img
                src="/images/watch-repairs.jpg"
                alt="gold women's watch and men's silver watch"
                className="h-auto"
              />
              <ul className="mt-4 list-disc pl-5">
                <li>Professional watchmaker – 60 years experience.</li>
                <li>
                  Repairs to all types of hand watches – automatic (self
                  winding) and manual.
                </li>
                <li>
                  Fitment of glass, winders, arms, needles, batteries, movements
                  etc.
                </li>

                <li>Bands – leather, metal, stretch bands.</li>
                <li>All branded names such as Rolex, Seiko, Citizen etc.</li>
              </ul>
              <h2 className="text-xl font-bold mb-4">Grandfather Clocks</h2>
              <img
                src="/images/clock-grandfather.jpg"
                alt="gold women's watch and men's silver watch"
                className="h-auto"
              />
              <p>
                Complete Service and Repairs can be done on any make on
                grandfather clocks. Services take approximately 1 week for
                servicing, plus 2 weeks kept for testing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
