import React from "react";
import DomainChecker from "~/components/DomainChecker";

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
    <div className="min-h-screen overflow-hidden text-center mb-8">
      {/* Background image: 25% screen height */}
      <div className="relative h-[20vh] md:h-[35vh] w-full">
        <img
          src="../images/domain-search-background-5.webp"
          alt="abstract design background"
          className="w-full h-full object-cover md:border-0 border-1 border-transparent"
        />
        {/* Fade linear gradient at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8/8 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        {/* Fade radial gradient at bottom - needs to be tweaked at bit more to the effect i want
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,white,transparent)] pointer-events-none" />
          */}
      </div>

      {/* Content below the image */}
      <div className="relative -mt-[14vh] md:-mt-[22vh] z-10 max-w-3xl mx-auto px-8 py-8 text-black">
        <h1 className="text-[2.5rem] font-extrabold mb-4">
          Discover your perfect
          <br /> domain name
        </h1>
        <p className="mb-4">
          Use our domain lookup tool by entering the domain name for your
          business and check if it{"'"}s available.
        </p>
        <DomainChecker />
      </div>
    </div>
  );
}
