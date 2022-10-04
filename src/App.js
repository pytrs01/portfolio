import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/navbar';
import Work from './pages/work';
import About from './pages/about';
import Footer from './components/Footer/footer';
import { Route, Routes } from 'react-router-dom';
import './scss/main.scss'
//import './App.css';

function App() {
  
  return (
    <>
    <NavBar/>
    <div className='container'>
      <Routes>
        <Route path='/' element={<Work />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
