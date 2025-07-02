import React from "react";

const BackgroundPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-[-50%] flex flex-wrap transform rotate-[-12deg] scale-110">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="text-[#1a1b21] text-8xl font-bold whitespace-nowrap select-none"
            style={{ animation: `slide ${30}s linear infinite` }}
          >
            0101 0101 0101 0101 0101 0101 0101&nbsp;
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundPattern;
