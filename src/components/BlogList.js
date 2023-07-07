import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function BlogList() {
  return (
    <div className="blog-list-container">
      <h2 className="blog-list-title">Blog List</h2>
      <Link to="/create" className="create-blog-link">
        Create New Blog
      </Link>
    </div>
  );
}

export default BlogList;
