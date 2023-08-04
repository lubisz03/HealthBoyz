import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect, ConnectedProps } from 'react-redux';
import {
  handleIsOpenDoctors,
  HandleIsOpenDoctorsAction,
} from '../actions/actions';

interface PropsType {
  isOpen: boolean;
  handleIsOpenDoctors: typeof handleIsOpenDoctors;
}

const DropdownDoctors: React.FC<PropsType> = ({
  isOpen,
  handleIsOpenDoctors,
}) => {
  return (
    <div className='dropdown-menu'>
      <button
        className='button dropdown-button'
        onClick={() => handleIsOpenDoctors()}>
        {}
      </button>
      {isOpen && (
        <ul className='open'>
          <li onClick={() => handleIsOpenDoctors()}>
            <Link to='/'>
              <h3>Home</h3>
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
    isOpen: state.menu.isOpenDocotors,
  };
};

const connector = connect(mapStateToProps, {
  handleIsOpenDoctors,
});

export default connector(DropdownDoctors);
