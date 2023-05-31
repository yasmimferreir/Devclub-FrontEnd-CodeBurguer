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
  height: 100%;
`;

export const ContainerItems = styled.div`
  background-color: #373737;
  height: 100%;
  width: 90%;
  padding: 25px 75px;

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }

  .logoBurguer {
    margin: 10rem 0 2rem 2rem;
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
  border: ${(props) => (props.error ? '2px solid #cc1717;' : 'none')};
  padding-left: 10px;
`;

export const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #cc1717;
  margin-top: 2px;
`;

export const SignInLink = styled.p`
  font-weight: 100;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  margin-top: 1.3rem;

  a {
    text-decoration: underline;
    cursor: pointer;
  }
`;
