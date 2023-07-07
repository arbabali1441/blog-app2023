import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
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
