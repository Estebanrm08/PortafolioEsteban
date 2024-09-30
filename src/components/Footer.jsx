// src/components/Footer.jsx
import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <h4>Contacto</h4>
      <div className="container">
        <form action="enviar.php" method="post" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingresa Nombre" className="rect" required />
            <span className="input-description">Tu nombre completo</span>
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo</label>
            <input type="email" id="correo" name="correo" placeholder="Ingresa Correo" className="rect" required />
            <span className="input-description">Tu dirección de correo electrónico</span>
          </div>
          <div className="form-group">
            <button type="submit" className="button">Enviar</button>
          </div>
        </form>
      </div>
    </footer>
  );
};
