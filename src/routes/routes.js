import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Containers/Login/Login';
import Register from '../Containers/Register/Register';
import Home from '../Containers/Home/Home';
import PrivateRoute from './private-route';

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastre-se" element={<Register />} />

          <Route exact path="/" element={<PrivateRoute Component={<Home />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
