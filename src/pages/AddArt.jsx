import React from 'react';
import ArtForm from '../components/ArtForm';
import { useNavigate } from 'react-router-dom';

const AddArt = ({ arts, setArts }) => {
  const navigate = useNavigate();

  return (
    <div className='edit-art-container'>
      <h2>Add New Art</h2>
      <ArtForm />
    </div>
  );
};

export default AddArt;
