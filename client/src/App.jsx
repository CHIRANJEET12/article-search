import React, { useState } from 'react';
import './App.css';

const BlogSearch = () => {
  // Sample blog data
  const blogs = [
    { id: 1, title: 'React Basics', content: 'Learn the basics of React.' },
    { id: 2, title: 'Advanced React', content: 'Dive deep into React hooks.' },
    { id: 3, title: 'React and Redux', content: 'Manage state with Redux.' },
    // Add more blog entries as needed
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterBlogs(query);
  };

  const filterBlogs = (query) => {
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(query.toLowerCase()) ||
      blog.content.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Search blogs..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredBlogs.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSearch;
