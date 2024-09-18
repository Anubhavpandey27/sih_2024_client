import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [similarityScore, setSimilarityScore] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('job_description', jobDescription);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSimilarityScore(response.data.similarity_score);
      setError('');
    } catch (err) {
      setError('Error uploading file or calculating similarity.');
      setSimilarityScore(null);
    }
  };

  return (
    <div>
      <h1>Resume Similarity Checker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="resume">Upload Resume (PDF):</label>
          <input type="file" name="resume" id="resume" accept=".pdf" onChange={handleFileChange} required />
        </div>
        <div>
          <label htmlFor="job_description">Job Description:</label>
          <textarea name="job_description" id="job_description" rows="10" cols="50" onChange={handleDescriptionChange} required></textarea>
        </div>
        <button type="submit">Check Similarity</button>
      </form>
      {similarityScore !== null && (
        <div>
          <h2>Similarity Score: {similarityScore}</h2>
        </div>
      )}
      {error && (
        <div>
          <h2>{error}</h2>
        </div>
      )}
    </div>
  );
};

export default UploadForm;