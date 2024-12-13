import { useState } from 'react';
import logo from '../assets/main.png';

function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <header className="py-4 top-0 left-0 w-full bg-gray-900 sm:py-6 z-50">
        <div className="px-4 sm:px-6 lg:px-8l mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="shrink-0 flex items-center space-x-3">
              <img className="w-auto h-12" src={logo} alt="Logo" />
              <div className="text-lg font-semibold text-white">Valid Xchanze</div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden space-x-8 md:flex md:items-center">
              <a
                href="/"
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                Home
              </a>
              <a
                href="/bot"
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                Our Bot
              </a>
              <a
                href="/documentation"
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                Documentation
              </a>
              <a
                href="/vouches"
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                Vouches
              </a>
              <a
                href="/feedbacks"
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                Feedbacks
              </a>
            </nav>

            {/* Discord Button */}
            <div className="relative hidden md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a
                href="https://discord.gg/nuWzGbu8De"
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-medium text-white bg-black border border-transparent rounded-full"
                role="button"
              >
                Discord
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {expanded && (
            <nav className="flex flex-col pt-8 pb-4 space-y-6 md:hidden">
              <a
                href="/"
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                Home
              </a>
              <a
                href="/bot"
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                Our Bot
              </a>
              <a
                href="/documentation"
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                Documentation
              </a>
              <a
                href="/vouches"
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                Vouches
              </a>
              <a
                href="/feedbacks"
                className="text-base font-medium text-gray-400 transition-all duration-200 hover:text-white"
              >
                Feedbacks
              </a>
              <div className="relative inline-flex items-center justify-center group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                <a
                  href="https://discord.gg/nuWzGbu8De"
                  className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-medium text-white bg-black border border-transparent rounded-full"
                  role="button"
                >
                  Discord
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
