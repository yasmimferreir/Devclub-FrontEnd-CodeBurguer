import React from 'react';
import { Container, HomeImg } from './styles';
import BackgroundHome from '../../assets/backgroundHome.svg';
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel';

function Home() {
  return (
    <Container>
      <HomeImg src={BackgroundHome} alt="Background-Home" />
      <CategoryCarousel />
    </Container>
  );
}

export default Home;
