import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import doctor1 from '../images/doctor1.jpg';
import doctor2 from '../images/doctor2.jpg';
import doctor3 from '../images/doctor3.jpg';
import doctor4 from '../images/doctor4.jpg';
import doctor5 from '../images/doctor5.jpg';
import doctor6 from '../images/doctor6.jpg';
import { connect, ConnectedProps } from 'react-redux';
import { getDoctorsData, GetDoctorsDataAction } from '../actions/actions';
import Doctor from './Doctor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import DropdownDoctors from './DropdownDoctors';

interface PropsType {
  doctorsData: {
    id: number;
    name: string;
    imgUrl: string;
    description: string;
  }[];
  getDoctorsData: typeof getDoctorsData;
}

const BookPage: React.FC<PropsType> = ({ doctorsData, getDoctorsData }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className='main'>
      <form className='content-container book-container'>
        <div className='doctor-details'>
          <DropdownDoctors />
          <Doctor data={doctorsData[0]} />
        </div>
        <div className='booking-details'>
          <div className='date'>
            <h3>Select date:</h3>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className='time'></div>
          <button>Book!</button>
        </div>
      </form>
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

export default connector(BookPage);
