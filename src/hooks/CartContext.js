import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext({});

export function CardProvider({ children }) {
  const [cardProducts, setCardProducts] = useState([]);

  const putProductInCart = async (product) => {
    const cartIndex = cardProducts.findIndex((prd) => prd.id === prd.id);

    if (cartIndex >= 0) {
      return;
    } else {
      product.quantity = 1;
      setCardProducts([...cardProducts, product]);
    }

    await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(cardProducts));
  };

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburguer:cartInfo');

      if (clientCartData) {
        setCardProducts(JSON.parse(clientCartData));
      }
    };

    loadUserData();
  }, []);

  return (
    <CartContext.Provider value={{ putProductInCart, cardProducts }}>
      {' '}
      {children}{' '}
    </CartContext.Provider>
  );
}

export const userCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('userCart deve ser usado com UserContext');
  }

  return context;
};

CardProvider.propTypes = {
  children: PropTypes.node,
};
