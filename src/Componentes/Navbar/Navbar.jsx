import React, { useState } from 'react';
import './Navbar.css';
import logo from './logoBarbearia.png';
import shape from './Shape.png';
import imgExemplo from './exemploBarbeiro.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAgendamento from '../ModalAgendamento/ModalAgendamento';
import Cadastro from '../Cadastro/Cadastro';
import ModalReservas from '../ModalReservas/ModalReservas';
import Footer from '../Footer/Footer';
import Service from '../Servicos/service';
import Sobre from '../Sobre/Sobre';
import Depoimentos from '../Depoimentos/Depoimentos';

const Navbar = () => {
  const [btnModal, setBtnModal] = useState(false);
  const [estadoLi, setEstadoLi] = useState(false);
  const [reservasModal, setReservasModal] = useState(false);

  function alterandoBtnModal(event) {
    event.preventDefault();
    setBtnModal(!btnModal);
  }

  function fechaModal() {
    setBtnModal(false);
    setEstadoLi(false);
    setReservasModal(false);
  }

  function handleClick(event) {
    event.preventDefault();
    setEstadoLi(!estadoLi);
  }

  function handleReservasClick(event) {
    event.preventDefault();
    setReservasModal(true);
  }

  function handleInicioClick() {
    window.location.reload(); 
  }

  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul id="lista">
          <li onClick={handleInicioClick}>Início</li>
          <li>Sobre</li>
          <li>Depoimentos</li>
          <li>
            <a onClick={handleReservasClick}>Reservas</a>
          </li>
          <li>
            <a onClick={handleClick}>Cadastro</a>
          </li>
          {estadoLi && <Cadastro fechaModal={fechaModal} />}
        </ul>
      </header>
      <div id="agendaHorario">
        <h1 id="titulo">
          Saúde natural para <br /> os seus cabelos
        </h1>
        <p id="subtitulo">
          Um salão exclusivo em Fortaleza, <br /> especializado em tratamentos
          naturais.
        </p>
        <button onClick={alterandoBtnModal} id="btn">
          Agendar
        </button>
        {btnModal && <ModalAgendamento fechaModal={fechaModal} />}
      </div>
      <img src={shape} id="shape" alt="" />
      <div>
        <img id="imagens" src={imgExemplo} alt="" />
      </div>
      {reservasModal && <ModalReservas fechaModal={fechaModal} />}
      <div className="SobreContainer">
        <Sobre/>
      </div>
      <div className="ServiceContainer">
        <Service/>
      </div>
      <div className="DepoimentosContainer">
        <Depoimentos/>
      </div>
      <div className='FooterCoontainer'>
        <Footer/>
      </div>
    </div>
  );
};

export default Navbar;
