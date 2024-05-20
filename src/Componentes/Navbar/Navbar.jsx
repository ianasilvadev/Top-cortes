import React, { useState } from 'react';
import './Navbar.css';
import logo from './logoBarbearia.png';
import AgendamentoModal from '../AgendamentoModal/Agendamento';
import shape from './Shape.png';
import imgExemplo from './exemploBarbeiro.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAgendamento from '../ModalAgendamento/ModalAgendamento';

const Navbar = () => {
  const [btnModal, setBtnModal] = useState(false);

  function alterandoBtnModal(event) {
    event.preventDefault();
    setBtnModal(!btnModal);
  }

  function fechaModal(event) {
    setBtnModal(false);
  }

  return (
    <div>
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul id="lista">
          <li>Início</li>
          <li>Sobre</li>
          <li>Depoimentos</li>
          <li>
            <a>Cadastro</a>
          </li>
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
    </div>
  );
};

export default Navbar;
