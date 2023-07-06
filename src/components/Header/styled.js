import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 72px;
  background-color: #ffffff;
`;

export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
`;

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 400;
  color: #555555;
  font-size: 16px;
  line-height: 19px;
`;

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Line = styled.hr`
  width: 35px;
  background-color: #bababa;
  transform: rotate(90deg);
`;

export const PageLinkExit = styled.a`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  color: #9758a6;
  cursor: pointer;
`;

export const ContainerText = styled.div`
  P {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #555555;
  }
`;
