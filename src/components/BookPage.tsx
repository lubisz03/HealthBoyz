import * as React from 'react';

export const BookPage = () => {
  return (
    <div className='main'>
      <div className='content-container'>
        <div className='date'>
          <h3>Select date:</h3>&nbsp;&nbsp;&nbsp;
          <input type='text' />
        </div>
        <div></div>
        <button>Book!</button>
      </div>
    </div>
  );
};
