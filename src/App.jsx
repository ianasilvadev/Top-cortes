import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Componentes/Navbar/Navbar';
import Login from './Componentes/Login/Login';
import Cadastro from './Componentes/Cadastro/Cadastro';
<<<<<<< HEAD
import Service from './Componentes/Servicos/service'
=======
import Footer from './Componentes/Footer/Footer';
>>>>>>> 55d6efd64cb22efd70b0d23d131a6679d4dfcc0e

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/login" element={<Login />} />
        <Route path='/service' element={<Service/>}/>
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
