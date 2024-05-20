import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import './Cadastro.css';
import Navbar from '../Navbar/Navbar';

const Cadastro = ({ fechaModal }, { isModal }) => {
  const navigate = useNavigate();

  const Submit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3002/user', data);
      navigate('/login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error.response.data.error);
    }
  };

  const onClose = () => {
    if (isModal) {
      navigate('/');
    }
  };

  const rotaLogin = () => {
    navigate('/login');
  };

  const createUserFormSchema = z.object({
    email: z
      .string()
      .toLowerCase()
      .max(50, {
        message: 'O campo não pode conter mais de 50 caracteres',
      })
      .min(6, {
        message: 'O campo precisa conter pelo menos 6 caracteres',
      })
      .includes('@', { message: 'O campo deve conter @' })
      .nonempty('O campo não pode ser vazio'),
    password: z
      .string()
      .nonempty('O campo não pode ser vazio')
      .min(6, {
        message: 'A password precisa conter pelo menos 6 caracteres',
      })
      .max(30, {
        message: 'A password não pode conter mais de 30 caracteres',
      }),
    name: z
      .string()
      .max(70, {
        message: 'O campo de name não pode conter mais de 70 caracteres',
      })
      .min(10, {
        message: 'O name precisa conter pelo menos 10 caracteres',
      })
      .nonempty('O campo não pode ser vazio'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(createUserFormSchema) });

  return (
    <>
      <div className="modal-container">
        {' '}
        <Modal.Dialog>
          <div>
            <Modal.Title className="mt-2 mb-3">Meu agendamento</Modal.Title>
            <IoIosCloseCircleOutline onClick={fechaModal} />
          </div>

          <Modal.Body className="mt-2">
            <div className="login template d-flex justify-content-center align-items-center bg-custom">
              <div className="form_container p-3 rounded-4 bg-white">
                <form onSubmit={handleSubmit(Submit)} noValidate>
                  <h3 className="text-center mb-3">Faça seu cadastro</h3>
                  <div className="mb-3">
                    <label htmlFor="email">E-mail</label>
                    <input
                      type="email"
                      placeholder="Digite seu e-mail"
                      className={`form-control ${errors.email && 'is-invalid'}`}
                      {...register('email')}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="name" className="mb-2">
                      name completo
                    </label>
                    <input
                      type="text"
                      placeholder="Digite seu name completo"
                      className={`form-control ${errors.name && 'is-invalid'}`}
                      {...register('name')}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">
                        {errors.name.message}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="mb-2">
                      Senha
                    </label>
                    <input
                      type="password"
                      placeholder="Digite uma password"
                      className={`form-control ${
                        errors.password ? 'is-invalid' : ''
                      }`}
                      {...register('password')}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  <div className="d-grid mt-2">
                    <button type="submit" className="btn bg-custom">
                      Cadastrar
                    </button>
                  </div>
                </form>
                <br />
                <button className="custom-link" onClick={rotaLogin}>
                  Fazer login
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="mt-2">
            <Button className="corBotao me-2" onClick={fechaModal}>
              Fechar
            </Button>
            <Button className="corBotao me-2">Agendar</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
};

export default Cadastro;
