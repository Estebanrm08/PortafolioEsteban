// src/App.jsx
import React from 'react';
import { Header } from './components/Header';
import { PhotoSection } from './components/PhotoSection';
import { ProjectList } from './components/ProjectList';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <PhotoSection />
      <ProjectList />
      <Footer />
    </>
  );
}

export default App;
