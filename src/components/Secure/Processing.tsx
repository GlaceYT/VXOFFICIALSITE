import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CryptoPayment from "./CryptoPayment"; // Import the CryptoPayment component

interface State {
  planTitle: string;
  planPrice: string;
  expirationDate: string;
  planDuration: string;
  planFeatures: (string | null)[];
}

function Processing() {
  const location = useLocation();
  const [serverId, setServerId] = useState("");
  const [serverName, setServerName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string>("paypal");
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isTesting, setIsTesting] = useState(false);

  const state = location.state as State;
  const { planTitle, planPrice, planDuration, planFeatures } = state || {};

  const handlePayment = async () => {
    if (!serverId || !serverName || !ownerName || !ownerId) {
      alert("Please fill in all fields!");
      return;
    }
    //http://utopia.pylex.xyz:10838/api/mock-pay
    let endpoint = "";
    if (paymentMethod === "paypal") {
      endpoint = isTesting ? "http://utopia.pylex.xyz:10838/api/mock-pay" : "http://utopia.pylex.xyz:10838/api/pay";
    } else {
      alert(`Payment method ${paymentMethod} is not supported yet!`);
      return;
    }

    try {
      setPaymentStatus("Initializing payment...");
      const response = await axios.post(endpoint, {
        planTitle,
        planPrice,
        serverId,
        serverName,
        ownerName,
        ownerId,
        duration: planDuration,
      });

      if (response.data.approvalUrl) {
        if (isTesting) {
          // Open a blank testing window and close it automatically
          const testWindow = window.open("", "_blank", "width=300,height=200");
          if (testWindow) {
            testWindow.document.write("<h2 style='text-align:center;'>Mock Payment Processing...</h2>");
            setTimeout(() => {
              testWindow.close();
              setPaymentStatus("Payment Successful! Your plan has been activated.");
            }, 2000);
          }
          return;
        }

        const paymentWindow = window.open(response.data.approvalUrl, "_blank", "width=600,height=700");
        setIsWaiting(true);
        setPaymentStatus("Waiting for payment completion...");

        const interval = setInterval(async () => {
          if (paymentWindow && paymentWindow.closed) {
            clearInterval(interval);
            setIsWaiting(false);

            // Verify payment status with backend
            try {
              const statusResponse = await axios.get("http://utopia.pylex.xyz:10838/api/payment-status", {
                params: { serverId, serverName, ownerId },
              });

              if (statusResponse.data.success) {
                setPaymentStatus("Payment Successful! Your plan has been activated.");
              } else {
                setPaymentStatus("Payment failed or canceled. Please try again.");
              }
            } catch (error) {
              console.error("Failed to verify payment status:", error);
              setPaymentStatus("Error verifying payment status. Please contact support.");
            }
          }
        }, 500);
      } else {
        throw new Error("No approval URL returned.");
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
      setPaymentStatus("Payment initiation failed. Please try again.");
    }
  };

  useEffect(() => {
    if (!planTitle || !planPrice) {
      alert("Invalid plan details.");
    }
  }, [planTitle, planPrice]);

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case "paypal":
        return (
          <>
            <h3 className="text-2xl font-semibold text-center mb-4">Enter Server Details</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                type="text"
                placeholder="Server ID"
                value={serverId}
                onChange={(e) => setServerId(e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Server Name"
                value={serverName}
                onChange={(e) => setServerName(e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Owner Name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Owner ID"
                value={ownerId}
                onChange={(e) => setOwnerId(e.target.value)}
                className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handlePayment}
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              >
                Proceed to Payment
              </button>
            </form>
          </>
        );
      case "card":
        return <p className="text-gray-400">Card payment system coming soon!</p>;
      case "crypto":
        return (
          <CryptoPayment
            planTitle={planTitle}
            planPrice={planPrice}
            serverId={serverId}
            serverName={serverName}
            ownerName={ownerName}
            ownerId={ownerId}
            planDuration={planDuration}
            onPaymentStatusChange={setPaymentStatus}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="w-full max-w-lg bg-gray-800 rounded-lg p-8 shadow-lg">
        {!paymentStatus || paymentStatus === "Waiting for payment completion..." ? (
          <>
            <h1 className="text-3xl font-semibold text-center mb-4">Processing Payment</h1>
            <div className="mb-6">
              <p className="text-lg font-medium">
                <strong>Plan:</strong> {planTitle}
              </p>
              <p className="text-lg font-medium">
                <strong>Price:</strong> ${planPrice}
              </p>
              <p className="text-lg font-medium">
                <strong>Duration:</strong> {planDuration}
              </p>
              <h3 className="text-xl font-semibold mt-4">Features:</h3>
              <ul className="list-disc pl-6 mt-2">
                {planFeatures.map((feature, index) => (
                  <li key={index} className="text-sm">
                    {feature || "Not available"}
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-center mb-4">Select Payment Method</h3>
            <div className="flex space-x-4 justify-center mb-6">
              <button
                onClick={() => setPaymentMethod("paypal")}
                className={`px-4 py-2 rounded-md text-white ${
                  paymentMethod === "paypal" ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                PayPal
              </button>
              <button
                onClick={() => setPaymentMethod("card")}
                className={`px-4 py-2 rounded-md text-white ${
                  paymentMethod === "card" ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                Card
              </button>
              <button
                onClick={() => setPaymentMethod("crypto")}
                className={`px-4 py-2 rounded-md text-white ${
                  paymentMethod === "crypto" ? "bg-blue-600" : "bg-gray-700"
                }`}
              >
                Crypto
              </button>
            </div>

            <div className="flex justify-center mt-4">
              {/* <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isTesting}
                  onChange={(e) => setIsTesting(e.target.checked)}
                  className="form-checkbox text-blue-600"
                />
                <span className="text-gray-400">Enable Testing Mode</span>
              </label> */}
            </div>

            {renderPaymentForm()}

            {isWaiting && (
              <div className="mt-4 text-center">
                <p>Please check the payment window and complete your transaction.</p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-green-500">{paymentStatus}</h2>
            {paymentStatus === "Payment Successful! Your plan has been activated." && (
              <div className="text-lg mt-4">
                <p>Server Name: {serverName}</p>
                <p>Owner Name: {ownerName}</p>
                <p>Expiration Date: {planDuration}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Processing;