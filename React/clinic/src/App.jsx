import React, { useEffect } from 'react'
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Website/Pages/About';
import Department from './Website/Pages/Department';

function App() {

   useEffect(() => {
    if (window.AOS) {
      window.AOS.init();
    }
  }, []);

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/department' element={<Department />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App