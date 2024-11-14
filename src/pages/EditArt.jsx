import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditArt = ({ arts, setArts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  
  const artToEdit = arts.find((art) => art.id === parseInt(id));
  
  const [name, setName] = useState(artToEdit ? artToEdit.name : '');
  const [author, setAuthor] = useState(artToEdit ? artToEdit.author : '');
  const [price, setPrice] = useState(artToEdit ? artToEdit.price : '');
  const [imageLink, setImageLink] = useState(artToEdit ? artToEdit.imageLink : '');

  useEffect(() => {
    if (!artToEdit) {
      
      navigate('/');
    }
  }, [artToEdit, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

    
    const updatedArts = arts.map((art) =>
      art.id === parseInt(id) ? { ...art, name, author, price, imageLink } : art
    );

    setArts(updatedArts);
    navigate('/'); 
  };

  return (
    <div className="edit-art-container">
      <h2>Edit Artwork</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <label>
          Image Link:
          <input type="url" value={imageLink} onChange={(e) => setImageLink(e.target.value)} required />
        </label>
        <button type="submit">Update Artwork</button>
      </form>
    </div>
  );
};

export default EditArt;
