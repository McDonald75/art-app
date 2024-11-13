import React from 'react';
import ArtForm from '../components/ArtForm';
import { useNavigate } from 'react-router-dom';

const AddArt = ({ arts, setArts }) => {
  const navigate = useNavigate();

  const handleAddArt = (newArt) => {
    setArts([...arts, { id: Date.now(), ...newArt }]);
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Art</h2>
      <ArtForm onSubmit={handleAddArt} />
    </div>
  );
};

export default AddArt;
