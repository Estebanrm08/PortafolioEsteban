// src/components/ProjectList.jsx
import React from 'react';

export const ProjectList = () => {
  return (
    <section className="content">
      <div className="grand-title" id="proyecto">
        <h4>Portafolio: Desarrollo de Experiencias Multimedia para la Web</h4>
      </div>
      
      <section className="project">
        <h3>Ejercicios Propuestos en Clase</h3>
        <ol>
          <li>Paso a Paso Git: "Cómo borrar archivos binarios de un repositorio"</li>
          <li>Página web adaptativa que cambia de color según la resolución de la pantalla</li>
          <li>Interfaces de inicio de sesión para la Universidad Autónoma de Occidente</li>
        </ol>
      </section>
      
      <section className="project">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7QSyY--JFrwgRQx7GExIJdxonuL0lIsDQw&s"
          alt="Ejemplo de uso de git filter-repo"
        />
        <h3>Borrar Archivos Binarios</h3>
        <p>Para eliminar archivos binarios del historial de un repositorio Git se usa el comando</p>
        <code>git filter-repo</code>.
      </section>
    </section>
  );
};
