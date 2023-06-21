import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { Container, Image, ProductName, ProductPrice } from './styled';
import { BsFillCartPlusFill } from 'react-icons/bs';

function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="image-produtos" />

      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button style={{ width: '8rem' }}>
          Adicionar {''}
          <BsFillCartPlusFill style={{ fontSize: '14px' }} />
        </Button>
      </div>
    </Container>
  );
}

export default CardProduct;

CardProduct.propTypes = {
  product: PropTypes.object,
};
