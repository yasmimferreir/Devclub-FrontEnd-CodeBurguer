import React from 'react';
import { Container, LoginImage, ContainerItems, Label, Input, SignInLink } from './style';

import { Button, ErrorMessage } from '../../components';
import LoginImg from '../../assets/background.svg';
import Logo from '../../assets/logo.svg';

import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { userUser } from '../../hooks/UserContext';

import api from '../../services/api';

import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';

export function Login() {
  const history = useHistory();

  const { putUserData } = userUser();

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
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password,
      }),

      {
        pending: 'Verificando os dados ⚙️',
        success: 'Sucesso ✔️',
        error: ' Verifique seu e-mail e senha ⚠️',
      }
    );

    putUserData(data);

    setTimeout(() => {
      if (data.admin) {
        history.push('/painel');
      } else {
        history.push('/');
      }
    }, 1000);
  };

  return (
    <Container>
      <LoginImage src={LoginImg} alt="Image Login" />
      <ContainerItems>
        <img className="logoBurguer" src={Logo} alt="logo codeburguer" />

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input {...register('email')} type="email" error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input {...register('password')} type="password" error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: '2rem' }}>
            Entrar
          </Button>
        </form>

        <SignInLink>
          Não possui conta?{' '}
          <Link to="/cadastre-se" style={{ color: 'white' }}>
            {' '}
            Cadastre-se
          </Link>
        </SignInLink>
      </ContainerItems>
    </Container>
  );
}
