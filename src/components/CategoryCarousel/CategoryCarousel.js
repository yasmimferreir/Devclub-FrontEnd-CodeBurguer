import React, { useEffect } from 'react';
import { Container, CarouselImg } from './style';
import ImgCategory from '../../assets/categories.svg';
import api from '../../services/api';

function CategoryCarousel() {
  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');

      console.log(response);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <CarouselImg src={ImgCategory} alt="Carousel-Home" />
    </Container>
  );
}

export default CategoryCarousel;
