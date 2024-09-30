// src/components/Header.jsx
import React from 'react';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav" id="sticker">
          <label htmlFor="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />
          <div className="menu">
            <a href="#inicio">Inicio</a>
            <a href="#proyecto">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>
    </header>
  );
};
