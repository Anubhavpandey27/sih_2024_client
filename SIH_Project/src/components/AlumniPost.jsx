import React, { useState } from 'react';

const AlumniPost = () => {
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handlePost = () => {
    if (!postContent.trim()) {
      setFeedback('Post content cannot be empty!');
    } else {
      setPosts([...posts, postContent]); // Add the new post to the list of posts
      setPostContent(''); // Clear the textarea
      setFeedback('Post added successfully!'); // Show success message
    }
  };

  return (
    <div className="alumni-post bg-white shadow-xl rounded-lg p-6 mb-12">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Create a Post</h3>
      
      <textarea
        className="w-full h-32 p-4 mb-4 bg-gray-100 rounded-lg text-gray-800"
        placeholder="Write something here..."
        value={postContent}
        onChange={e => setPostContent(e.target.value)}
      />
      
      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg"
          onClick={handlePost}
        >
          Post
        </button>
      </div>

      {/* Feedback message */}
      {feedback && <p className="text-green-500 mt-4">{feedback}</p>}

      {/* Display the posts */}
      <div className="mt-6">
        <h4 className="text-xl font-bold mb-2">Recent Posts</h4>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
              {post}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlumniPost;
