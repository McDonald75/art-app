import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddArt from './pages/AddArt';
import EditArt from './pages/EditArt';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/add" element={<AddArt/>} />
        <Route path="/edit/:id" element={<EditArt/>} />
      </Routes>
    </Router>
  );
}

export default App;
