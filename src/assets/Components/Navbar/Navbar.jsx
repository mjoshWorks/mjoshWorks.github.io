import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Mobile menu toggle */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="reach" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
            Reach Out
          </Link>
        </li>
        <li>
          <Link to="sociallinks" smooth={true} duration={500} offset={-70} onClick={closeMenu}>
            Links
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
