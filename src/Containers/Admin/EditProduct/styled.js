import styled from 'styled-components';
import { Button } from '../../../components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 23px;

  form {
    background: #565656;
    border-radius: 8px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .select {
      width: 100%;
    }
  }
`;

export const Label = styled.p`
  font-size: 14px;
  color: #ffff;
`;

export const Input = styled.input`
  height: 25px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  width: 100%;
  min-width: 280px;
  padding-left: 10px;
`;

export const ButtonProduct = styled(Button)`
  margin-top: 25px;
  width: 100%;
`;

export const LabelUploud = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;
  gap: 10px;

  input {
    opacity: 0;
    width: 1px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;
