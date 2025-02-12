import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Home/Footer';

interface Transaction {
  _id: string;
  userId: string;
  username: string;
  serverId: string;
  serverName: string;
  ownerId: string;
  ownerName: string;
  status: string;
  userType: string;
  createdAt: string;
  type: string;
  sendingDetails: Record<string, string>;
  receivingDetails: Record<string, string>;
  country: string;
  sendCurrency?: string;
  receiveCurrency?: string;
  sendMethod: string;
  receiveMethod: string;
  receiveCountry: string;
}

const Vouches: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://vxbot-58t6.onrender.com/api/transactions');
        setTransactions(response.data); // Limit to 3 transactions
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const getTransactionFlow = (transaction: Transaction) => {
    if (transaction.sendCurrency && transaction.receiveCurrency) {
      return `${transaction.sendCurrency} (Currency) → ${transaction.receiveCurrency} (Currency)`;
    } else {
      return 'Transaction flow data not available';
    }
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome to the Vouches Page!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <div
                key={transaction._id}
                className="bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">🎉 Transaction Successful</h3>
                <p className="mb-2"><strong>User:</strong> {transaction.username}</p>
                <p className="mb-2"><strong>Transaction Flow:</strong> {getTransactionFlow(transaction)}</p>
                {transaction.country && <p className="mb-2"><strong>Initiating Country:</strong> {transaction.country}</p>}
                {transaction.receiveCountry && (
                  <p className="mb-2"><strong>Receiving Country:</strong> {transaction.receiveCountry}</p>
                )}
                {transaction.sendMethod && <p className="mb-2"><strong>Send Method:</strong> {transaction.sendMethod}</p>}
                {transaction.receiveMethod && (
                  <p className="mb-2"><strong>Receive Method:</strong> {transaction.receiveMethod}</p>
                )}
                <p className="mb-2">
                  <strong>User Type:</strong>{' '}
                  {transaction.userType === 'Premium' ? '🌟 Premium' : '🆓 Free'}
                </p>
                <p className="mb-2">
                  <strong>Date:</strong> {new Date(transaction.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No completed transactions to display.</p>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Vouches;
