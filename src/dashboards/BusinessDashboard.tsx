import React, { useState } from "react";

interface Developer {
  id: string;
  name: string;
  skills: string[];
  rating: number;
}

interface BusinessDashboardProps {
  companyName: string;
  subscriptionPlan: string;
  marketingAdsCount: number;
}

const initialTopDevelopers: Developer[] = [
  { id: "dev001", name: "Ahmed", skills: ["React", "Node.js"], rating: 4.9 },
  { id: "dev002", name: "Lina", skills: ["Python", "AI"], rating: 4.8 },
  { id: "dev003", name: "Samir", skills: ["Go", "Microservices"], rating: 4.7 },
  { id: "dev004", name: "Fatima", skills: ["Java", "Spring"], rating: 4.6 },
  { id: "dev005", name: "Omar", skills: ["Kotlin", "Android"], rating: 4.9 },
  { id: "dev006", name: "Sara", skills: ["Swift", "iOS"], rating: 4.8 },
  { id: "dev007", name: "Khaled", skills: ["AWS", "DevOps"], rating: 4.7 },
  { id: "dev008", name: "Mona", skills: ["UX/UI", "Design"], rating: 4.6 },
  { id: "dev009", name: "Tariq", skills: ["C#", ".NET"], rating: 4.5 },
  { id: "dev010", name: "Hana", skills: ["Data Science", "R"], rating: 4.7 },
];

const BusinessDashboard: React.FC<BusinessDashboardProps> = ({
  companyName,
  subscriptionPlan,
  marketingAdsCount,
}) => {
  const [topDevelopers, setTopDevelopers] = useState<Developer[]>(initialTopDevelopers);

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-900 to-indigo-800 text-white font-sans">
      <h1 className="text-4xl font-bold mb-8">{companyName} - Business Hub</h1>

      {/* بيانات الشركة */}
      <section className="mb-10 max-w-7xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl mb-4 font-semibold">Company Overview</h2>
        <p>Subscription Plan: <strong>{subscriptionPlan}</strong></p>
        <p>Marketing Ads Active Today: <strong>{marketingAdsCount}</strong></p>
      </section>

      {/* أفضل المطورين */}
      <section className="mb-10 max-w-7xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl mb-6 font-semibold">Top 10 Developers (Monthly)</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topDevelopers.map((dev) => (
            <li key={dev.id} className="bg-gray-800 rounded-lg p-4 shadow hover:bg-gray-700 transition">
              <h3 className="text-xl font-bold">{dev.name}</h3>
              <p>Skills: {dev.skills.join(", ")}</p>
              <p>Rating: {dev.rating.toFixed(1)}</p>
              <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow">
                Hire Developer
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* أدوات بناء حلول AI */}
      <section className="mb-10 max-w-7xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl mb-6 font-semibold">AI Solutions Builder</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded shadow">
          Build Custom AI Solution
        </button>
      </section>
    </div>
  );
};

export default BusinessDashboard;
