import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const ModalReservas = ({ fechaModal }) => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get('http://localhost:3002/reservas');
        setReservas(response.data);
      } catch (error) {
        console.error('Erro ao buscar reservas:', error);
      }
    };

    fetchReservas();
  }, []);

  return (
    <div className="modal-container">
      <Modal.Dialog>
        <div>
          <Modal.Title className="mt-2 mb-3">Minhas Reservas</Modal.Title>
          <IoIosCloseCircleOutline onClick={fechaModal} />
        </div>

        <Modal.Body className="mt-2">
          {reservas.length === 0 ? (
            <p>Nenhuma reserva encontrada.</p>
          ) : (
            <ul>
              {reservas.map((reserva, index) => (
                <li key={index}>
                  <p>Data: {reserva.data}</p>
                  <p>Horário: {reserva.horario}</p>
                  <p>Serviço: {reserva.servico}</p>
                </li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer className="mt-2">
          <Button className="corBotao me-2" onClick={fechaModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ModalReservas;
