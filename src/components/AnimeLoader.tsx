import React, { useEffect } from "react";
import anime from 'animejs';

const AnimeLoader: React.FC = () => {
  useEffect(() => {
    // Select all elements with the 'circle' class
    anime({
      targets: ".circle",
      translateY: [-10, 10], // Moves up and down
      loop: true,
      easing: "easeInOutSine",
      duration: 800,
      delay: anime.stagger(200), // Stagger the animations
      direction: "alternate",
    });
  }, []); // Empty dependency array to run once on mount

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="circle w-8 h-8 bg-blue-500 rounded-full mx-2"></div>
      <div className="circle w-8 h-8 bg-green-500 rounded-full mx-2"></div>
      <div className="circle w-8 h-8 bg-red-500 rounded-full mx-2"></div>
    </div>
  );
};

export default AnimeLoader;