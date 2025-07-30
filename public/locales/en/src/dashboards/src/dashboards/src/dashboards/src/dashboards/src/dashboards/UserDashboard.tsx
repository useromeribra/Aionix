import React from "react";

interface UserDashboardProps {
  userName: string;
  currentPlan: string;
  subscriptionStatus: string;
}

const dailySmartTools = [
  "Create and sell AI services",
  "Use AI Service Generator",
  "Apply for jobs",
  "Join Aionix Community",
];

const UserDashboard: React.FC<UserDashboardProps> = ({
  userName,
  currentPlan,
  subscriptionStatus,
}) => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-700 to-pink-600 text-white font-sans">
      <h1 className="text-4xl font-bold mb-8">Welcome, {userName}!</h1>

      {/* بيانات الاشتراك */}
      <section className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg max-w-5xl mx-auto mb-10">
        <h2 className="text-3xl mb-4 font-semibold">Your Subscription</h2>
        <p>
          Plan: <strong>{currentPlan}</strong>
        </p>
        <p>
          Status: <strong>{subscriptionStatus}</strong>
        </p>
      </section>

      {/* الأدوات اليومية الذكية */}
      <section className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg max-w-5xl mx-auto mb-10">
        <h2 className="text-3xl mb-4 font-semibold">Daily Smart Tools</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          {dailySmartTools.map((tool, idx) => (
            <li key={idx}>{tool}</li>
          ))}
        </ul>
      </section>

      {/* أزرار الإجراءات */}
      <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded shadow transition">
          Create AI Service
        </button>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded shadow transition">
          Sell Your Service
        </button>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded shadow transition">
          Apply for Jobs
        </button>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded shadow transition">
          Join Community
        </button>
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded shadow transition">
          Upgrade Subscription
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
