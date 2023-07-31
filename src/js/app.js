import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <button className="theme-toggle" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <h1>Welcome to My Portfolio</h1>
      <p>Here you'll find my latest projects, skills, and contact information.</p>
      {/* You can add the rest of your portfolio content here */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
