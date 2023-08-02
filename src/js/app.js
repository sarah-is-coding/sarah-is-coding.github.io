import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { tsParticles } from 'tsparticles';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import '../styles/styles.scss';

const App = () => {
  // State for Theme Toggle
  const [theme, setTheme] = useState('light');

  // Initialize tsParticles in useEffect hook
  useEffect(() => {
    tsParticles.load("tsparticles", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: theme === 'light' ? '#000000' : '#ffffff'
        },
        shape: {
          type: "image",
          image: {
            src: "../../assets/images/cherry_blossom.png",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false
        },
        size: {
          value: 5,
          random: true
        },
        move: {
          enable: true,
          speed: 1,
          direction: "bottom",
          random: false,
          straight: false,
          outMode: "out",
          bounce: false
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse"
          }
        }
      }
    });
  }, [theme]);

  // Toggle the theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <Router>
      <div className="app">
        <header className="font-josefin">
          <nav>
            <ul className="flex justify-between p-4">
              <li className="hover:scale-105 transition-transform duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:scale-105 transition-transform duration-300">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:scale-105 transition-transform duration-300">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="hover:scale-105 transition-transform duration-300">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="dark-light-toggle hover:scale-105 transition-transform duration-300">
                <button onClick={toggleTheme}>
                  {theme === 'light' ? 'Dark' : 'Light'} Theme
                </button>
              </li>
            </ul>
          </nav>
        </header>
        
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div id="tsparticles" className="particles-js"></div>
      </div>
    </Router>
  );
}

export default App;
