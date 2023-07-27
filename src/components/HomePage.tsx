import * as React from 'react';
import { Link } from 'react-router-dom';
import doctors from '../images/doctors.jpg';

export const HomePage = () => {
  return (
    <>
      <div
        className='main home-page'
        style={{
          backgroundImage: `url(${doctors})`,
        }}></div>
      <Link to='/book'>
        <button className='button home-button'>Book a visit</button>
      </Link>
    </>
  );
};
