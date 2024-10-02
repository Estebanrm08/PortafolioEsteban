import React from 'react';

const PhotoSection = () => {
  return (
    <section className="photo" id="inicio">
      <div className="photo-text">
        <h4 data-ix="skype">Esteban Román Mesa</h4>
        <p data-ix="subtitle-hero-up">Estudiante de Ingeniería Multimedia en la Universidad Autónoma de Occidente.
        Actualmente, estoy en 6 semestre de la carrera, tengo 20 años y me gusta mucho la tecnologia y sus aplicaciones.
        </p>
        <br>
        </br>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocJ9FrhivfUUU-4L79EcbOfPcW1Q7oWvCMtjJaguzGC6-XOr-g=s288-c-no" alt="Foto de Esteban Román Mesa" />
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default PhotoSection;

