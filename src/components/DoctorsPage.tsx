import * as React from 'react';
import doctor1 from '../images/doctor1.jpg';
import doctor2 from '../images/doctor2.jpg';
import doctor3 from '../images/doctor3.jpg';
import doctor4 from '../images/doctor4.jpg';
import doctor5 from '../images/doctor5.jpg';
import doctor6 from '../images/doctor6.jpg';

export const DoctorsPage = () => {
  return (
    <div className='main'>
      <div className='content-container doctors'>
        <div className='doctor'>
          <img src={doctor1} style={{ width: '200px' }} />
          <h3>Alison Johns</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas
            iure adipisci, esse consectetur neque atque quam inventore illo.
          </p>
        </div>
        <div className='doctor'>
          <img src={doctor2} style={{ width: '200px' }} />
          <h3>Caroline Janowski</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas
            iure adipisci, esse consectetur neque atque quam inventore illo.
          </p>
        </div>
        <div className='doctor'>
          <img src={doctor3} style={{ width: '200px' }} />
          <h3>Cindy Pickleberry</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas
            iure adipisci, esse consectetur neque atque quam inventore illo.
          </p>
        </div>
        <div className='doctor'>
          <img src={doctor4} style={{ width: '200px' }} />
          <h3>Barbara George</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas
            iure adipisci, esse consectetur neque atque quam inventore illo.
          </p>
        </div>
        <div className='doctor'>
          <img src={doctor5} style={{ width: '200px' }} />
          <h3>Linda Novacki</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas
            iure adipisci, esse consectetur neque atque quam inventore illo.
          </p>
        </div>
        <div className='doctor'>
          <img src={doctor6} style={{ width: '200px' }} />
          <h3>Ivy Smith</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas
            iure adipisci, esse consectetur neque atque quam inventore illo.
          </p>
        </div>
      </div>
    </div>
  );
};
