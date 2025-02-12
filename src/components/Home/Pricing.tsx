import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
interface Plan {
  title: string;
  price: string;
  duration: string;
  features: (string | null)[];
}

function Pricing() {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Per Week",
      price: "$2.99",
      duration: "7 Days Access",
      features: [
        "Least charges and fees",
        "Prioritized order process",
        "Prioritized support",
        "Special role in server",
        "Access to private channels",
        null, // Early bot testing opportunities
      ],
    },
    {
      title: "Per Month",
      price: "$6.99",
      duration: "30 Days Access",
      features: [
        "Least charges and fees",
        "Prioritized order process",
        "Prioritized support",
        "Early bot testing opportunities",
        "Special role in server",
        "Access to private channels",
      ],
    },
    {
      title: "Per Quarterly",
      price: "$18.69",
      duration: "90 Days Access",
      features: [
        "Least charges and fees",
        "Prioritized order process",
        "Prioritized support",
        "Early bot testing opportunities",
        "Special role in server",
        "Access to private channels",
      ],
    },
    {
      title: "Per Semi-Annually",
      price: "$29.99",
      duration: "180 Days Access",
      features: [
        "Least charges and fees",
        "Prioritized order process",
        "Prioritized support",
        "Early bot testing opportunities",
        "Special role in server",
        "Access to private channels",
      ],
    },
  ];

  const handleGetStarted = (plan: Plan) => {
    const { title, price, duration, features } = plan;
  
    // Calculate expiration date
    const durationDays = parseInt(duration.replace(/\D/g, ""), 10);
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + durationDays);
  
    navigate("/processing", {
      state: {
        planTitle: title,
        planPrice: price.replace("$", ""), // Numeric price
        expirationDate: expiration.toISOString(),
        planDuration: duration,
        planFeatures: features,
      },
    });
  };

  return (
    <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Pricing & Plans
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-400">
            Choose a plan that works best for your needs. Affordable and
            transparent pricing for everyone.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:max-w-full lg:mt-16 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="overflow-hidden bg-gray-800 border border-gray-700 rounded-md hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <h3 className="text-base font-semibold text-cyan-400">{plan.title}</h3>
                <p className="text-5xl font-bold text-white mt-7">{plan.price}</p>
                <p className="mt-3 text-base text-gray-400">{plan.duration}</p>

                <div className="mt-6 text-left">
                  {plan.features.map((feature, i) =>
                    feature ? (
                      <div key={i} className="flex items-center space-x-2">
                        <FaCheckCircle className="text-cyan-400" />
                        <p className="text-sm text-gray-400">{feature}</p>
                      </div>
                    ) : (
                      <div key={i} className="flex items-center space-x-2">
                        <FaTimesCircle className="text-red-500" />
                        <p className="text-sm text-gray-400">Not available</p>
                      </div>
                    )
                  )}
                </div>

                <button
                  onClick={() => handleGetStarted(plan)}
                  className="inline-flex items-center justify-center px-10 py-3 mt-8 text-base font-semibold text-gray-900 transition-all duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:opacity-80 cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
