import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const LoginImage = styled.img`
  position: absolute;
  width: 52rem;
  height: 49.5rem;
  left: 0;
  top: 0;
`;

export const ContaiinerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background: #373737;
  width: 43rem;
  height: 49.5rem;
  left: 52rem;
  padding: 25px 75px;

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 5rem;
  }
`;

export const Label = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;

  margin-top: 2rem;
  margin-bottom: 0.6rem;
`;

export const Input = styled.input`
  width: 24rem;
  height: 2rem;
  left: 59rem;
  top: 28rem;

  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: none;
  padding-left: 10px;
`;

export const Button = styled.button`
  width: 11rem;
  height: 2.2rem;
  /*left: 944px;*/
  margin-top: 2rem;
  border: none;

  background: #9758a6;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
`;

export const SignInLink = styled.p``;
