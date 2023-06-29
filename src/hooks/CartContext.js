import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext({});

export const CardProvider = ({ children }) => {
  const [cardProducts, setCardProducts] = useState([]);

  const updateLocalStorage = async (products) => {
    await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(products));
  };

  const putProductInCart = async (product) => {
    const cartIndex = cardProducts.findIndex((prd) => prd.id === product.id);

    let newCartProducts = [];
    if (cartIndex >= 0) {
      newCartProducts = cardProducts;

      newCartProducts[cartIndex].quantity = newCartProducts[cartIndex].quantity + 1;

      setCardProducts(newCartProducts);
    } else {
      product.quantity = 1;
      newCartProducts = [...cardProducts, product];

      setCardProducts(newCartProducts);
    }

    await updateLocalStorage(newCartProducts);
  };

  const deleteProduct = async (productId) => {
    const newCart = cardProducts.filter((product) => product.id != productId);

    setCardProducts(newCart);

    await updateLocalStorage(newCart);
  };

  const increaseProducts = async (productId) => {
    const newCart = cardProducts.map((product) => {
      return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product;
    });

    setCardProducts(newCart);

    await updateLocalStorage(newCart);
  };

  const decreaseProducts = async (productId) => {
    const cartIndex = cardProducts.findIndex((pd) => pd.id === productId);

    if (cardProducts[cartIndex].quantity > 1) {
      const newCart = cardProducts.map((product) => {
        return product.id === productId ? { ...product, quantity: product.quantity - 1 } : product;
      });

      setCardProducts(newCart);

      await updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
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
    <CartContext.Provider
      value={{ putProductInCart, cardProducts, increaseProducts, decreaseProducts }}
    >
      {' '}
      {children}{' '}
    </CartContext.Provider>
  );
};

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
