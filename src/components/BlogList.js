import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  useEffect(() => {
    // Add your side effect code here
    // For example, fetching blog posts
  }, []);

  return (
    <div>
      <h2>Blog List</h2>
      {/* Render your blog posts */}
      <Link to="/create">Create New Blog</Link>
    </div>
  );
}

export default BlogList;
