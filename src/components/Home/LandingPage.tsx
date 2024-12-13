import animationData from '../../assets/main.json';
import Lottie from "react-lottie-player";
function LandingPage() {

  return (
    <>
      <div className="">


        <section className="py-12 bg-gray-900 sm:pb-16 lg:pb-20 xl:pb-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center max-w-5xl grid-cols-1 mx-auto gap-y-8 lg:grid-cols-5 gap-x-16">
              <div className="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3 mt-5">
                <h1 className="text-4xl font-normal text-white uppercase sm:text-5xl lg:text-6xl xl:text-8xl">
                  Valid{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                    Xchanze
                  </span>
                </h1>
                <p className="mt-6 text-lg font-normal text-white sm:text-xl">
                Redefining the Way You Exchange Cryptos and Currencies.
                </p>
                <div className="mt-8 sm:mt-10">
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=1315015584995348592&permissions=137439341632&integration_type=0&scope=bot"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150"
                    role="button"
                  >
                    Invite Bot Now!
                  </a>
                </div>

                <p className="max-w-xs mx-auto mt-4 text-base font-normal text-gray-400 sm:mt-8">
                  No comission charges will apply.
                  <br />
                  Plans start at $2.99
                </p>
              </div>

              <div className="lg:col-span-2 lg:order-first">
                <Lottie
                  loop
                  animationData={animationData}
                  play
                  className="w-full max-w-sm mx-auto mt-10"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingPage;
