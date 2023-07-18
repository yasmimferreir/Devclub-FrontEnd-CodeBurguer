import React from 'react';
import { Container, ItemContainer, ListItem } from './styled';
import ListLink from './menu-list';
import LogoutIcon from '@mui/icons-material/Logout';
import { userUser } from '../../hooks/UserContext';

export function SideMenuAdmin() {
  const { logout } = userUser();

  return (
    <Container>
      <hr></hr>
      {ListLink.map((item) => (
        <ItemContainer key={item.id} isActive={true}>
          <item.icon className="icon" />
          <ListItem to={item.link}>{item.label}</ListItem>
        </ItemContainer>
      ))}
      <hr></hr>

      <ItemContainer style={{ position: 'absolute', bottom: '30px' }}>
        <LogoutIcon className="icon" />
        <ListItem to="/login" onClick={logout}>
          Sair
        </ListItem>
      </ItemContainer>
    </Container>
  );
}
