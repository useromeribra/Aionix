import React from 'react';

interface BusinessDashboardProps {
  companyName: string;
}

const BusinessDashboard: React.FC<BusinessDashboardProps> = ({ companyName }) => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-green-700 to-blue-700 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Welcome, {companyName}!
      </h1>

      <section className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl mb-4">Your Business Tools</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Hire top developers</li>
          <li>Smart marketing campaigns</li>
          <li>Custom AI solutions</li>
          <li>Company analytics dashboard</li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto mt-8 flex justify-between items-center">
        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
          Upgrade Plan
        </button>

        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded font-semibold">
          Manage Ads
        </button>
      </div>
    </div>
  );
};

export default BusinessDashboard;
