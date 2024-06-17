import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Login from './Componentes/Login/Login';
import Cadastro from './Componentes/Cadastro/Cadastro';
import Service from './Componentes/Servicos/service';
import Footer from './Componentes/Footer/Footer';
import Alerta from './Componentes/AgendamentoAlerta/Alerta'; 
import Reserva from './Componentes/ModalReservas/ModalReservas';
import Sobre from './Componentes/Sobre/Sobre'
import Depoimentos from './Componentes/Depoimentos/Depoimentos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/reserva' element={<Reserva/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path="/service" element={<Service />} />
        <Route path='/Depoimentos' element={<Depoimentos/>} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/alerta" element={<Alerta />} /> 
      </Routes>
    </Router>
  );
}

export default App;
