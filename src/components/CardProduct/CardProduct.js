import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { Container, Image, ProductName, ProductPrice } from './styled';

function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="image-produtos" />

      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <Button>Adicionar</Button>
      </div>
    </Container>
  );
}

export default CardProduct;

CardProduct.propTypes = {
  product: PropTypes.object,
};
