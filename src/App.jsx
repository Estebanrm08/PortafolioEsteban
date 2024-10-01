import React from 'react';
import Footer from "./componentes/Footer.jsx";
import Header from './componentes/Header.jsx';
import PhotoSection from './componentes/PhotoSection.jsx';
import ProjectList from './componentes/ProjectList.jsx';
import './styles/styles.css'; 

const App = () => {
  return (
    <div>
      <Header />
      <PhotoSection />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default App;
