import React from 'react';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Employees from '../pages/Employees';
import ServiceDetails from '../pages/ServiceDetails';
import { Routes, Route } from 'react-router-dom';
import Booking from '../pages/Booking';
import Booked from '../pages/Booked';
import Profile from '../pages/Profile';
import PhonePeForm from '../pages/phonepeform';
import PaymentSuccess from '../pages/PaymentSuccess';
import { PaymentFailure } from '../pages/PaymentFailure';

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/services/:id' element={<ServiceDetails />} />
        <Route path='/book_appointment/:id' element={<Booking />} />
        <Route path='/booked' element={<Booked />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/payment/:appointmentId' element={<PhonePeForm />} />
        <Route path='/payment/success' element={<PaymentSuccess />} />
        <Route path='/payment/failure' element={<PaymentFailure />} />
    </Routes>
}

export default Routers;