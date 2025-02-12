import React from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Navbar";

// Define the structure for each flow step
type FlowStep = {
  step: string;
  options: string[];
};

// Define the flows object type
type Flows = {
  [key: string]: FlowStep[];
};

const flows: Flows = {
  "/exchange": [
    {
      step: "Select Sending Type",
      options: [
        "Crypto to Currency",
        "Currency to Currency",
        "Crypto to Crypto",
        "Currency to Crypto",
      ],
    },
    {
      step: "Select Sending Crypto",
      options: ["Bitcoin", "Ethereum", "Other Cryptos"],
    },
    {
      step: "Select Sending Currency",
      options: ["USD", "EUR", "Other Currencies"],
    },
    {
      step: "Select Sending Method",
      options: ["Bank Transfer", "Card Payment", "Other Methods"],
    },
    {
      step: "Select Receiving Type",
      options: ["Crypto", "Currency"],
    },
    {
      step: "Select Receiving Crypto",
      options: ["Bitcoin", "Ethereum", "Other Cryptos"],
    },
    {
      step: "Select Receiving Currency",
      options: ["USD", "EUR", "Other Currencies"],
    },
    {
      step: "Select Receiving Method",
      options: ["Bank Deposit", "Wallet Transfer", "Other Methods"],
    },
    {
      step: "Final Submit",
      options: ["Complete Exchange"],
    },
  ],
  "/exchangelist": [
    { step: "Displays information by continent and country", options: [] },
  ],
  "/exchangerate": [
    { step: "Displays cryptocurrency and fiat currency rates", options: [] },
  ],
  "/help": [{ step: "Shows a list of available commands", options: [] }],
  "/support": [{ step: "Shows available support options", options: [] }],
};

const Documentation = () => {
  const [selectedFlow, setSelectedFlow] = React.useState<keyof Flows | "">("");

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
        <main className="max-w-7xl mx-auto p-6">
          <section>
            <h2 className="text-3xl font-semibold mb-6">Command Documentation</h2>

            {/* Flowchart for /exchange */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                /exchange Command Flow
              </h3>
              <div className="relative overflow-x-auto">
                <div className="flex items-center space-x-8">
                  {flows["/exchange"].map((flow, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      {/* Step Node */}
                      <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md text-center w-48">
                        <h4 className="text-lg font-semibold text-pink-400">
                          {flow.step}
                        </h4>
                        {flow.options.length > 0 && (
                          <ul className="mt-2 text-gray-300 space-y-1 list-disc">
                            {flow.options.map((option, i) => (
                              <li key={i}>{option}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {/* Line Connector */}
                      {idx < flows["/exchange"].length - 1 && (
                        <svg
                          className="w-10 h-10 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 12h16"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Commands */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                Other Commands
              </h3>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {Object.keys(flows).map(
                  (cmd, index) =>
                    cmd !== "/exchange" && (
                      <div
                        key={index}
                        className={`p-6 bg-gray-800 rounded-lg shadow-md transition cursor-pointer hover:bg-gray-700 ${
                          selectedFlow === cmd ? "ring-4 ring-blue-500" : ""
                        }`}
                        onClick={() => setSelectedFlow(cmd as keyof Flows)}
                      >
                        <h3 className="text-xl font-semibold text-blue-400">
                          {cmd}
                        </h3>
                        <p className="text-gray-300">
                          {flows[cmd][0]?.step || "View details about this command."}
                        </p>
                      </div>
                    )
                )}
              </div>

              {/* Selected Flow Details */}
              {selectedFlow && selectedFlow !== "/exchange" && (
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">
                    {selectedFlow} Flow
                  </h3>
                  <div className="space-y-6">
                    {flows[selectedFlow].map((flow: FlowStep, idx: number) => (
                      <div
                        key={idx}
                        className="p-6 bg-gray-800 rounded-lg shadow-lg"
                      >
                        <h4 className="text-lg font-semibold text-pink-400">
                          {flow.step}
                        </h4>
                        {flow.options.length > 0 && (
                          <ul className="mt-2 space-y-2 pl-4 text-gray-300 list-disc">
                            {flow.options.map((option: string, i: number) => (
                              <li key={i}>{option}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Documentation;
