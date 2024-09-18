import React, { useState } from 'react';

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobType, setJobType] = useState('');
  const [stipend, setStipend] = useState('');
  const [description, setDescription] = useState('');
  const [expandedJobId, setExpandedJobId] = useState(null);
  const [referredStudents, setReferredStudents] = useState({});
  const [feedback, setFeedback] = useState('');

  const demoStudents = [
    { id: 1, name: 'John Doe', atsScore: 80 },
    { id: 2, name: 'Jane Smith', atsScore: 75 },
    { id: 3, name: 'Sam Wilson', atsScore: 65 },
    { id: 4, name: 'Alex Johnson', atsScore: 70 },
  ];

  const handleAddJob = () => {
    if (!jobTitle || !companyName || !jobType || !stipend || !description) {
      setFeedback('All fields are required!');
      return;
    }

    const newJob = {
      id: jobs.length + 1,
      title: jobTitle,
      company: companyName,
      jobType,
      stipend,
      description,
      postedDate: new Date().toLocaleDateString(),
      responses: demoStudents,
    };

    setJobs([...jobs, newJob]);
    setIsModalOpen(false); // Close the modal after posting the job
    setJobTitle('');
    setCompanyName('');
    setJobType('');
    setStipend('');
    setDescription('');
    setFeedback('Job posted successfully!');
  };

  const viewResponses = (jobId) => {
    // Toggle the expanded job, ensuring only one job is expanded at a time
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  const provideReferral = (student, jobId) => {
    if (!referredStudents[jobId]) referredStudents[jobId] = [];

    if (!referredStudents[jobId].includes(student.id)) {
      referredStudents[jobId].push(student.id);
      setReferredStudents({ ...referredStudents });
      setFeedback(`You referred ${student.name} successfully!`);
    } else {
      setFeedback(`${student.name} has already been referred!`);
    }
  };

  return (
    <div className="job-portal bg-gray-100 p-6">
      {/* Header and Create Job Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Job Portal</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg"
        >
          Create Job
        </button>
      </div>

      {/* Job List - Displayed Horizontally */}
      <div className="job-list flex flex-col space-y-4 py-4">
        {jobs.length === 0 ? (
          <p>No jobs posted yet.</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job.id}
              className="job bg-white p-4 shadow-lg rounded-lg"
            >
              <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-600">{job.jobType}</p>
              <p className="text-gray-600">Stipend: {job.stipend}</p>
              <p className="text-gray-700">{job.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>Posted: {job.postedDate}</span>
              </div>

              <button
                onClick={() => viewResponses(job.id)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                {expandedJobId === job.id ? 'Hide Student Responses' : 'View Student Responses'}
              </button>

              {/* Student Responses Section */}
              {expandedJobId === job.id && (
                <div className="responses mt-4 bg-gray-100 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900">Student Responses</h4>
                  {job.responses.map((student) => (
                    <div
                      key={student.id}
                      className="flex justify-between items-center bg-white shadow-sm p-3 my-2 rounded-lg"
                    >
                      <span className="text-gray-800 font-medium">
                        {student.name} - ATS Score: {student.atsScore}%
                      </span>
                      <button
                        className={`py-1 px-3 rounded-lg font-semibold ${
                          referredStudents[job.id]?.includes(student.id)
                            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                            : student.atsScore >= 70 && student.atsScore <= 80
                            ? 'bg-green-500 hover:bg-green-600 text-white'
                            : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                        }`}
                        disabled={
                          referredStudents[job.id]?.includes(student.id) ||
                          !(student.atsScore >= 70 && student.atsScore <= 80)
                        }
                        onClick={() => provideReferral(student, job.id)}
                      >
                        {referredStudents[job.id]?.includes(student.id) ? 'Referred' : 'Provide Referral'}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Modal for Job Creation */}
      {isModalOpen && (
        <div className="modal fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Create a Job</h3>

            <input
              type="text"
              className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
              placeholder="Job Title"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />

            <input
              type="text"
              className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <input
              type="text"
              className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
              placeholder="Job Type (e.g., Full-time, Part-time)"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            />

            <input
              type="text"
              className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
              placeholder="Stipend"
              value={stipend}
              onChange={(e) => setStipend(e.target.value)}
            />

            <textarea
              className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
              placeholder="Job Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleAddJob}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Post Job
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Message */}
      {feedback && (
        <div className="mt-4 text-green-600 font-semibold">{feedback}</div>
      )}
    </div>
  );
};

export default JobPortal;
