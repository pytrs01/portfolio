import React from 'react';
import useLocalStorage from 'use-local-storage';
import { FaSun, FaMoon } from 'react-icons/fa';
import Sidebar from './Components/Sidebar/sidebar';
import Home from './pages/home';
import './scss/main.scss'

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='app' data-theme={theme}>
      <Sidebar />
      <Home />
      <button className='theme-toggle' onClick={toggleTheme} aria-label='Toggle theme'>
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

export default App;
