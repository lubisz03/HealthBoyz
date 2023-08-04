import * as React from 'react';

interface PropsType {
  data: { id: number; name: string; imgUrl: string; description: string };
}

const Doctor: React.FC<PropsType> = ({ data }) => {
  return (
    <div className='doctor'>
      <img src={'./src/images/doctor1.jpg'} />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default Doctor;
