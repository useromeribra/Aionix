import React from 'react';

interface VipDashboardProps {
  vipName: string;
}

const VipDashboard: React.FC<VipDashboardProps> = ({ vipName }) => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-yellow-600 to-red-600 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Welcome, {vipName} (VIP)!
      </h1>

      <section className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl mb-4">Exclusive VIP Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Luxury Executive Consultant</li>
          <li>Personalized Monthly Reports</li>
          <li>Secret AI Vault</li>
          <li>Exclusive Command Room</li>
          <li>VIP Networking Opportunities</li>
          <li>Advanced Security Features</li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto mt-8 flex justify-end">
        <button className="bg-yellow-400 text-red-700 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
          Upgrade VIP Plan
        </button>
      </div>
    </div>
  );
};

export default VipDashboard;
