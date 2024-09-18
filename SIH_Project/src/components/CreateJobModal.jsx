import React, { useState } from 'react';

const CreateJobModal = ({ closeModal, addJobPost }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('');

  const handleCreateJob = () => {
    const newJob = { id: Date.now(), title, company, location, description, salary, postedDate: new Date().toISOString().split('T')[0] };
    addJobPost(newJob);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Create New Job</h2>
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={e => setCompany(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
        />
        <textarea
          placeholder="Job Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full p-4 bg-gray-100 rounded-lg"
        ></textarea>
        <div className="flex justify-end mt-4">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mr-4" onClick={closeModal}>
            Cancel
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg" onClick={handleCreateJob}>
            Create Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateJobModal;
