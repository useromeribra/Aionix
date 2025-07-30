import React, { useState } from "react";

interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface UserSubscription {
  userId: string;
  userName: string;
  planId: string;
  status: "active" | "pending" | "cancelled";
}

interface AiStaff {
  id: string;
  name: string;
  role: string;
  description: string;
}

const initialPlans: SubscriptionPlan[] = [
  { id: "vip", name: "VIP Plan", price: 100, description: "Exclusive VIP benefits" },
  { id: "business", name: "Business Plan", price: 50, description: "For Companies" },
  { id: "developer", name: "Developer Plan", price: 30, description: "For Developers" },
  { id: "basic", name: "Basic Plan", price: 10, description: "Standard User" },
];

const initialSubscriptions: UserSubscription[] = [
  { userId: "u001", userName: "Omer", planId: "vip", status: "active" },
  { userId: "u002", userName: "Sara", planId: "business", status: "pending" },
  { userId: "u003", userName: "Ali", planId: "developer", status: "active" },
];

const initialAiStaff: AiStaff[] = [
  { id: "ai001", name: "Naaira", role: "Chief Protection Officer", description: "Oversees system protection and security." },
  { id: "ai002", name: "King of Marketing", role: "Global Marketing Manager", description: "Manages all marketing campaigns worldwide." },
  { id: "ai003", name: "Guardian AI", role: "Account Recovery & Protection", description: "Handles account recovery and general protection." },
  { id: "ai004", name: "AI COO", role: "Startup Project Manager", description: "Manages startup projects and operational tasks." },
];

const FounderDashboard: React.FC = () => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>(initialPlans);
  const [subscriptions, setSubscriptions] = useState<UserSubscription[]>(initialSubscriptions);
  const [aiStaff, setAiStaff] = useState<AiStaff[]>(initialAiStaff);

  // وظائف التعديل والحذف والإضافة ممكن تضاف لاحقاً مع ربط API

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-gray-900 to-black text-white font-sans">
      <h1 className="text-4xl font-bold mb-8">Founder Dashboard - Aionix</h1>

      {/* خطط الاشتراك */}
      <section className="mb-10 max-w-7xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl mb-6 font-semibold">Subscription Plans</h2>
        <table className="w-full text-left border-collapse border border-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800">
              <th className="py-3 px-6 border border-gray-700">Plan Name</th>
              <th className="py-3 px-6 border border-gray-700">Price ($)</th>
              <th className="py-3 px-6 border border-gray-700">Description</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id} className="border border-gray-700 hover:bg-gray-800 transition">
                <td className="py-3 px-6 border border-gray-700">{plan.name}</td>
                <td className="py-3 px-6 border border-gray-700">{plan.price}</td>
                <td className="py-3 px-6 border border-gray-700">{plan.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* اشتراكات المستخدمين */}
      <section className="mb-10 max-w-7xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl mb-6 font-semibold">User Subscriptions</h2>
        <table className="w-full text-left border-collapse border border-gray-700 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800">
              <th className="py-3 px-6 border border-gray-700">User Name</th>
              <th className="py-3 px-6 border border-gray-700">Plan</th>
              <th className="py-3 px-6 border border-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub) => {
              const plan = plans.find((p) => p.id === sub.planId);
              return (
                <tr key={sub.userId} className="border border-gray-700 hover:bg-gray-800 transition">
                  <td className="py-3 px-6 border border-gray-700">{sub.userName}</td>
                  <td className="py-3 px-6 border border-gray-700">{plan?.name}</td>
                  <td className="py-3 px-6 border border-gray-700 capitalize">{sub.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* موظفي الذكاء الاصطناعي */}
      <section className="mb-10 max-w-7xl mx-auto bg-white bg-opacity-10 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl mb-6 font-semibold">AI Staff Overview</h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          {aiStaff.map((staff) => (
            <li key={staff.id}>
              <strong>{staff.name}</strong> - <em>{staff.role}</em>: {staff.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FounderDashboard;
