function Pricing() {
  return (
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Pricing & Plans
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-400">
            Choose a plan that works best for your needs. Affordable and transparent pricing for everyone.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-4">
          {/* Weekly Plan */}
          <div className="overflow-hidden bg-gray-800 border border-gray-700 rounded-md">
            <div className="p-8">
              <h3 className="text-base font-semibold text-cyan-400">Per Week</h3>
              <p className="text-5xl font-bold text-white mt-7">$2.99</p>
              <p className="mt-3 text-base text-gray-400">7 Days Access</p>

              <a
                href="#"
                className="inline-flex items-center justify-center px-10 py-3 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:opacity-80"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Monthly Plan */}
          <div className="overflow-hidden bg-gray-800 border border-gray-700 rounded-md">
            <div className="p-8">
              <h3 className="text-base font-semibold text-cyan-400">Per Month</h3>
              <p className="text-5xl font-bold text-white mt-7">$6.99</p>
              <p className="mt-3 text-base text-gray-400">30 Days Access</p>

              <a
                href="#"
                className="inline-flex items-center justify-center px-10 py-3 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:opacity-80"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Quarterly Plan */}
          <div className="overflow-hidden bg-gray-800 border border-gray-700 rounded-md">
            <div className="p-8">
              <h3 className="text-base font-semibold text-cyan-400">Per Quarterly</h3>
              <p className="text-5xl font-bold text-white mt-7">$18.69</p>
              <p className="mt-3 text-base text-gray-400">90 Days Access</p>

              <a
                href="#"
                className="inline-flex items-center justify-center px-10 py-3 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:opacity-80"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Semi-Annual Plan */}
          <div className="overflow-hidden bg-gray-800 border border-gray-700 rounded-md">
            <div className="p-8">
              <h3 className="text-base font-semibold text-cyan-400">Per Semi - Anually</h3>
              <p className="text-5xl font-bold text-white mt-7">$29.99</p>
              <p className="mt-3 text-base text-gray-400">180 Days Access</p>

              <a
                href="#"
                className="inline-flex items-center justify-center px-10 py-3 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:opacity-80"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
