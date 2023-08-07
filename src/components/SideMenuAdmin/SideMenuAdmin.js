import React from 'react';
import { Container, ItemContainer, ListItem } from './styled';
import ListLink from './menu-list';
import LogoutIcon from '@mui/icons-material/Logout';
import { userUser } from '../../hooks/UserContext';
import { PropTypes } from 'prop-types';

export function SideMenuAdmin({ path }) {
  const { logout } = userUser();

  return (
    <Container>
      <hr></hr>
      {ListLink.map((item) => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListItem to={item.link}>{item.label}</ListItem>
        </ItemContainer>
      ))}
      <hr></hr>

      <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
        <LogoutIcon className="icon" />
        <ListItem to="/login" onClick={logout}>
          Sair
        </ListItem>
      </ItemContainer>
    </Container>
  );
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string,
};
