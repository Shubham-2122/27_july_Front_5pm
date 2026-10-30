import React from "react";
import Boot from "./Boostrapdata/Boot";
import CardDemo from "./Boostrapdata/CardDemo";
import Footer from "./Boostrapdata/Footer";
import Login from "./Boostrapdata/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/Pages/Home";
import About from "./layout/Pages/About";
import Contact from "./layout/Pages/Contact";
import About1 from "./layout/Pages/About1";
import About2 from "./layout/Pages/About2";
import NotFound from "./layout/Pages/NotFound";
// import MainState from "./State/MainState";
// import Formdata from "./Form_halding/Formdata";
// import FormObj from "./Form_halding/FormObj";
// import Test from "./Effect/Test";
// import UserData from "./Effect/UserData";
// import UserTab from "./Effect/UserTab";
// import Products from "./Effect/Products";
// import MainContext from "./context/MainContext";
// import Hello from "./Jsx/Hello";
// import Css from "./Css/Css";
// import MainProps from "./Props/MainProps";
// import ClassCompo from "./Component/ClassCompo";
// import FunCompo from "./Component/FunCompo";

function App(){
    return(
       <BrowserRouter>
         {/* <h1>Hello App</h1> */}
        {/* <ClassCompo />
        <FunCompo /> */}

        {/* jsx compoenent */}
        {/* <Hello /> */}
        
        {/* css  */}
          {/* <Css /> */}

          {/* <MainProps /> */}

         {/* state */}
          {/* <MainState /> */}


          {/* <Formdata /> */}
          {/* <FormObj /> */}

          {/* <Test /> */}
          {/* <UserData /> */}
          {/* <UserTab /> */}
          {/* <Products /> */}

          {/* <MainContext /> */}

          {/* <Boot /> */}
          {/* <CardDemo /> */}
          {/* <Login />
          <Footer /> */}

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} >
               <Route path="about1" element={<About1 />} />
               <Route path="about2" element={<About2 />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
         </Routes>

       </BrowserRouter>
    )
}
export default App