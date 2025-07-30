import React from "react";

interface DeveloperDashboardProps {
  devName: string;
  currentProjects: number;
  pendingJobOffers: number;
}

const DeveloperTools = [
  "AI Assistant Editor",
  "Idea & Solution Generator",
  "Code Snippets & Templates",
  "Publish Services to Marketplace",
  "View & Manage Job Offers",
  "Community Support Forum",
  "Ready-to-Edit Projects",
];

const DeveloperDashboard: React.FC<DeveloperDashboardProps> = ({
  devName,
  currentProjects,
  pendingJobOffers,
}) => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-green-700 to-teal-600 text-white font-sans">
      <h1 className="text-4xl font-bold mb-8">Welcome Developer, {devName}</h1>

      <section className="mb-10 max-w-6xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl mb-4 font-semibold">Your Developer Stats</h2>
        <p>Active Projects: <strong>{currentProjects}</strong></p>
        <p>Pending Job Offers: <strong>{pendingJobOffers}</strong></p>
      </section>

      <section className="max-w-6xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl mb-6 font-semibold">Developer Tools & Features</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
          {DeveloperTools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DeveloperDashboard;
