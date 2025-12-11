import React from 'react';
import useLocalStorage from 'use-local-storage';
import NavBar from './Components/NavBar/navbar';
import Home from './pages/home';
import Footer from './Components/Footer/footer';
import './scss/main.scss'

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark');

  const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
  }
  
  return (
    <div className='app' data-theme={theme}>
    <NavBar switchTheme={switchTheme} theme={theme}/>
    <div className='container'>
      <Home />
    </div>
    <Footer/>
    </div>
  );
}

export default App;
