import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { handleIsOpen } from '../actions/menu';

export const DropdownMenu = () => {
  return (
    <div className='dropdown-menu'>
      <button className='button dropdown-button'>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {false && (
        <ul className='open'>
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
            <li>
              <h3>Book a visit</h3>
            </li>
          </Link>
        </ul>
      )}
    </div>
  );
};
