import React from 'react';
import { Container, HomeImg } from './styles';
import BackgroundHome from '../../assets/backgroundHome.svg';
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel';
import OffersCarousel from '../../components/OffersCarousel/OffersCarousel';

function Home() {
  return (
    <Container>
      <HomeImg src={BackgroundHome} alt="Background-Home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  );
}

export default Home;
