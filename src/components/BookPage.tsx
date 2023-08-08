import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { connect, ConnectedProps } from 'react-redux';
import {
  getDoctorsData,
  GetDoctorsDataAction,
  handleDataChange,
  HandleDataChangeAction,
  setBookedHrs,
  SetBookedHrsAction,
} from '../actions/actions';
import moment from 'moment';

interface PropsType {
  doctorsData: {
    id: number;
    name: string;
    imgUrl: string;
    description: string;
  }[];
  getDoctorsData: typeof getDoctorsData;
  formData: {
    name: string;
    last_name: string;
    e_mail: string;
    doctor_id: number;
    date: string | Date | undefined;
    time: string;
  };
  handleDataChange: typeof handleDataChange;
  bookedHrs: string[];
  setBookedHrs: typeof setBookedHrs;
}

const BookPage: React.FC<PropsType> = ({
  doctorsData,
  getDoctorsData,
  formData,
  handleDataChange,
  bookedHrs,
  setBookedHrs,
}) => {
  let isMobile: boolean;
  isMobile = window.innerWidth <= 450;
  const navigate = useNavigate();
  let isDisabled =
    formData.name == '' ||
    formData.last_name == '' ||
    formData.e_mail == '' ||
    formData.date == undefined ||
    formData.time == '';

  useEffect(() => {
    handleDataChange({
      name: '',
      last_name: '',
      e_mail: '',
      doctor_id: 0,
      date: new Date(),
      time: '',
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.API_BASE_URL}${process.env.BOOKED}/${
          formData.doctor_id
        }/${moment(formData.date).format('YYYY-MM-DD')}`
      )
      .then((res) => setBookedHrs(res.data))
      .then(() => console.log(bookedHrs))
      .catch((e) => console.log(e));
  }, [formData.doctor_id, formData.date]);

  const handelSubmit = (): void => {
    axios
      .post(`${process.env.API_BASE_URL}`, formData)
      .then(() => {
        navigate('/');
        handleDataChange({
          name: '',
          last_name: '',
          e_mail: '',
          doctor_id: 0,
          date: new Date(),
          time: '',
        });
      })
      .catch((e) => console.log(e));
  };

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
      <div className='content-container book-container'>
        <form className='booking-details'>
          <div className='generals'>
            <div className='book-inpt'>
              <h3>First Name:</h3>
              <input
                type='text'
                value={formData.name}
                onChange={(e) =>
                  handleDataChange({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className='book-inpt'>
              <h3>Last Name:</h3>
              <input
                type='text'
                value={formData.last_name}
                onChange={(e) =>
                  handleDataChange({ ...formData, last_name: e.target.value })
                }
              />
            </div>
            <div className='book-inpt'>
              <h3>E-mail:</h3>
              <input
                type='text'
                value={formData.e_mail}
                onChange={(e) =>
                  handleDataChange({ ...formData, e_mail: e.target.value })
                }
              />
            </div>
            <div className='book-inpt'>
              <h3>Select Doctor:</h3>
              <select
                value={formData.doctor_id}
                onChange={(e) =>
                  handleDataChange({
                    ...formData,
                    doctor_id: Number(e.target.value),
                  })
                }>
                {doctorsData.map((doctor, index) => {
                  return (
                    <option value={index} key={index}>
                      {doctor.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className='date'>
            <h3>Select date:</h3>
            {isMobile ? (
              <DayPicker
                mode='single'
                numberOfMonths={1}
                selected={formData.date}
                onSelect={(e) => handleDataChange({ ...formData, date: e })}
              />
            ) : (
              <DayPicker
                mode='single'
                numberOfMonths={2}
                selected={formData.date}
                onSelect={(e) => handleDataChange({ ...formData, date: e })}
              />
            )}
          </div>
          <div className='time'>
            <h3>Select time:</h3>
            <ul className='book-hours'>
              {hours.map((hour, index) => {
                if (bookedHrs.includes(hour)) {
                  return (
                    <li key={index} className='hour booked' value={hour}>
                      {hour}
                    </li>
                  );
                } else {
                  if (hour == formData.time) {
                    return (
                      <li
                        key={index}
                        className='hour selected'
                        value={hour}
                        onClick={(e) => {
                          handleDataChange({ ...formData, time: hour });
                        }}>
                        {hour}
                      </li>
                    );
                  } else {
                    return (
                      <li
                        key={index}
                        className='hour'
                        value={hour}
                        onClick={(e) => {
                          handleDataChange({ ...formData, time: hour });
                        }}>
                        {hour}
                      </li>
                    );
                  }
                }
              })}
            </ul>
          </div>
          <button
            className='button'
            onClick={(e) => {
              e.preventDefault();
              handelSubmit();
            }}
            disabled={isDisabled}>
            Book!
          </button>
        </form>
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
  formData: {
    formData: {
      name: string;
      last_name: string;
      e_mail: string;
      doctor_id: number;
      date: string | Date | undefined;
      time: string;
    };
  };
  bookedHrs: {
    bookedHrs: string[];
  };
}) => {
  return {
    doctorsData: state.doctors.doctorsData,
    formData: state.formData.formData,
    bookedHrs: state.bookedHrs.bookedHrs,
  };
};

const connector = connect(mapStateToProps, {
  getDoctorsData,
  handleDataChange,
  setBookedHrs,
});

export default connector(BookPage);
