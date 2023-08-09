import React, { useEffect, useState } from 'react';
import { Container, Img, EditIcons } from './styled';
import api from '../../../services/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import formatCurrency from '../../../utils/formatCurrency';
import { useHistory } from 'react-router-dom';
import paths from '../../../constants/paths';
import DeleteIcon from '@mui/icons-material/Delete';

function ListProducts() {
  const [products, setProducts] = useState();
  const { push } = useHistory();

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products');

      setProducts(data);
    }

    loadOrders();
  }, []);

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: '#00a000' }} />;
    }

    return <CancelIcon style={{ color: '#cc1717' }} />;
  }

  function editProduct(product) {
    push(paths.EditProduct, { product });
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Imagem do Produto</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="product" style={{ width: '180px' }}>
                    {product.name}
                  </TableCell>
                  <TableCell>{formatCurrency(product.price)}</TableCell>
                  <TableCell align="center">{isOffer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <Img src={product.url} alt="img-produto" />
                  </TableCell>
                  <TableCell>
                    <EditIcons onClick={() => editProduct(product)} />
                  </TableCell>
                  <TableCell>
                    <DeleteIcon style={{ cursor: 'pointer' }} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default ListProducts;
