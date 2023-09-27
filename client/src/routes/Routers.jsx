import React from 'react';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Employees from '../pages/Employees';
import ServiceDetails from '../pages/ServiceDetails';
import {Routes, Route} from 'react-router-dom';

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/services/:id' element={<ServiceDetails />} />
    </Routes>
}

export default Routers;