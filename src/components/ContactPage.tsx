import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

export const ContactPage = () => {
  return (
    <div className='main'>
      <div className='content-container contact-container'>
        <div className='side'>
          <div className='contact-element'>
            <FontAwesomeIcon icon={faPhone} className='icon' />
            <a href='tel:123456789'>
              <h3>+1-234-567-890</h3>
            </a>
          </div>
          <h3>OR</h3>
          <div className='contact-element'>
            <FontAwesomeIcon icon={faEnvelope} className='icon' />
            <a href='mailto:contact@healthboyz.com'>
              <h3>contact@healthboyz.com</h3>
            </a>
          </div>
        </div>
        <div className='line'></div>
        <div className='side'>
          <div className='contact-element'>
            <FontAwesomeIcon icon={faLocationDot} className='icon' />
            <a href='https://goo.gl/maps/Cjn3Ps4Pz3BE5ATr6'>
              <h3>
                Marszałkowska 69<br></br>Warsaw, Poland
              </h3>
            </a>
          </div>
          <div className='contact-element map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.058404448154!2d21.0144947!3d52.224156699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccee415738a7%3A0x10791b560661b60c!2sMarsza%C5%82kowska%2069%2C%2000-676%20Warszawa!5e0!3m2!1sen!2spl!4v1690286221069!5m2!1sen!2spl'
              width='400'
              height='300'
              style={{ border: '0' }}
              loading='lazy'></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
