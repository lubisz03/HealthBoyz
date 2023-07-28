import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

export const Header = () => {
  let isMobile: boolean;
  isMobile = window.innerWidth <= 450;

  return (
    <header>
      <div className='content-container header-container'>
        <NavLink to='/'>
          <h1>HealthBoyz</h1>
        </NavLink>
        {isMobile ? (
          <DropdownMenu />
        ) : (
          <ul className='desktop-menu'>
            <li>
              <NavLink to='/'>
                <h3>Home</h3>
              </NavLink>
            </li>
            <li>
              <NavLink to='/doctors'>
                <h3>Doctors</h3>
              </NavLink>
            </li>
            <li>
              <NavLink to='/about'>
                <h3>About us</h3>
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact'>
                <h3>Contact</h3>
              </NavLink>
            </li>
            <li className='button header-button'>
              <NavLink to='/book' className='link'>
                <h3>Book a visit</h3>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};
