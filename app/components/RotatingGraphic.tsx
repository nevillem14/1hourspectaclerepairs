import React, { useState } from "react";

interface RotatingGraphicProps {
  frontContent: React.ReactNode; // Content for the front side (e.g., logo)
  backContent: React.ReactNode; // Content for the back side (e.g., text or stats)
  duration?: number; // Animation duration in seconds (default: 1)
}

const RotatingGraphic: React.FC<RotatingGraphicProps> = ({
  frontContent,
  backContent,
  duration = 1,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 perspective-[1000px] w-[400px] h-[200px] cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-[var(--duration)] [transform-style:preserve-3d] ${isFlipped ? "rotate-y-180" : ""}`}
        style={{ "--duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-black/50 text-white text-2xl rounded-lg p-5">
          {frontContent}
        </div>
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-black/50 text-white text-2xl rounded-lg p-5 rotate-y-180">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default RotatingGraphic;
