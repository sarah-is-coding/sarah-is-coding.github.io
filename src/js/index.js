import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import cherryBlossom from '../../assets/images/cherry_blossom.png';
import Particles from 'react-tsparticles';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';
import '../styles/styles.scss';

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="index">
        <header className="text-center">
          <nav>
            <ul className="flex justify-center space-x-4 p-4">
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <div className="particles-container">
          <Particles 
            id="tsparticles"
            options={{
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
                    src: cherryBlossom, 
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
            }}
          />
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));  // Render the app to the DOM
