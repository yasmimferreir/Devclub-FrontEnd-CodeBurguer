import React from 'react';
import { Container, Header, Body, EmptyCart } from './styled';
import { userCart } from '../../hooks/CartContext';
import formatCurrency from '../../utils/formatCurrency';
import { TbShoppingCartOff } from 'react-icons/tb';

export function CartItems() {
  const { cardProducts, increaseProducts } = userCart();
  console.log(cardProducts);

  return (
    <Container>
      <Header>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>

      {cardProducts && cardProducts.length > 0 ? (
        cardProducts.map((product) => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>

            <div className="quantity-container">
              <button>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>

            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>
          Carrinho vazio <TbShoppingCartOff />
        </EmptyCart>
      )}
    </Container>
  );
}
