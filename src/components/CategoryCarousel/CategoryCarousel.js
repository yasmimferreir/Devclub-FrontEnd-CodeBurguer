import React, { useState, useEffect } from 'react';
import { Container, CarouselImg, ContainerItems, Image, Button } from './styled';
import ImgCategory from '../../assets/categories.svg';
import api from '../../services/api';
import Carousel from 'react-elastic-carousel';

export function CategoryCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 },
  ];

  return (
    <Container>
      <CarouselImg src={ImgCategory} alt="Carousel-Home" />

      <Carousel itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints}>
        {categories &&
          categories.map((category) => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="img-categorias" />
              <Button>{category.name}</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  );
}
