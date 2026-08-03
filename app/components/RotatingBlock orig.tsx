import React, { useState, useEffect } from "react";

// The main component for the 3D rotating block effect
const RotatingBlock: React.FC = () => {
  // Explicitly define the component type as React.FC
  // State to track the current rotation angle around the Y-axis.
  // Explicitly type the state as a number.
  const [rotation, setRotation] = useState<number>(0);

  // Define the dimensions and half-dimension (for Z-translation)
  const BLOCK_SIZE = "300px";
  const HALF_SIZE = "150px"; // 300px / 2

  // Apply the rotation effect using a timer
  useEffect(() => {
    // Set up the interval to rotate the block every 5000 milliseconds (5 seconds)
    const interval = setInterval(() => {
      // Decrement the rotation angle by 90 degrees (left rotation)
      setRotation((prevRotation) => prevRotation - 90);
    }, 5000);

    // Cleanup function: Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Common classes for all faces
  const faceClass = `
        absolute w-full h-full flex justify-center items-center text-center p-5 rounded-xl 
        text-white text-4xl font-extrabold shadow-2xl transition-shadow duration-300
        hover:shadow-3xl
    `;

  return (
    // SCENE SETUP: Defines the perspective for the 3D effect
    <div
      className="w-full flex justify-center items-center bg-transparent"
      style={{ perspective: "1200px" }}
    >
      {/* BLOCK CONTAINER: Maintains the 3D space and handles the rotation transition */}
      <div
        className="relative"
        style={{
          width: BLOCK_SIZE,
          height: BLOCK_SIZE,
          transformStyle: "preserve-3d", // Crucial for 3D
          transition: "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smooth, slightly custom easing
          transform: `rotateY(${rotation}deg)`,
          transformOrigin: "center center",
        }}
      >
        {/* FACE 1: Initial Front Face ("1hourspectaclerepairs") */}
        <div
          className={`${faceClass} bg-gradient-to-br from-blue-700/80 to-blue-900/80 border-4 border-blue-400`}
          style={{
            // Position forward by half the size
            transform: `translateZ(${HALF_SIZE})`,
            backfaceVisibility: "hidden",
            textShadow: "0 0 10px #4a90e2, 0 0 20px #4a90e2",
            boxShadow: "0 0 30px rgba(74, 144, 226, 0.7)",
          }}
        >
          1hourspectaclerepairs
        </div>

        {/* FACE 2: Left Face (Rotates into view next) */}
        <div
          className={`${faceClass} bg-gradient-to-br from-emerald-700/80 to-emerald-900/80 border-4 border-emerald-400`}
          style={{
            // Rotate 90 degrees left, then position forward by half the size
            transform: `rotateY(-90deg) translateZ(${HALF_SIZE})`,
            backfaceVisibility: "hidden",
            textShadow: "0 0 10px #059669, 0 0 20px #059669",
            boxShadow: "0 0 30px rgba(5, 150, 105, 0.7)",
          }}
        >
          waterfall software development
        </div>

        {/* FACE 3: Back Face (Hidden, but necessary for the loop) */}
        <div
          className={`${faceClass} bg-gradient-to-br from-blue-700/80 to-blue-900/80 border-4 border-blue-400`}
          style={{
            transform: `rotateY(-180deg) translateZ(${HALF_SIZE})`,
            backfaceVisibility: "hidden",
          }}
        >
          1hourspectaclerepairs
        </div>

        {/* FACE 4: Right Face (Hidden, but necessary for the loop) */}
        <div
          className={`${faceClass} bg-gradient-to-br from-emerald-700/80 to-emerald-900/80 border-4 border-emerald-400`}
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
