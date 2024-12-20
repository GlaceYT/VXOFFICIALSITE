export default function Stats() {
    return (
      <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-xl font-semibold tracking-widest text-gray-400 uppercase">
              What we have been through?
            </h1>
          </div>
  
          <div className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
            {/* Months in Business */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <div className="px-6 py-8">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-pink-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-white">6+</h4>
                    <p className="mt-1.5 text-lg font-medium text-gray-400">
                      Months in business
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Team Members */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <div className="px-6 py-8">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-pink-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-white">37+</h4>
                    <p className="mt-1.5 text-lg font-medium text-gray-400">
                      Team members
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Orders Completed */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <div className="px-6 py-8">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-pink-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-white">2700+</h4>
                    <p className="mt-1.5 text-lg font-medium text-gray-400">
                      Orders completed
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Customer Success */}
            <div className="overflow-hidden bg-gray-800 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-2xl">
              <div className="px-6 py-8">
                <div className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-12 h-12 text-pink-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                  <div className="ml-4">
                    <h4 className="text-4xl font-bold text-white">98%</h4>
                    <p className="mt-1.5 text-lg font-medium text-gray-400">
                      Customer success
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
