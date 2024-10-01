import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
      <h4 data-ix="slowfade-scroll-bigs">Contacto</h4>
      <div className="container">
        <form action="enviar.php" method="post" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresa Nombre"
              className="rect"
              required
            />
            <span className="input-description">Tu nombre completo</span>
          </div>
          <div className="form-group">
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder="Ingresa Correo"
              className="rect"
              required
            />
            <span className="input-description">Tu dirección de correo electrónico</span>
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              placeholder="Ingresa Teléfono"
              className="rect"
            />
            <span className="input-description">Tu número de contacto (opcional)</span>
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Escribe tu mensaje"
              className="rect"
              required
            ></textarea>
            <span className="input-description">Escribe tu mensaje aquí</span>
          </div>
          <div className="form-group">
            <button type="submit" className="button">Enviar</button>
          </div>
        </form>

        {/* Redes sociales */}
        <section className="social-media">
          <h3>Redes Sociales</h3>
          <p>
            <a href="https://www.instagram.com/estebanroman08?igsh=OXVoejZhZXR2Yzdi" target="_blank" rel="noopener noreferrer">
              <img src="Assets/instagram.png" alt="Instagram" className="social-icon" />
              Instagram
            </a>
            {' | '}
            <a href="https://github.com/Estebanrm08" target="_blank" rel="noopener noreferrer">
              <img src="Assets/github.png" alt="GitHub" className="social-icon" />
               GitHub
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
