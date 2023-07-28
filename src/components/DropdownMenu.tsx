import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect, ConnectedProps } from 'react-redux';
import { handleIsOpen, HandleIsOpenAction } from '../actions/actions';

interface PropsType {
  isOpen: boolean;
  handleIsOpen: typeof handleIsOpen;
}

const DropdownMenu: React.FC<PropsType> = ({ isOpen, handleIsOpen }) => {
  console.log(isOpen);
  return (
    <div className='dropdown-menu'>
      <button className='button dropdown-button' onClick={() => handleIsOpen()}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
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

const mapStateToProps = (state: { isOpen: boolean }) => {
  return {
    isOpen: state.isOpen,
  };
};

const connector = connect(mapStateToProps, {
  handleIsOpen,
});

export default connector(DropdownMenu);
