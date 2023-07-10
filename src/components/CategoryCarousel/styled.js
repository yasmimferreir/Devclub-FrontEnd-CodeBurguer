import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 35px 0;
  background: #efefef;

  .rec.rec-arrow {
    background: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background: #efefef;
    color: #9758a6;
    transition: all 1s;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background: #bebebf;
    color: #efefef;
  }
`;

export const CarouselImg = styled.img``;

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 10px;
`;

export const Button = styled(Link)`
  margin-top: 16px;
  background: #9758a6;
  border-radius: 8px;
  height: 50px;
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    opacity: 0.8;
    transition: all 1s;
  }

  &:active {
    opacity: 0.2;
  }

  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
