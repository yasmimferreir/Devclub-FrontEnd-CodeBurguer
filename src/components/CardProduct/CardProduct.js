import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { Container, Image, ProductName, ProductPrice } from './styled';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { userCart } from '../../hooks/CartContext';

export function CardProduct({ product }) {
  const { putProductInCart } = userCart();

  return (
    <Container>
      <Image src={product.url} alt="image-produtos" />

      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button onClick={() => putProductInCart(product)}>
          Adicionar {''}
          <BsFillCartPlusFill style={{ fontSize: '14px' }} />
        </Button>
      </div>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
