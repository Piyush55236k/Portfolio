import React, { useEffect, useState } from "react";
import backImage from "../assets/Profile.jpg";
import frontImage from "../assets/Piyush.jpg";

const FlipAvatar = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipped(true);
      setTimeout(() => setFlipped(false), 1000);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full h-full aspect-square perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <img
          src={frontImage}
          alt="3D Avatar"
          className="absolute w-full h-full object-cover [backface-visibility:hidden] rounded-full"
        />
        {/* Back */}
        <img
          src={backImage}
          alt="Real"
          className="absolute w-full h-full object-cover rotate-y-180 [backface-visibility:hidden] rounded-full"
        />
      </div>
    </div>
  );
};

export default FlipAvatar;