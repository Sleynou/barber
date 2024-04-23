import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AccueilClient from './AccueilClient';
import ClientNavbar from './ClientNavbar';
import DetailsSalonCoiffure from './DetailsSalonCoiffure'
import FavorisClient from './FavorisClient'
import HomeClient from './HomeClient'
import LoginForm from './LoginForm'
import ProfilClient from './ProfilClient';
import RegisterForm from './RegisterForm';
import ReservationsClient from './ReservationsClient';
import Footer from './Footer'

const ClientFinal = () => {
    return (
      <Router>
        <ClientNavbar/>
        <Routes>
          <Route path="/" element={<AccueilClient/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home/:user_id" element={<HomeClient/>} />
        </Routes>
      </Router>
    );
  };
  
  export default ClientFinal;