// src/components/PhotoSection.jsx
import React from 'react';

export const PhotoSection = () => {
  return (
    <section className="photo" id="inicio">
      <div className="photo-text">
        <h4>Esteban Román Mesa</h4>
        <p>Estudiante de Ingeniería Multimedia en la Universidad Autónoma de Occidente.</p>
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocJ9FrhivfUUU-4L79EcbOfPcW1Q7oWvCMtjJaguzGC6-XOr-g=s288-c-no"
          alt="Foto de Esteban Román Mesa"
        />
      </div>
      <div className="overlay"></div>
    </section>
  );
};
