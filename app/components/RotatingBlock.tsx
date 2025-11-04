import React, { useState, useEffect } from "react";

const RotatingBlock: React.FC = () => {
  const [rotation, setRotation] = useState<number>(0);

  const BLOCK_SIZE = "300px";
  const BLOCK_HEIGHT = "300px";
  const BLOCK_WIDTH = "600px";
  const HALF_SIZE = "300px";

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation - 90);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const faceClass = `
    absolute w-full h-full flex justify-center items-center text-center p-5 rounded-xl 
    text-black text-4xl font-extrabold transition duration-300
  `;

  return (
    <div
      className="w-full flex justify-center items-center bg-transparent"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative"
        style={{
          width: BLOCK_WIDTH,
          height: BLOCK_HEIGHT,
          transformStyle: "preserve-3d",
          transition: "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: `rotateY(${rotation}deg)`,
          transformOrigin: "center center",
        }}
      >
        {/* FRONT FACE */}
        <div
          className={`${faceClass} 
            /*bg-gradient-to-br from-stone-600/80 to-stone-900/80 */
            border-4 border-stone-400 
            shadow-[0_0_30px_theme(colors.stone.500/70)]
            hover:shadow-[0_0_40px_theme(colors.stone.400)]
            drop-shadow-[0_0_10px_theme(colors.stone.400)]
          `}
          style={{
            transform: `translateZ(${HALF_SIZE})`,
            backfaceVisibility: "hidden",
          }}
        >
          <div className="animate-pulse">wsdxi</div>
        </div>

        {/* LEFT FACE */}
        <div
          className={`${faceClass} 
            /*bg-gradient-to-br from-emerald-600/80 to-emerald-900/80 */
            border-4 border-emerald-400 
            shadow-[0_0_30px_theme(colors.emerald.500/70)]
            hover:shadow-[0_0_40px_theme(colors.emerald.400)]
            drop-shadow-[0_0_10px_theme(colors.emerald.400)]
          `}
          style={{
            transform: `rotateY(-90deg) translateZ(${HALF_SIZE})`,
            backfaceVisibility: "hidden",
          }}
        >
          waterfall software development
        </div>

        {/* BACK FACE */}
        <div
          className={`${faceClass} 
            /*bg-gradient-to-br from-blue-600/80 to-blue-900/80 */
            border-4 border-stone-400 
            shadow-[0_0_30px_theme(colors.stone.500/70)]
            hover:shadow-[0_0_40px_theme(colors.stone.400)]
            drop-shadow-[0_0_10px_theme(colors.stone.400)]
          `}
          style={{
            transform: `rotateY(-180deg) translateZ(${HALF_SIZE})`,
            backfaceVisibility: "hidden",
          }}
        >
          wsdxi
        </div>

        {/* RIGHT FACE */}
        <div
          className={`${faceClass} 
            /*bg-gradient-to-br from-emerald-600/80 to-emerald-900/80 */
            border-4 border-emerald-400 
            shadow-[0_0_30px_theme(colors.emerald.500/70)]
            hover:shadow-[0_0_40px_theme(colors.emerald.400)]
            drop-shadow-[0_0_10px_theme(colors.emerald.400)]
          `}
          style={{
            transform: `rotateY(-270deg) translateZ(${HALF_SIZE})`,
            backfaceVisibility: "hidden",
          }}
        >
          waterfall software development
        </div>
      </div>
    </div>
  );
};

export default RotatingBlock;
