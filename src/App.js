import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/create" element={<BlogForm />} />
      </Routes>
    </Router>
  );
}

export default App;
