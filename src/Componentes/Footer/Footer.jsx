import React from 'react';
import { ImWhatsapp } from 'react-icons/im';
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-white">
        <div className="footer-content">
          <div className="left-content">
            <h2 className="highlight">Entre em contato com a gente!</h2>
            <p className="slogan">Onde Cada Corte Conta a Sua História</p>
            <button className="whatsapp-button">
              <ImWhatsapp className="icon" />
              <a href="https://api.whatsapp.com/send?phone=5585987954321" target="_blank" rel="noopener noreferrer">
                Entre em contato pelo WhatsApp
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="footer-green">
        <div className="right-content">
          <div className="contato-item">
            <ImWhatsapp className="icon" />
            <p>(85) 98795-4321</p>
          </div>
          <div className="contato-item">
            <FaMapMarkerAlt className="icon" />
            <p>Rua dos Barbeiros, 123 - Centro</p>
          </div>
          <div className="contato-item">
            <FaEnvelope className="icon" />
            <p>contato@barbearia.com</p>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="icon" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=5585987954321" target="_blank" rel="noopener noreferrer">
              <ImWhatsapp className="icon" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Barbearia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
