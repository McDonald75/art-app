import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddArt from './pages/AddArt';
import EditArt from './pages/EditArt';
import Navbar from './components/Navbar';
import './styles.css';

function App() {

  const [arts, setArts] = useState([]);
  useEffect(()=>{
    fetch('').then(res=>{
      if(!res.ok) throw new Error("Art not fetch error")
        return res.json()
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },[])

  
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
