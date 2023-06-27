import React from 'react';
import { Container, CartImg } from './style';
import BackgroundCart from '../../assets/cartQuantity.svg';
import { CartItems } from '../../components';

export function Cart() {
  return (
    <Container>
      <CartImg src={BackgroundCart} alt="Background-Home" />
      <CartItems />
    </Container>
  );
}
