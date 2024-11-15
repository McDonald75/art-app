import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddArt from './pages/AddArt';
import EditArt from './pages/EditArt';
import Navbar from './components/Navbar';
import './styles.css';

function App() {
  const [arts, setArts] = useState([]);
  const [error, setError] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:8080/arts').then(res=>{
      if(!res.ok) throw new Error("Art not fetch error")
        return res.json()
    }).then(res=>{
      console.log(arts)
      setArts(res)
    }).catch(err=>{
      setError(true)
      alert(err.message)
    })
  },[])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />
        <Route path="/add" element={<AddArt />
        <Route path="/edit/:id" element={<EditArt />
      </Routes>
    </Router>
  );
}

export default App;
