import React from 'react';

// Dummy data representing posts made by alumni
const dummyPosts = [
  { id: 1, content: 'Excited to share our new project milestone! 🎉' },
  { id: 2, content: 'Looking for feedback on my latest research paper. 📚' },
  { id: 3, content: 'Great networking opportunity at the upcoming conference. Join us! 🌟' }
];

const AlumniPost = () => {
  return (
    <div className="alumni-post bg-white shadow-xl rounded-lg p-6 mb-12">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">Alumni Posts</h3>

      {/* Display the posts */}
      <div className="mt-6">
        <h4 className="text-xl font-bold mb-2">Recent Posts</h4>
        {dummyPosts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          dummyPosts.map((post, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
              {post.content}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlumniPost;
