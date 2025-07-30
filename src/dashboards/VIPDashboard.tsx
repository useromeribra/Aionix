import React from "react";

interface VIPDashboardProps {
  userName: string;
  vipLevel: string;
  reportsAvailable: number;
}

const VIPServices = [
  "Exclusive Executive Advisor",
  "Customized Monthly Reports",
  "Secret AI Vault",
  "Luxury Command Room",
  "VIP Networking",
  "Advanced Security & Smart Assistance",
];

const VIPDashboard: React.FC<VIPDashboardProps> = ({ userName, vipLevel, reportsAvailable }) => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-yellow-800 to-red-600 text-white font-sans">
      <h1 className="text-4xl font-bold mb-8">Welcome VIP, {userName}</h1>
      <section className="max-w-6xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg mb-10">
        <h2 className="text-3xl mb-4 font-semibold">Your VIP Level: {vipLevel}</h2>
        <p>Reports Available: <strong>{reportsAvailable}</strong></p>
      </section>

      <section className="max-w-6xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl mb-6 font-semibold">Exclusive VIP Services</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          {VIPServices.map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default VIPDashboard;
