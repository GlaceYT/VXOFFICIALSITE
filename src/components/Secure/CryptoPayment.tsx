import { useState, Dispatch, SetStateAction } from "react";
import axios from "axios";

interface CryptoPaymentProps {
  planTitle: string;
  planPrice: string;
  planDuration: string;
  serverId: string;
  serverName: string;
  ownerName: string;
  ownerId: string;
  onPaymentStatusChange: Dispatch<SetStateAction<string | null>>;
}

const CryptoPayment: React.FC<CryptoPaymentProps> = ({
  planTitle,
  planPrice,
  planDuration,
  serverId,
  serverName,
  ownerName,
  ownerId,
  onPaymentStatusChange,
}) => {
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [currency, setCurrency] = useState<string>("BTC");

  const handleCryptoPayment = async () => {
    try {
      onPaymentStatusChange("Initializing crypto payment...");

      const response = await axios.post("http://utopia.pylex.xyz:10838/api/coinpayments-pay", {
        planTitle,
        planPrice,
        serverId,
        serverName,
        ownerName,
        ownerId,
        duration: planDuration,
        currency, // Include the selected currency
      });

      const { paymentUrl, invoiceId } = response.data;
      setPaymentUrl(paymentUrl);

      const paymentWindow = window.open(paymentUrl, "_blank", "width=600,height=700");
      setIsWaiting(true);
      onPaymentStatusChange("Waiting for payment confirmation...");

      const interval = setInterval(async () => {
        if (paymentWindow && paymentWindow.closed) {
          clearInterval(interval);
          setIsWaiting(false);

          try {
            const statusResponse = await axios.get("http://utopia.pylex.xyz:10838/api/coinpayments-status", {
              params: { invoiceId },
            });

            if (statusResponse.data.success) {
              onPaymentStatusChange("Payment Successful! Your plan has been activated.");
            } else {
              onPaymentStatusChange("Payment failed or canceled. Please try again.");
            }
          } catch (error) {
            onPaymentStatusChange("Error verifying payment status. Please contact support.");
          }
        }
      }, 5000);
    } catch (error) {
      onPaymentStatusChange("Failed to initiate crypto payment. Please try again.");
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-center mb-4">Enter Server Details</h3>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input
          type="text"
          placeholder="Server ID"
          value={serverId}
          readOnly
          className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Server Name"
          value={serverName}
          readOnly
          className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Owner Name"
          value={ownerName}
          readOnly
          className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Owner ID"
          value={ownerId}
          readOnly
          className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="BTC">Bitcoin (BTC)</option>
          <option value="LTC">Litecoin (LTC)</option>
        </select>
        <button
          type="button"
          onClick={handleCryptoPayment}
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Proceed to Crypto Payment
        </button>
      </form>
      {paymentUrl && (
        <div className="mt-4 text-center">
          <p>
            Pay using the following link:{" "}
            <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
              {paymentUrl}
            </a>
          </p>
        </div>
      )}
      {isWaiting && (
        <div className="mt-4 text-center">
          <p>Please check the payment window and complete your transaction.</p>
        </div>
      )}
    </div>
  );
};

export default CryptoPayment;