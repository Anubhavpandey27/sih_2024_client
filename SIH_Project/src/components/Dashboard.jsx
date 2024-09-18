import React from 'react';

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Alumni Dashboard</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <DashboardCard title="Referrals Given" value={data.referralsGiven} />
        <DashboardCard title="Jobs Created" value={data.jobsCreated} />
        <DashboardCard title="Events Sponsored" value={data.eventsSponsored} />
        <DashboardCard title="Profile Views" value={data.profileViews} />
      </div>
    </div>
  );
};

const DashboardCard = ({ title, value }) => (
  <div className="bg-gray-100 p-4 rounded-lg text-center transition-transform hover:scale-105 duration-300">
    <h3 className="text-lg font-semibold mb-2 text-gray-700">{title}</h3>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
  </div>
);

export default Dashboard;
