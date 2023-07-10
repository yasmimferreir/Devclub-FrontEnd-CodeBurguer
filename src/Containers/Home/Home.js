import React from 'react';
import { Container, HomeImg } from './styles';
import BackgroundHome from '../../assets/backgroundHome.svg';
import { CategoryCarousel, OffersCarousel } from '../../components';

export function Home() {
  return (
    <Container>
      <HomeImg src={BackgroundHome} alt="Background-Home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}
