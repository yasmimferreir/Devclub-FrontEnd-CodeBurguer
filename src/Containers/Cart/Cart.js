import React from 'react';
import { Container, CartImg, Wrapper } from './style';
import BackgroundCart from '../../assets/cartQuantity.svg';
import { CartItems, CartResume } from '../../components';

export function Cart() {
  return (
    <Container>
      <CartImg src={BackgroundCart} alt="Background-Home" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  );
}
