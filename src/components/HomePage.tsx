import * as React from 'react';
import { Link } from 'react-router-dom';
import doctors from '../images/doctors.jpg';

export const HomePage = () => {
  return (
    <>
      <div
        className='main home-container'
        style={{
          backgroundImage: `url(${doctors})`,
        }}></div>
      <Link to='/book' className='home-link'>
        <button className='button home-button'>Book a visit</button>
      </Link>
    </>
  );
};
