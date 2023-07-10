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

import { userUser } from '../../hooks/UserContext';

export function Header() {
  const { logout, userData } = userUser();

  const history = useHistory();

  const {
    push,
    location: { pathname },
  } = useHistory();

  const logoutUser = () => {
    logout();
    push('/login');
  };

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
        <PageLink onClick={() => history.push('/carrinho')}>
          {' '}
          <img src={Cart} alt="carrinho" />{' '}
        </PageLink>
        <Line></Line>
        <PageLink>
          {' '}
          <img src={Person} alt="person" />{' '}
        </PageLink>

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  );
}
