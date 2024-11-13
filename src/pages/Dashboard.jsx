// src/pages/Dashboard.js
import React, { useState } from 'react';
import ArtList from '../components/ArtList';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ arts, setArts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleEdit = (art) => navigate(`/edit/${art.id}`, { state: { art } });

  // Function to delete art by id
  const handleDelete = (id) => {
    const updatedArts = arts.filter((art) => art.id !== id);
    setArts(updatedArts);  // Update the state to remove the art
  };

  // Filter artworks based on search term
  const filteredArts = arts.filter(
    (art) =>
      art.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Art Dashboard</h2>
      <button onClick={() => navigate('/add')}>Add New Art</button>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ArtList arts={filteredArts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
