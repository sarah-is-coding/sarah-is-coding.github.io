import React, { useState, useEffect } from 'react';
import Particles from 'particles.js';
import '../styles/styles.scss';

const App = () => {
  // State for Theme Toggle
  const [theme, setTheme] = useState('light');

  // Initialize particles.js in useEffect hook
  useEffect(() => {
    Particles.init({
      selector: '.particle-js',
      maxParticles: 100,
      color: theme === 'light' ? '#000000' : '#ffffff',
    });
  }, [theme]);

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className="app">
      <header className="font-josefin">
        <h1>My Portfolio</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </header>
      <main className="font-playfair">
        <section>
          <h2 className="hover:scale-105">About Me</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, harum?</p>
        </section>
        <section>
          <h2 className="hover:scale-105">Projects</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, harum?</p>
        </section>
      </main>
      <div className="particles-js"></div>
    </div>
  );
}

export default App;
