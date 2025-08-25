import React from "react";
import DomainChecker from "~/components/DomainChecker";

export default function DomainLookup() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Background image: 25% screen height */}
      <div className="relative h-[20vh] md:h-[35vh] w-full">
        <img
          src="../images/domain-search-background-5.png"
          alt="abstract design background"
          className="w-full h-full object-cover"
        />
        {/* Fade linear gradient at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-8/8 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        {/* Fade radial gradient at bottom - needs to be tweaked at bit more to the effect i want
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,white,transparent)] pointer-events-none" />
          */}
      </div>

      {/* Content below the image */}
      <div className="relative -mt-[14vh] md:-mt-[22vh] z-10 max-w-3xl mx-auto px-8 py-8 text-black">
        <h1 className="text-[clamp(2.5rem,10vw,2.5rem)] font-extrabold mb-4">
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
