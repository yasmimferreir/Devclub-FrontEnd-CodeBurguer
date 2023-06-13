import React from 'react';
import { Container, CarouselImg } from './style';
import ImgCategory from '../../assets/categories.svg';

function CategoryCarousel() {
  return (
    <Container>
      <CarouselImg src={ImgCategory} alt="Carousel-Home" />
    </Container>
  );
}

export default CategoryCarousel;
