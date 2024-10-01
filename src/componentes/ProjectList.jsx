import React from 'react';

const ProjectList = () => {
  return (
    <section className="content">
      <div className="grand-title" id="proyecto">
        <h4 data-ix="slowfade-scroll-bigs">Portafolio: Desarrollo de Experiencias Multimedia para la Web</h4>
      </div>

      {/* Sección para habilidades blandas y duras */}
      <section className="skills">
        <h3>Habilidades Blandas</h3>
        <p>Trabajo en equipo, Comunicación, Creatividad</p>
        <h3>Habilidades Duras</h3>
        <p>JavaScript, React, Git, HTML, CSS, Edición de videos y fotos, Creación de modelados 3D</p>
      </section>

      {/* Trabajos anteriores */}
      <section className="project">
        <h3>Trabajos Anteriores - Entregas Pasadas</h3>
        <div className="card-container">
          {/* Primera Card */}
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7QSyY--JFrwgRQx7GExIJdxonuL0lIsDQw&s" alt="Proyecto 1" className="card-image" />
                <h4>Borrar Archivos Binarios de un Repositorio Git</h4>
              </div>
              <div className="card-back">
                <p>Paso a paso para eliminar archivos binarios del historial de un repositorio Git y evitar posibles errores.</p>
                <p><code>git filter-repo</code></p>
                <a href="borrararchivos.html" className="project-link">Ver proyecto</a>
              </div>
            </div>
          </div>

          {/* Segunda Card */}
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src="public\Assets\image2.png" alt="Proyecto 2" className="card-image" />
                <h4>Página Web Responsive y Adaptativa con Cambio de Color</h4>
              </div>
              <div className="card-back">
                <p>Desarrollo de una página web adaptativa donde se cambia el diseño de los colores al modificar la resolución de la pantalla.</p>
                <a href="biblioteca2.html" className="project-link">Ver proyecto</a>
                <br></br>
                <br></br>
                <a href="https://github.com/Estebanrm08/Desarolloweb" className="project-link">Repositorio GitHub del proyecto</a>
              </div>
            </div>
          </div>

          {/* Tercera Card */}
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <img src="public\Assets\image.png" alt="Proyecto 3" className="card-image" />
                <h4>Interfaces de Inicio de Sesión para la Universidad Autónoma</h4>
              </div>
              <div className="card-back">
                <p>Creación de interfaces HTML para el registro de usuario, recuperación de contraseña e inicio de sesión.</p>
                <a href="public\Interfaces\index.html" className="project-link">Ver proyecto</a>
                <br></br>
                <br></br>
                <a href="https://github.com/edwinmgallego/clase-practica-css/tree/EstebanR/EstebanRoman" className="project-link">Repositorio GitHub del proyecto</a>
              </div>
            </div>
          </div>
          </div>
          </section>

        {/* Trabajos recientes */}
        <section className="recent-project">
          <h3>Trabajos Recientes</h3>
          <div className="card recent-card">
            <div className="card-inner">
              <div className="card-front">
                <img src="public\Assets\Interfazcontador.png" alt="Proyecto 4" className="card-image" />
                <h4>Contador de Números y Verificación de Mayor, Menor o Igual</h4>
              </div>
              <div className="card-back">
                <p>Creación de interfaz de un contador de números para aumentar o disminuir, con verificación mayor, igual o menor al número puesto con el del contador. </p>
                <a href="https://contador-blue-zeta.vercel.app/" className="project-link">Ver proyecto</a>
                <br />
                <br />
                <a href="https://github.com/Estebanrm08/Contador" className="project-link">Repositorio GitHub del proyecto</a>
              </div>
            </div>
          </div>
        </section>
      </section>
  );
};

export default ProjectList;
