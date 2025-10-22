import React from "react";
import RotatingGraphic from "~/components/RotatingGraphic";

const ExamplePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">My Page</h1>
      <RotatingGraphic
        frontContent={
          <div className="flex flex-col items-center">
            <span>Front: Your Logo</span>
            <img src="your-logo.png" alt="Logo" className="h-20" />
          </div>
        }
        backContent={<div>Back: Your Text or Stats</div>}
        duration={0.8}
      />
    </div>
  );
};

export default ExamplePage;
