import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  display: flex;
  gap: 12px;
  padding: 16px;
  width: max-content;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  width: 150px;
  border-radius: 10px;
`;

export const ProductName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  width: 151px;
  text-transform: capitalize;
  line-height: 19px;
  color: #000000;
`;

export const ProductPrice = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-top: 30px;
`;
