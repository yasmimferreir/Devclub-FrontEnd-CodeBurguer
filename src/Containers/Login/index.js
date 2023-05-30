import React from 'react';
import {
  Container,
  LoginImage,
  ContaiinerItems,
  Label,
  Input,
  ErrorMessage,
  Button,
  SignInLink,
} from './styles';

import LoginImg from '../../assets/background.svg';
import Logo from '../../assets/logo.svg';

import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import api from '../../services/api';

function Login() {
  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail válido').required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password,
    });

    console.log(response);
  };

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Image Login" />
      <ContaiinerItems>
        <img className="logoBurguer" src={Logo} alt="logo codeburguer" />

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input {...register('email')} type="email" error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input {...register('password')} type="password" error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

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
