import React, { useEffect } from 'react';
import { Container, Label, Input, LabelUploud, ButtonProduct } from './styled';
import api from '../../../services/api';
import ReacSelect from 'react-select';

import { useForm } from 'react-hook-form';

function NewProduct() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products');
    }

    loadOrders();
  }, []);

  return (
    <>
      <Container>
        <form noValidate>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />

          <Label>Preço</Label>
          <Input type="number" {...register('price')} />

          <LabelUploud>
            Carregue a imagem do produto
            <input type="file" accept="image/png, image/jpeg" {...register('file')} />
          </LabelUploud>

          <ReacSelect className="select" />

          <ButtonProduct>Adicionar produto</ButtonProduct>
        </form>
      </Container>
    </>
  );
}

export default NewProduct;
