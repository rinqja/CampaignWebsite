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
            <a href="#about">Rreth Nesh</a>
            <a href="#issues">Çështjet</a>
            <a href="#news">Lajme</a>
            <a href="#get-involved">Bashkohuni</a>
            <a href="#contact">
              <button>Na Kontaktoni</button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
