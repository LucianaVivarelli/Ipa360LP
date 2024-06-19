import React from 'react';
import { Carousel } from 'react-bootstrap';
import img01 from '../assets/img/01t.png'
import img02 from '../assets/img/02t.png'
import img03 from '../assets/img/03t.png'
import '../styles/components/CarouselPage.sass'

const CarouselPage = () => {
  return (
    <div className="App">
      <Carousel controls={false} indicators={false} interval={3000} pause={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img01}
            alt="Primeiro Slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img02}
            alt="Segundo Slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img03}
            alt="Terceiro Slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselPage;
