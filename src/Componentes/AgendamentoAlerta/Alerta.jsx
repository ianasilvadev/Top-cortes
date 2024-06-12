import React, { useState } from 'react';
import './Alerta.css';

function Alerta() {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage(`Agendamento realizado com sucesso para ${name} no dia ${date} às ${time}.`);
        setName('');
        setDate('');
        setTime('');
    };

    const closeModal = () => {
        setSuccessMessage('');
    };

    return (
        <div className="container">
            <h1>Agendamento</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Data do Agendamento:</label>
                    <input 
                        type="date" 
                        id="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Hora do Agendamento:</label>
                    <input 
                        type="time" 
                        id="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Agendar</button>
            </form>

            {successMessage && (
                <div className="modal" style={{ display: 'flex' }}>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{successMessage}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Alerta;
