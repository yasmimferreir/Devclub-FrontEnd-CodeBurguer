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
