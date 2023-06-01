import React from 'react';
import {
  Container,
  RegisterImage,
  ContainerItems,
  Label,
  Input,
  ErrorMessage,
  SignInLink,
} from './style';

import Button from '../../components/Button/Button';

import Logo from '../../assets/logo.svg';

import RegisterImg from '../../assets/register.svg';

import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api';

function Register() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Digite um e-mail válido').required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),
    ConfirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password,
    });

    console.log(response);
  };

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="Image Login" />
      <ContainerItems>
        <img className="logoBurguer" src={Logo} alt="logo codeburguer" />

        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Nome</Label>
          <Input {...register('name')} type="text" error={errors.name?.message} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input {...register('email')} type="email" error={errors.email?.message} />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input {...register('password')} type="password" error={errors.password?.message} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.ConfirmPassword?.message}>Corfirmar Senha</Label>
          <Input
            {...register('ConfirmPassword')}
            type="password"
            error={errors.ConfirmPassword?.message}
          />
          <ErrorMessage>{errors.ConfirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: '1rem' }}>
            Entrar
          </Button>
        </form>

        <SignInLink>
          Já possui conta? <a> Entrar</a>
        </SignInLink>
      </ContainerItems>
    </Container>
  );
}

export default Register;
