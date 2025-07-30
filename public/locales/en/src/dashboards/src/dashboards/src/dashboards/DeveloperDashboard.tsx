import React from 'react';

interface DeveloperDashboardProps {
  devName: string;
}

const DeveloperDashboard: React.FC<DeveloperDashboardProps> = ({ devName }) => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-800 to-blue-900 text-white">
      <h1 className="text-4xl font-bold mb-6">
        Welcome, {devName} (Developer)!
      </h1>

      <section className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl mb-4">Developer Tools & Studio</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Smart Assistant Editor</li>
          <li>Idea & Code Generator</li>
          <li>Publish Services to Marketplace</li>
          <li>Receive Job Offers</li>
          <li>Community Developer Support</li>
          <li>Ready-to-Edit & Sell Projects</li>
        </ul>
      </section>

      <div className="max-w-4xl mx-auto mt-8 flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-semibold">
          Upgrade Developer Plan
        </button>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
