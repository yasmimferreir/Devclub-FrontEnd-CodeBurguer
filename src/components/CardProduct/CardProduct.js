import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { Container, Image, ProductName, ProductPrice } from './styled';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { userCart } from '../../hooks/CartContext';
import { useHistory } from 'react-router-dom';

export function CardProduct({ product }) {
  const { putProductInCart } = userCart();
  const { push } = useHistory();

  return (
    <Container>
      <Image src={product.url} alt="image-produtos" />

      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product), push('/carrinho');
          }}
        >
          Adicionar {''} <BsFillCartPlusFill style={{ fontSize: '14px' }} />
        </Button>
      </div>
    </Container>
  );
}

CardProduct.propTypes = {
  product: PropTypes.object,
};
