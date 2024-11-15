import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Context } from '../components/context';

const EditArt = () => {
  const { id } = useParams();
  const {arts} = useContext(Context)
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

  };

  return (
    <div className="edit-art-container">
      <h2>Edit Artwork</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <p>Name</p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <p>
          Author:

          </p>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <p>
          Price:

          </p>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <p>
          Image Link:

          </p>
          <input type="url" value={imageLink} onChange={(e) => setImageLink(e.target.value)} required />
        </div>
        <button type="submit">Update Artwork</button>
      </form>
    </div>
  );
};

export default EditArt;
