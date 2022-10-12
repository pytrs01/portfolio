import React from 'react';
import useLocalStorage from 'use-local-storage';
import NavBar from './components/NavBar/navbar';
import Work from './pages/work';
import About from './pages/about';
import Footer from './components/Footer/footer';
import { Route, Routes } from 'react-router-dom';
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
      <Routes>
        <Route path='/' element={<Work />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
    <hr/>
    <Footer/>
    </div>
  );
}

export default App;
