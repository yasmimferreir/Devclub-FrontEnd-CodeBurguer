import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  //height: 100%;
  // display: flex;
  //justify-content: center;
  // align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
  }
`;

export const Label = styled.p`
  font-size: 14px;
  color: #ffff;
  margin-bottom: 3px;
`;

export const Input = styled.input`
  height: 25px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  margin-bottom: 25px;
  width: 30%;
`;
