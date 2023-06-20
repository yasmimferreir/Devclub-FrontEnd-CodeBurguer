import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, ProductImg, CategoryButton, CategoriesMenu, ProductContainer } from './styles';
import BackgroundProduct from '../../assets/backgroundProducts.svg';

function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories');

      const newCategories = [{ id: 0, name: 'Todos' }, ...data];

      setCategories(newCategories);
    }

    async function loadProducts() {
      const { data } = await api.get('products');

      console.log(data);
      setCategories(data);
    }

    loadProducts();
    loadCategories();
  }, []);

  return (
    <Container>
      <ProductImg src={BackgroundProduct} alt="Background-Product" />
      <CategoriesMenu>
        {categories &&
          categories.map((category) => (
            <CategoryButton
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>

      <ProductContainer></ProductContainer>
    </Container>
  );
}

export default Products;
