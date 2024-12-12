
import Footer from "../components/Home/Footer";
import Navbar from "../components/Navbar";

const commands = [
  { command: "/add-premium-server", description: "Add a server to the premium list." },
  { command: "/delete-premium-server", description: "Remove a server from the premium list." },
  { command: "/exchange", description: "Initiate a currency or cryptocurrency exchange transaction." },
  { command: "/exchangelist", description: "View exchange information by continent and country." },
  { command: "/exchangerate", description: "View cryptocurrency and fiat currency rates." },
  { command: "/help", description: "Displays a list of available commands." },
  { command: "/modmail", description: "Manage modmail in the current transaction channel." },
  { command: "/ratings", description: "View all ratings." },
  { command: "/support", description: "Displays the support options for the bot." },
  { command: "/transactions", description: "View and manage all transactions." },
  { command: "/view-premium-servers", description: "View all premium servers." },
];

const Documentation = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <main className="max-w-4xl mx-auto p-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Command List</h2>
          <ul className="space-y-4">
            {commands.map((cmd, index) => (
              <li
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
              >
                <div className="flex flex-col">
                  <span className="text-lg font-medium text-blue-400">{cmd.command}</span>
                  <p className="text-gray-300">{cmd.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
    <Footer/>
    </>
  );
};

export default Documentation;
