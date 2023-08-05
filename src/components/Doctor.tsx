import * as React from 'react';
import '../images/doctor1.jpg';
import '../images/doctor2.jpg';
import '../images/doctor3.jpg';
import '../images/doctor4.jpg';
import '../images/doctor5.jpg';
import '../images/doctor6.jpg';

interface PropsType {
  data: { id: number; name: string; imgUrl: string; description: string };
}

const Doctor: React.FC<PropsType> = ({ data }) => {
  return (
    <div className='doctor'>
      <img src={data.imgUrl} />
      <h3>{data.name}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export default Doctor;
