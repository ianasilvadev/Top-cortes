import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Agendamento from '../AgendamentoModal/Agendamento';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './ModalAgendamento.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Descricao from '../Descricao/Descricao';
import { IoIosCloseCircleOutline } from 'react-icons/io';

function ModalAgendamento({ fechaModal }) {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="modal-container">
      <Modal.Dialog>
        <div>
          <Modal.Title className="mt-2 mb-3">Meu agendamento</Modal.Title>
          <IoIosCloseCircleOutline onClick={fechaModal} />
        </div>

        <Modal.Body className="mt-2">
          <Agendamento />
          <br />
          <Calendar onChange={handleDateChange} value={date} />
          <br />
          <Descricao />
        </Modal.Body>
        <Modal.Footer className="mt-3">
          <Button className="corBotao me-2" onClick={fechaModal}>
            Fechar
          </Button>
          <Button className="corBotao me-2">Agendar</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalAgendamento;
