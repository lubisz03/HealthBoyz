import React, { useEffect } from 'react';
import axios from 'axios';
import doctor1 from '../images/doctor1.jpg';
import doctor2 from '../images/doctor2.jpg';
import doctor3 from '../images/doctor3.jpg';
import doctor4 from '../images/doctor4.jpg';
import doctor5 from '../images/doctor5.jpg';
import doctor6 from '../images/doctor6.jpg';
import Doctor from './Doctor';
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

const DoctorsPage: React.FC<PropsType> = ({ doctorsData, getDoctorsData }) => {
  useEffect(() => {
    axios
      .get(`${process.env.API_BASE_URL}${process.env.DOCTORS}`)
      .then(function (response) {
        getDoctorsData(response.data);
      });
  }, []);

  return (
    <div className='main'>
      <div className='content-container doctors'>
        {doctorsData.map((doctor) => {
          return <Doctor data={doctor} key={doctor.id} />;
        })}
      </div>
    </div>
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

export default connector(DoctorsPage);
