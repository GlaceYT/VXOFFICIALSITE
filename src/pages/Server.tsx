import React from 'react';
import Lottie from "react-lottie-player";
import bgAnimation from '../assets/bg.json'; // Import your Lottie JSON file

const Bot: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Lottie Animation Background */}
      <Lottie
        loop
        animationData={bgAnimation}
        play
        className="absolute bg-gray-900 inset-0 w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30">
        <h1 className="text-5xl font-bold mb-4">Invite Our Bot</h1>
        <h2 className="text-3xl font-semibold">Valid Xchanze</h2>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg">
          Invite Now
        </button>
      </div>

      {/* Home Button at Top Left */}
      <button
        className="absolute top-4 left-4 px-6 py-3 bg-blue-500 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg"
        onClick={() => window.location.href = '/'} // Redirect to Home Page
      >
        Home
      </button>
    </div>
  );
};

export default Bot;
