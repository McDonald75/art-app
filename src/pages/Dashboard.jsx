import React, { useContext, useEffect, useState } from 'react';
import ArtList from '../components/ArtList';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import { Context } from '../components/context';

const Dashboard = () => {
  const {arts, setArts, originalArts, setOriginalArts} = useContext(Context)
  const [error, setError] = useState(false)

  useEffect(()=>{
    fetch('http://localhost:8080/arts').then(res=>{
      if(!res.ok) throw new Error("Art not fetch error")
        return res.json()
    }).then(res=>{
      console.log(arts)
      setArts(res)
      setOriginalArts(res)
    }).catch(err=>{
      setError(true)
      alert(err.message)
    })
  },[])

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleEdit = (art) => navigate(`/edit/${art.id}`);

  const handleDelete = (id) => {
    const updatedArts = arts.filter((art) => art.id !== id);
    setArts(updatedArts);
  };

  const filteredArts = arts.filter(
    (art) =>
      art.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Art Dashboard</h2>
      <div className='header'>
      <button onClick={() => navigate('/add')}>Add New Art</button>
      <SearchBar/>
      </div>
      <ArtList />
    </div>
  );
};

export default Dashboard;
