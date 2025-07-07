import React, { useEffect, useState } from "react";
import backImage from "../assets/Profile.jpg";
import frontImage from "../assets/Piyush.jpg";

const FlipAvatar = () => {
  const [flipped, setFlipped] = useState(false);

  // Flip once on load after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipped(true);
      // Flip back again after another delay
      setTimeout(() => setFlipped(false), 1000); // flips back after 1 sec
    }, 800); // initial flip after 800ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-64 h-64 perspective cursor-pointer mx-auto"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front (3D Avatar) */}
        <img
          src={frontImage}
          alt="3D Avatar"
          className="absolute w-full h-full object-cover  shadow-lg [backface-visibility:hidden]"
        />

        {/* Back (Real Photo) */}
        <img
          src={backImage}
          alt="Real"
          className="absolute w-full h-full object-cover  shadow-lg rotate-y-180 [backface-visibility:hidden]"
        />
      </div>
    </div>
  );
};

export default FlipAvatar;
