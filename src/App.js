import React, { useState } from 'react';
import logo from './logo.jpg';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState('all');

  const portfolioItems = [
    { id: 1, category: 'web', title: 'Proyecto Web', description: 'Desarrollo de una página para una aerolinea.' },
    { id: 2, category: 'mobile', title: 'Proyecto Móvil', description: 'Desarrollo de una juego de plataformas.' },
    { id: 3, category: 'web', title: 'Proyecto Web', description: 'Creación de un sistema de blog.' },
  ];

  const habilidades = [
    { id: 1, skill: 'HTML', level: 'Avanzado' },
    { id: 2, skill: 'CSS', level: 'Intermedio' },
    { id: 3, skill: 'JavaScript', level: 'Avanzado' },
    { id: 4, skill: 'React', level: 'Intermedio' },
    { id: 5, skill: 'Node.js', level: 'Básico' },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>José Manuel Miranda García</h1>
        <p>Estudiante de Ingeniería en Tecnologías de la Información</p>
        <button onClick={() => setDarkMode(!darkMode)}>Alternar a Modo Oscuro</button>
      </header>

      <main>
        <section id="about">
          <h2>Sobre Mí</h2>
          <p>
            Hola, soy José Miranda, un apasionado por la tecnología y el desarrollo web. Actualmente tengo 18 años y estoy estudiando Ingeniería en Tecnologías de la Información. Mi objetivo es contribuir al desarrollo de soluciones tecnológicas innovadoras que impacten positivamente en la sociedad.
          </p>
        </section>

        <section id="skills">
          <h2>Habilidades</h2>
          <ul className="skills-list">
            {habilidades.map((habilidad) => (
              <li key={habilidad.id}>
                <strong>{habilidad.skill}:</strong> {habilidad.level}
              </li>
            ))}
          </ul>
        </section>

        <section id="portfolio">
          <h2>Portafolio</h2>
          <div className="filters">
            <button onClick={() => setFilter('all')}>Todos</button>
            <button onClick={() => setFilter('web')}>Web</button>
            <button onClick={() => setFilter('mobile')}>Móvil</button>
          </div>
          <div className="portfolio-items">
            {filteredItems.map((item) => (
              <div key={item.id} className="portfolio-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Datos de Contacto</h2>
          <ul className="contact-details">
            <li><strong>Número:</strong> 8667 2323</li>
            <li><strong>Correo:</strong> manuel2106@gmail.com</li>
            <li><strong>Dirección:</strong> Florecia, Ciudad CQ</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
