import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Acordeon from './Acordeon';
import Cards from './Cards';
import './estilos.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Acordeon></Acordeon>} />
        <Route path="/ofertadecursos" element={<Cards></Cards>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

