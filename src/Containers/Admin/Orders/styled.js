import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
  padding: 20px;
`;

export const ProductImg = styled.img`
  width: 60px;
  border-radius: 5px;
`;

export const ReactSelect = styled(Select)`
  width: 250px;

  .css-qbdosj-Input {
    cursor: pointer;
  }

  .css-1xc3v61-indicatorContainer {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`;

export const LinkMenu = styled.a`
  color: #323d5d;
  cursor: pointer;
  font-weight: ${(props) => (props.isActiveStatus ? 'bold' : 'normal')};
  border-bottom: ${(props) => (props.isActiveStatus ? '2px solid #9758A6' : 'none')};
  padding-bottom: 5px;
`;
