import React, { useEffect } from 'react'
import Home from './Website/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Website/Pages/About';
import Department from './Website/Pages/Department';
import Services from './Website/Pages/Services';
import ServiceDetails from './Website/Pages/ServiceDetails';
import Doctors from './Website/Pages/Doctors';
import DepartmentDetails from './Website/Pages/DepartmentDetails';
import Contact from './Website/Pages/Contact';
import Appointment from './Website/Pages/Appointment';
import NotFound from './Website/Pages/NotFound';
import Dashbaord from './Admin/Apages/Dashbaord';
import ServiceManage from './Admin/Apages/ServiceManage';

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
          <Route path='/service' element={<Services />} />
          <Route path='/servicedetails' element={<ServiceDetails />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/departmentdetails' element={<DepartmentDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/appointment' element={<Appointment />} />

          <Route path='*' element={<NotFound />} />


          {/* /adminrouter */}

          <Route path='/dash' element={<Dashbaord />} />
          <Route path='servicemange' element={<ServiceManage />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App