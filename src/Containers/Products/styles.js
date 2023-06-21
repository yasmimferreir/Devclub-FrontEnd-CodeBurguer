import styled from 'styled-components';

export const Container = styled.div`
  background: #e5e5e5;
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`;

export const ProductImg = styled.img`
  width: 100%;
`;

export const CategoryButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.isActiveCategory && '3px solid #9758A6'};
  padding-bottom: 5px;
  background: none;
  color: ${(props) => (props.isActiveCategory ? '#9758A6' : '#9a9a9d')};
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`;
