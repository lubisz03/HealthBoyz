import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { connect, ConnectedProps } from 'react-redux';
import { getDoctorsData, GetDoctorsDataAction } from '../actions/actions';
import Doctor from './Doctor';
import DropdownDoctors from './DropdownDoctors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

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

  let isMobile: boolean;
  isMobile = window.innerWidth <= 450;

  const hours = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
  ];

  return (
    <div className='main'>
      <form className='content-container book-container'>
        <div className='doctor-details'>
          {/* <DropdownDoctors /> */}
          <Doctor data={doctorsData[0]} />
        </div>
        <div className='booking-details'>
          <div className='date'>
            <h3>Select date:</h3>
            {isMobile ? (
              <DayPicker
                mode='single'
                numberOfMonths={1}
                selected={startDate}
                onSelect={(e) => setStartDate(e)}
              />
            ) : (
              <DayPicker
                mode='single'
                numberOfMonths={2}
                selected={startDate}
                onSelect={(e) => setStartDate(e)}
              />
            )}
          </div>
          <div className='time'>
            <h3>Select time:</h3>
            <ul className='book-hours'>
              {hours.map((hour, index) => {
                return (
                  <li key={index} className='hour'>
                    {hour}
                  </li>
                );
              })}
            </ul>
          </div>
          <button className='button'>Book!</button>
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
