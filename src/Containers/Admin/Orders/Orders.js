import React, { useState, useEffect } from 'react';
import { Container } from './styled';
import api from '../../../services/api';

/*import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';*/

function Orders() {
  const [orders, setOrders] = useState([]);
  const [rows, setRows] = useState([]);

  console.log(orders);

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders');

      setOrders(data);
    }

    loadOrders();
  }, []);

  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products,
    };
  }

  useEffect(() => {
    const newRows = orders.map((ord) => createData(ord));

    setRows(newRows);
  }, [orders]);

  console.log(rows);

  return (
    <Container>
      <h1>Orders</h1>
    </Container>
  );
}

export default Orders;
