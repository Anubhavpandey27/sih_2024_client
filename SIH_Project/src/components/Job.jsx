import React, { useState } from 'react';

const JobPost = ({ job, onApply }) => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [resume, setResume] = useState('');

  const handleApply = () => {
    if (resume) {
      onApply(job.id);
      setIsApplyModalOpen(false);
    } else {
      alert('Please upload a resume.');
    }
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
      <p className="text-gray-700">{job.company}</p>
      <p className="text-gray-600">Location: {job.location}</p>
      <p className="text-gray-700">{job.description}</p>
      <button
        onClick={() => setIsApplyModalOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
      >
        Apply
      </button>

      {/* Job Apply Modal */}
      {isApplyModalOpen && (
        <div className="modal fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Apply for {job.title}</h3>
            <input
              type="file"
              className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
              onChange={(e) => setResume(e.target.files[0])}
            />
            <button
              onClick={handleApply}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Submit Application
            </button>
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg ml-4"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPost;
