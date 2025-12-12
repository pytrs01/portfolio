import React from 'react';
import Sidebar from './Components/Sidebar/sidebar';
import Home from './pages/home';
import './scss/main.scss'

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
