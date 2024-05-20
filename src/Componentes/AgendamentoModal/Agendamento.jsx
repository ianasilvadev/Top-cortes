import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AgendamentoModal.css'; // Certifique-se de que o caminho para o CSS esteja correto
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Descricao from '../Descricao/Descricao';

function Agendamento() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          E-mail
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Tipo de cabelo
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Curto"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              className="custom-radio"
            />
            <Form.Check
              type="radio"
              label="Médio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              className="custom-radio"
            />
            <Form.Check
              type="radio"
              label="Grande"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
              className="custom-radio"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check
            className="custom-checkbox"
            label="Concordo em receber e-mails"
          />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default Agendamento;
