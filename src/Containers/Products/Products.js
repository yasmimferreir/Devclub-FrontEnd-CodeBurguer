import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, ProductImg, CategoryButton } from './styles';
import BackgroundProduct from '../../assets/backgroundProducts.svg';

function Products() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      const newCategories = [{ id: 0, name: 'Todos' }, ...data];

      setCategories(newCategories);
    }

    loadCategories();
  }, []);

  return (
    <Container>
      <ProductImg src={BackgroundProduct} alt="Background-Product" />
      {categories &&
        categories.map((category) => (
          <CategoryButton key={category.id}>{category.name}</CategoryButton>
        ))}
    </Container>
  );
}

export default Products;
