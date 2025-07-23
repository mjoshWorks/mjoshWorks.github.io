import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="reach"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Reach Out
          </Link>
        </li>
        <li>
          <Link
            to="links"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Links
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
