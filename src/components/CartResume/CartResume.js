import { Container } from './styled';
import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import formatCurrency from '../../utils/formatCurrency';
import { userCart } from '../../hooks/CartContext';
import api from '../../services/api';
import { toast } from 'react-toastify';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(5);

  const { cardProducts } = userCart();

  useEffect(() => {
    const sumAllItems = cardProducts.reduce((acc, currency) => {
      return currency.price * currency.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cardProducts, deliveryTax]);

  const submitOrdem = async () => {
    const order = cardProducts.map((product) => {
      return { id: product.id, quantity: product.quantity };
    });

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Verificando ⚙️',
      success: 'Pedido realizado com sucesso',
      error: ' Falha ao tentar realizar o seu pedido',
    });
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="itens">Itens</p>
          <p className="itens-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: '20px' }} onClick={submitOrdem}>
        Finalizar pedido
      </Button>
    </div>
  );
}
