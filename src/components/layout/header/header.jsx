// Header.jsx

import React from 'react';
import './header.scss';
import Logo from '../../../assets/logo/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-alignment">
          <div className="logo">
            <NavLink to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <nav>
            <a href="#about">About</a>
            <a href="#issues">Issues</a>
            <a href="#news">News</a>
            <a href="#get-involved">Get Involved</a>
            <a href="#contact">
              <button>Contact Us</button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
