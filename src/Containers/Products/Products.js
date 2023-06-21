import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, ProductImg, CategoryButton, CategoriesMenu, ProductContainer } from './styles';
import BackgroundProduct from '../../assets/backgroundProducts.svg';
import CardProduct from '../../components/CardProduct/CardProduct';
import formatCurrenct from '../../utils/formatCurrency';

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
      const { data: allProducts } = await api.get('products');

      const newProducts = allProducts.map((product) => {
        return { ...product, formatedPrice: formatCurrenct(product.price) };
      });

      setProducts(newProducts);
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

      <ProductContainer>
        {products && products.map((product) => <CardProduct key={product.id} product={product} />)}
      </ProductContainer>
    </Container>
  );
}

export default Products;