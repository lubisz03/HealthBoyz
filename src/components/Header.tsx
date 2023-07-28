import * as React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

export const Header = () => {
  let isMobile: boolean;
  isMobile = window.innerWidth <= 450;

  return (
    <header>
      <div className='content-container header-container'>
        <Link to='/'>
          <h1>HealthBoyz</h1>
        </Link>
        {isMobile ? (
          <DropdownMenu />
        ) : (
          <ul className='desktop-menu'>
            <Link to='/'>
              <li>
                <h3>Home</h3>
              </li>
            </Link>
            <Link to='/doctors'>
              <li>
                <h3>Doctors</h3>
              </li>
            </Link>
            <Link to='/about'>
              <li>
                <h3>About us</h3>
              </li>
            </Link>
            <Link to='/contact'>
              <li>
                <h3>Contact</h3>
              </li>
            </Link>
            <Link to='/book'>
              <li className='button header-button'>
                <h3>Book a visit</h3>
              </li>
            </Link>
          </ul>
        )}
      </div>
    </header>
  );
};
