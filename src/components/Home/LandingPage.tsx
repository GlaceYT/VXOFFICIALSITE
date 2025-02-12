

function LandingPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900">
        <section className="py-12 sm:pb-16 lg:pb-20 xl:pb-24 text-center">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-6xl font-bold text-white uppercase sm:text-7xl lg:text-8xl xl:text-9xl">
                Valid{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                  Xchanze
                </span>
              </h1>
              <p className="mt-6 text-lg font-normal text-white sm:text-xl">
                Redefining the Way You Exchange Cryptos and Currencies.
              </p>
              <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="/company"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:scale-105 hover:shadow-lg"
                  role="button"
                >
                  Company
                </a>
                <a
                  href="/ourbot"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105 hover:shadow-lg"
                  role="button"
                >
                  OurBot
                </a>
                <a
                  href="/documentary"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 rounded-full bg-gradient-to-r from-pink-500 to-red-500 hover:scale-105 hover:shadow-lg"
                  role="button"
                >
                  Documentary
                </a>
                <a
                  href="/vouches"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:scale-105 hover:shadow-lg"
                  role="button"
                >
                  Vouches
                </a>
                <a
                  href="/feedbacks"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:scale-105 hover:shadow-lg"
                  role="button"
                >
                  Feedbacks
                </a>
                <a
                  href="/exchangelist"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:scale-105 hover:shadow-lg"
                  role="button"
                >
                  Exchangelist
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;