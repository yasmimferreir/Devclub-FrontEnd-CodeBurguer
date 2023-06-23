import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, ProductImg, CategoryButton, CategoriesMenu, ProductContainer } from './styles';
import BackgroundProduct from '../../assets/backgroundProducts.svg';
import { CardProduct } from '../../components';
import formatCurrenct from '../../utils/formatCurrency';

export function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [filterProducts, setFilterProducts] = useState([]);

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

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products);
    } else {
      const newFilterProduct = products.filter((product) => product.category_id === activeCategory);

      setFilterProducts(newFilterProduct);
    }
  }, [activeCategory, products]);

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
        {filterProducts &&
          filterProducts.map((product) => <CardProduct key={product.id} product={product} />)}
      </ProductContainer>
    </Container>
  );
}
