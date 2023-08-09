import React from 'react';
import { Link } from 'react-router-dom';
import doctors from '../images/doctors.jpg';
import { connect, ConnectedProps } from 'react-redux';
import { getDoctorsData, GetDoctorsDataAction } from '../actions/actions';

interface PropsType {
  doctorsData: {
    id: number;
    name: string;
    imgUrl: string;
    description: string;
  }[];
  getDoctorsData: typeof getDoctorsData;
}

const HomePage: React.FC<PropsType> = ({ doctorsData, getDoctorsData }) => {
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

const mapStateToProps = (state: {
  doctors: {
    doctorsData: {
      id: number;
      name: string;
      imgUrl: string;
      description: string;
    }[];
  };
}) => {
  return {
    doctorsData: state.doctors.doctorsData,
  };
};

const connector = connect(mapStateToProps, {
  getDoctorsData,
});

export default connector(HomePage);
