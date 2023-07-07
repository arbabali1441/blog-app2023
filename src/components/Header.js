import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for Header styles

function Header() {
  return (
    <header className="header">
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
