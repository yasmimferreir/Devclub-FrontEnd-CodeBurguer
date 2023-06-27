import React from 'react';
import { Container, Header, Body } from './styled';
import { userCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';

export function CartItems() {
  const { cardProducts } = userCart();
  console.log(cardProducts);

  return (
    <Container>
      <Header>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {cardProducts &&
        cardProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <p>{product.quantity}</p>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))}
    </Container>
  );
}
