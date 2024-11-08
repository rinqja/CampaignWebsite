import React from 'react'
import './header.scss';
import Logo from '../../../assets/logo/logo.svg';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <header>
        <div className='container'>
          <div className='header-alignment'>
            <div className='logo'>
              <NavLink to="/">
              <img src={Logo} alt="Logo"/>
              </NavLink>
            </div>
            <nav>
              <a href="#uberuns">Über uns</a>
              <a href="#referenzen">Referenzen</a>
              <a href="#Leistungen">Leistungen</a>
              <a href='#faq'>FAQ</a>
              <a href="#kontact">
              <button>Erstgespräch vereinbaren</button>
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
