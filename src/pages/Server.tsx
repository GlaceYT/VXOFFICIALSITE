import React from 'react';
import Footer from '../components/Home/Footer';
import Navbar from '../components/Navbar';

const Server: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Server Header */}
      <div className="py-16 text-center bg-gray-900">
        <h1 className="text-5xl font-bold mb-4">Valid Xchanze</h1>
        <p className="text-lg text-gray-400 mb-6">Your trusted community, powered by passion and collaboration.</p>
        <button
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          onClick={() => window.open("https://discord.gg/nuWzGbu8De", "_blank")} // Replace with your server's invite link
        >
          Join Server
        </button>
      </div>

      {/* Team Section */}
      <div className="px-4 py-10 mx-auto max-w-6xl sm:px-6 lg:px-8">
        {/* Owner Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-500 mb-4">Owner</h2>
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <p className="text-xl font-medium">Valid Framework</p>
          </div>
        </div>

        {/* Executives Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-pink-500 mb-4">Executives</h2>
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <ul className="space-y-2">
              <li className="text-lg">kala_mastan</li>
              <li className="text-lg">dodaibmalik</li>
              <li className="text-lg">abru0086</li>
            </ul>
          </div>
        </div>

        {/* Management Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-green-500 mb-4">Management</h2>
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            <ul className="space-y-2">
              <li className="text-lg">vonexide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Server;
