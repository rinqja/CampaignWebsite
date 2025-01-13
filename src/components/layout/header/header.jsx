import React from 'react'
import './header.scss';
import Logo from '../../../assets/logo/ldklogo.png';
import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <div>
      <header>
        <div className='container'>
          <div className='header-alignment'>
            <div className='logo'>
              <NavLink to="/">
                <img src={Logo} alt="Logo" style={{ width: '20%', height: '30%' }} />
              </NavLink>
            </div>
            <nav>
              <a href="#uberuns">Rreth meje</a>
              <a href="#referenzen">Biografi</a>
              {/* <a href="#Leistungen">Leistungen</a> */}
              <a href='#faq'>Partia</a>
              <a href="#kontact">
                Sygjerime
              </a>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
