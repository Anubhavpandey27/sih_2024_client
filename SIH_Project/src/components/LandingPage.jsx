import React, { useState, useEffect } from 'react';
import JobPost from './JobPost';
import Dashboard from './Dashboard';
import EventSection from './EventSection';
import AlumniPost from './AlumniPost';
import clgLogo from '../assets/Images/GECG_logo.png'
const LandingPage = () => {
  const [user, setUser] = useState({ name: 'Alumni User' });

  const [jobPosts, setJobPosts] = useState([
    { id: 1, title: 'Frontend Developer', company: 'WebInOrbit', location: 'Remote', description: 'Looking for a passionate frontend developer.', salary: '$75,000 - $110,000', postedDate: '2024-09-18' },
    { id: 2, title: 'Data Scientist', company: 'Tech Co', location: 'San Francisco, CA', description: 'Looking for a data-driven individual.', salary: '$85,000 - $130,000', postedDate: '2024-09-17' },
  ]);

  const [dashboardData, setDashboardData] = useState({
    referralsGiven: 2,
    jobsCreated: 5,
    eventsSponsored: 1,
    profileViews: 52
  });

  const handleSignout = () => {
    localStorage.removeItem('jwtToken'); 
    window.location.href = '/'; 
  };
  

  const [events, setEvents] = useState([
    { id: 1, title: 'Hackathon 2024', description: 'Annual college hackathon event', date: '2024-10-01', location: 'Campus Auditorium' },
    { id: 2, title: 'Alumni Meetup', description: 'Networking event for alumni and students.', date: '2024-11-15', location: 'City Convention Center' },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100">
      <header className="w-full p-4 flex  items-center">
        <div className="bg-white border border-gray-300 rounded-full px-4 mx-4 py-2 flex items-center">
          <span className="font-bold text-gray-800">AlumniConnect</span>
          <span className="ml-1 text-orange-500">🤝</span>
        </div>
        <div className="text-gray-600 italic flex items-center">
          <span className='hidden md:block'>Government Engineering College, Gandhinagar</span>
          <img src={clgLogo} alt="" className='h-16 w-16 mx-2'/>
        </div>

        <button onClick = {handleSignout} className='absolute right-6 m-2 p-2 border-2 border-black rounded-xl bg-white font-bold hover:bg-black hover:text-white'>Sign Out</button>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome, {user.name}!</h1>

        {/* Alumni Dashboard Section */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Alumni Dashboard</h2>
          <Dashboard data={dashboardData} />
        </section>

        {/* Job Postings Section */}
        <section className="job-posts mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Job Postings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobPosts.map(job => (
              <JobPost key={job.id} job={job} />
            ))}
          </div>
        </section>

        {/* Alumni Events Section */}
        <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
          <EventSection events={events} />
        </section>

        {/* Alumni Post Section */}
        <section className="alumni-posts bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Alumni Posts</h2>
          <AlumniPost />
        </section>
      </main>
    </div>
  );
};

export default LandingPage;