import React from 'react';
import { Container, LoginImage, ContaiinerItems, Label, Input, Button, SignInLink } from './styles';

import LoginImg from '../../assets/background.svg';
import Logo from '../../assets/logo.svg';

function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="Image Login" />
      <ContaiinerItems>
        <img className="logoBurguer" src={Logo} alt="logo codeburguer" />

        <h1>Login</h1>
        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>Entrar</Button>

        <SignInLink>
          Não possui conta? <a> Cadastre-se</a>
        </SignInLink>
      </ContaiinerItems>
    </Container>
  );
}

export default Login;
