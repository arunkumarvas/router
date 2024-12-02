import React from 'react'
import { Route,Routes } from 'react-router-dom';
import NoPage from './Layout/NoPage';
import Users from './Users';
import About from './Layout/About';
import Home from './Layout/Home';
import Services from './Layout/Services';
import Navbar1 from './Layout/Navbar1';
export default function App() {
  return (
    <>
    <Navbar1/>
    

        <Routes>  
           

           <Route path="/home" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/service" element={<Services/>} />
           <Route path="*" element={<NoPage/>} />
           <Route path ='/users/*' element={<Users/>} />
           
          
           
       </Routes>

 
     
     
        
        </>




    

  );
}


