import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../Containers/Login/Login';
import Register from '../Containers/Register/Register';

function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastre-se" element={<Register />} />
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default Rotas;
