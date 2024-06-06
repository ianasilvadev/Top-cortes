import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Login from './Componentes/Login/Login';
import Cadastro from './Componentes/Cadastro/Cadastro';
import Service from './Componentes/Servicos/service'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path='/service' element={<Service/>}/>
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
