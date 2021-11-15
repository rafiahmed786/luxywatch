import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../Images/slider-1.jpg'
import img2 from '../../../Images/slider-2.jpg'
import img3 from '../../../Images/slider-3.jpg'
import img4 from '../../../Images/slider-4.jpg'
import img5 from '../../../Images/slider-5.jpg'

const HomeSlider = () => {
    return (
       <div id="homeSlider">
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img4}
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img5}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Fourth slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Fifth slide"
    />

    
  </Carousel.Item>
</Carousel>
       </div>
    );
};

export default HomeSlider;