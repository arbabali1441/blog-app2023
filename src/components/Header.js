import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <h1 className="logo-name">arbab-blog</h1>
      </div>
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/" className="menu-link">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/blogs" className="menu-link">Blogs</Link>
          </li>
          <li className="menu-item">
            <Link to="/login" className="menu-link">Login</Link>
          </li>
          <li className="menu-item">
            <Link to="/register" className="menu-link">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
