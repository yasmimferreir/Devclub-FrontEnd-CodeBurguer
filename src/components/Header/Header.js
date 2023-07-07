import React from 'react';
import Cart from '../../assets/cart.svg';
import Person from '../../assets/person.svg';
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  PageLinkExit,
  ContainerText,
  Line,
} from './styled';
import { useHistory } from 'react-router-dom';

export function Header() {
  const history = useHistory();
  const {
    location: { pathname },
  } = useHistory();

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => history.push('/')} isActive={pathname == '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => history.push('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          {' '}
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          {' '}
          <img src={Cart} alt="carrinho" />{' '}
        </PageLink>
        <Line></Line>
        <PageLink>
          {' '}
          <img src={Person} alt="person" />{' '}
        </PageLink>

        <ContainerText>
          <p>Olá, Yasmim</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
