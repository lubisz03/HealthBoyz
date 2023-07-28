import * as React from 'react';
import nurse from '../images/nurse.jpg';

export const AboutPage = () => {
  let isDesktop: boolean;
  isDesktop = window.innerWidth > 450;

  return (
    <div className='main'>
      <div className='content-container about-container'>
        {isDesktop && (
          <div className='about-img'>
            <img src={nurse} />
          </div>
        )}
        <div className='about-text'>
          <h1>We are</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            delectus dolores iure, hic molestiae, iusto ipsa vel saepe harum
            unde perspiciatis corporis quod aliquam voluptatum totam nobis illo.
            <br></br>
            <br></br>
            Est, quidem! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Laboriosam deleniti exercitationem consequatur, placeat minima
            quo, eveniet, tenetur illo ratione cum necessitatibus vel esse.
            Aliquam iure amet minus ducimus soluta in. Lorem, ipsum dolor sit
            <br></br>
            <br></br>
            amet consectetur adipisicing elit. Iste unde quisquam fuga corporis
            quo tenetur libero nam delectus maxime! Accusamus nulla adipisci
            eius libero consequatur blanditiis corporis minus rem alias. Lorem
            <br></br>
            <br></br>
            ipsum dolor sit amet consectetur adipisicing elit. Aliquid esse
            molestias excepturi! Repudiandae dolorum distinctio nostrum, laborum
            facere aspernatur vitae ipsam iste placeat, officiis nulla, animi
            maxime alias.
          </p>
        </div>
      </div>
    </div>
  );
};
