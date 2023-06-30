import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 10px;

  .container-top {
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas:
      'title title'
      'itens itens-price'
      'delivery-tax delivery-tax-price';

    .title {
      grid-area: title;
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 20px;
    }

    .itens {
      grid-area: itens;
      font-weight: 300;
    }

    .itens-price {
      grid-area: itens-price;
      font-weight: 300;
    }

    .delivery-tax {
      grid-area: delivery-tax;
      font-weight: 300;
    }

    .delivery-tax-price {
      grid-area: delivery-tax-price;
      font-weight: 300;
    }
  }

  .container-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    margin-top: 50px;
  }
`;
