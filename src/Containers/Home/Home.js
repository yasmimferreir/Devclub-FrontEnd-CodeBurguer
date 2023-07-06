import React from 'react';
import { Container, HomeImg } from './styles';
import BackgroundHome from '../../assets/backgroundHome.svg';
import { CategoryCarousel, Header, OffersCarousel } from '../../components';

export function Home() {
  return (
    <Container>
      <Header />
      <HomeImg src={BackgroundHome} alt="Background-Home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}
