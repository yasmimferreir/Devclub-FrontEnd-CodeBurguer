import React from 'react';
import { Container, LoginImage, ContaiinerItems, Label, Input, Button, SignInLink } from './styles';

import LoginImg from '../../assets/background.svg';
import Logo from '../../assets/logo.svg';

import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    //formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Image Login" />
      <ContaiinerItems>
        <img className="logoBurguer" src={Logo} alt="logo codeburguer" />

        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input {...register('Email')} type="email" />

          <Label>Senha</Label>
          <Input {...register('Senha')} type="password" />

          <Button type="submit">Entrar</Button>
        </form>

        <SignInLink>
          Não possui conta? <a> Cadastre-se</a>
        </SignInLink>
      </ContaiinerItems>
    </Container>
  );
}

export default Login;
