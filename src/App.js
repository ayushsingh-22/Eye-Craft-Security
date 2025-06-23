import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import Footer from './Components/Footer';
import About from './Screens/About';
import './App.css';
import ServiceScreen from './Screens/ServiceScreen';
import ContactUs from './Screens/ContactUs';
import AdminLogin from './Screens/LoginScreen';
import QueryTable from './Screens/Dashboard';
import ChatBot from './Components/Chatbot';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-services" element={<ServiceScreen />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<QueryTable />} />
      </Routes>
      <Footer />
      <ChatBot /> 
    </Router>
  );
}