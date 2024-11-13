import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddArt from './pages/AddArt';
import EditArt from './pages/EditArt';
import Navbar from './components/Navbar';
import './styles.css';

function App() {

  const [arts, setArts] = useState(() => {
    const savedArts = localStorage.getItem('arts');
    return savedArts ? JSON.parse(savedArts) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('arts', JSON.stringify(arts));
  }, [arts]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard arts={arts} setArts={setArts} />} />
        <Route path="/add" element={<AddArt arts={arts} setArts={setArts} />} />
        <Route path="/edit/:id" element={<EditArt arts={arts} setArts={setArts} />} />
      </Routes>
    </Router>
  );
}

export default App;