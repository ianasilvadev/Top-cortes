import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import './Login.css';

const Login = ({ fechaModal }, { isModal }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onClose = () => {
    if (isModal) {
      // Redirecionar para a página inicial se o Login estiver sendo exibido como um modal
      navigate('/');
    }
  };

  const rotaCadastro = (event) => {
    event.preventDefault();
    navigate('/cadastro');
  };

  const createUserFormSchema = z.object({
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Formato de e-mail inválido'),
    password: z
      .string()
      .min(6, 'A password precisa de pelo menos 6 caracteres'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3002/login', data);
      console.log('Login bem-sucedido:', response.data);
      navigate('/dashboard');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('E-mail ou senha inválidos.');
      } else {
        setError('Erro ao fazer login. Por favor, tente novamente mais tarde.');
      }
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="modal-container">
      <Modal.Dialog>
        <div>
          <Modal.Title className="mt-2 mb-3">Meu agendamento</Modal.Title>
          <IoIosCloseCircleOutline onClick={fechaModal} />
        </div>
        <Modal.Body className="mt-2">
          <div className="login template d-flex justify-content-center align-items-center bg-custom">
            <div className="form_container p-3 rounded-4 bg-white">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h3 className="text-center mb-3">Faça seu login</h3>
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
                  <label htmlFor="password" className="mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Digite sua password"
                    className={`form-control ${
                      errors.password && 'is-invalid'
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
                    Login
                  </button>
                </div>
              </form>
              <br />
              <button className="custom-link" onClick={rotaCadastro}>
                Não tem cadastro? Faça agora!
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
  );
};

export default Login;
