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
  return (
    <div className='dropdown-menu'>
      <button className='button dropdown-button' onClick={() => handleIsOpen()}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isOpen && (
        <ul className='open'>
          <li onClick={() => handleIsOpen()}>
            <Link to='/'>
              <h3>Home</h3>
            </Link>
          </li>
          <li onClick={() => handleIsOpen()}>
            <Link to='/doctors'>
              <h3>Doctors</h3>
            </Link>
          </li>
          <li onClick={() => handleIsOpen()}>
            <Link to='/about'>
              <h3>About us</h3>
            </Link>
          </li>
          <li onClick={() => handleIsOpen()}>
            <Link to='/contact'>
              <h3>Contact</h3>
            </Link>
          </li>
          <li className='button' onClick={() => handleIsOpen()}>
            <Link to='/book'>
              <h3>Book a visit</h3>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state: {
  menu: { isOpen: boolean; isOpenDocotors: boolean };
}) => {
  return {
    isOpen: state.menu.isOpen,
  };
};

const connector = connect(mapStateToProps, {
  handleIsOpen,
});

export default connector(DropdownMenu);
