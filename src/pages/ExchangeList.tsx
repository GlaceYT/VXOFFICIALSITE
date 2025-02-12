import React, { useState } from 'react';
import Navbar from '../components/Navbar';

interface ExchangeData {
  cryptos: {
    [key: string]: {
      send: string[];
      receive: string[];
    };
  };
  continents: {
    [key: string]: string[];
  };
  currencies: {
    [key: string]: string;
  };
  methodDetails: {
    [key: string]: string;
  };
}

const exchangeData: ExchangeData = {
  cryptos: {
    Bitcoin: {
      send: ["BTC Wallet Transfer", "QR Code Scan"],
      receive: ["Wallet Address", "QR Code Scan"]
    },
    Ethereum: {
      send: ["ETH Wallet Transfer", "Smart Contract Transfer"],
      receive: ["Wallet Address", "Smart Contract Transfer"]
    },
    USDT: {
      send: ["TRC-20 Transfer", "ERC-20 Transfer"],
      receive: ["TRC-20 Wallet", "ERC-20 Wallet"]
    }
  },
  continents: {
    International: [],
    Asia: ["China", "India", "Japan"],
    Africa: ["Nigeria", "South Africa", "Egypt"],
    "North America": ["United States", "Canada", "Mexico"],
    "South America": ["Brazil", "Argentina", "Chile"],
    Antarctica: [],
    Europe: ["Germany", "France", "United Kingdom"],
    "Australia/Oceania": ["Australia", "New Zealand", "Fiji"]
  },
  currencies: {
    China: "CNY",
    India: "INR",
    Japan: "JPY",
    Nigeria: "NGN",
    "South Africa": "ZAR",
    Egypt: "EGP",
    "United States": "USD",
    Canada: "CAD",
    Mexico: "MXN",
    Brazil: "BRL",
    Argentina: "ARS",
    Chile: "CLP",
    Germany: "EUR",
    France: "EUR",
    "United Kingdom": "GBP",
    Australia: "AUD",
    "New Zealand": "NZD",
    Fiji: "FJD"
  },
  methodDetails: {
    UPI: "UPI ID: shiva@ybl",
    "Bank Transfer": "Account No: 12345678, IFSC: ABCD0123456",
    "Cash Pickup": "Provide valid government ID.",
    "Wire Transfer": "SWIFT Code required for international transactions.",
    "Credit Card": "Only Visa and MasterCard are supported.",
    "ACH Transfer": "ACH -12415551"
  }
};

const ExchangeList: React.FC = () => {
  const [selectedContinent, setSelectedContinent] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);

  const handleContinentClick = (continent: string) => {
    setSelectedContinent(continent);
    setSelectedCountry(null);
    setSelectedCrypto(null);
  };

  const handleCountryClick = (country: string) => {
    setSelectedCountry(country);
    setSelectedCrypto(null);
  };

  const handleCryptoClick = (crypto: string) => {
    setSelectedCrypto(crypto);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="py-10 text-center">
          <h1 className="text-4xl font-bold">Exchange List</h1>
          <p className="mt-2 text-lg text-gray-400">Choose your preferred exchange option</p>
        </header>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Continents</h2>
              <ul className="space-y-2">
                {Object.keys(exchangeData.continents).map((continent) => (
                  <li
                    key={continent}
                    className={`cursor-pointer p-2 rounded transition-all duration-200 ${selectedContinent === continent ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    onClick={() => handleContinentClick(continent)}
                  >
                    {continent}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Countries</h2>
              {selectedContinent ? (
                <ul className="space-y-2">
                  {exchangeData.continents[selectedContinent].map((country) => (
                    <li
                      key={country}
                      className={`cursor-pointer p-2 rounded transition-all duration-200 ${selectedCountry === country ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                      onClick={() => handleCountryClick(country)}
                    >
                      {country}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">Select a continent to see countries</p>
              )}
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Cryptos</h2>
              <ul className="space-y-2">
                {Object.keys(exchangeData.cryptos).map((crypto) => (
                  <li
                    key={crypto}
                    className={`cursor-pointer p-2 rounded transition-all duration-200 ${selectedCrypto === crypto ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                    onClick={() => handleCryptoClick(crypto)}
                  >
                    {crypto}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {selectedCountry && (
            <div className="bg-gray-800 p-4 rounded-lg mt-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedCountry}</h3>
              <p className="text-gray-400">Currency: {exchangeData.currencies[selectedCountry]}</p>
              <h4 className="mt-4 text-lg font-semibold">Methods:</h4>
              <ul className="space-y-2">
                {Object.keys(exchangeData.methodDetails).map((method) => (
                  <li key={method} className="bg-gray-700 p-2 rounded">
                    <strong>{method}:</strong> {exchangeData.methodDetails[method]}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedCrypto && (
            <div className="bg-gray-800 p-4 rounded-lg mt-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedCrypto}</h3>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Send Methods:</h4>
                <ul className="space-y-2">
                  {exchangeData.cryptos[selectedCrypto].send.map((method) => (
                    <li key={method} className="bg-gray-700 p-2 rounded">
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Receive Methods:</h4>
                <ul className="space-y-2">
                  {exchangeData.cryptos[selectedCrypto].receive.map((method) => (
                    <li key={method} className="bg-gray-700 p-2 rounded">
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExchangeList;