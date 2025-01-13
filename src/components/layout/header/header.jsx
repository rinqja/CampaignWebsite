// Header.jsx

import React from 'react';
import './header.scss';
import Logo from '../../../assets/logo/logo.png';
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
            <a href="#container2">Rreth Nesh</a>
            <a href="#news">Lajme</a>
            <a href="#kontakt">
              <button>Na Kontaktoni</button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
