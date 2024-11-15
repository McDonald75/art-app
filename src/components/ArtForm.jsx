import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from './context';

const ArtForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [imageLink, setImageLink] = useState(initialData.imageLink || '');
  const [loading, setLoading] = useState(false)
  const {arts} = useContext(Context)

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    fetch(`https://json-server-zd0r.onrender.com/arts`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:arts.length + 1,
        price,
        name,
        author,
        image:imageLink
      }),
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); 
    })
    .then(data => {
      alert(`art was created`)
      navigate('/')
    })
    .catch(error => {
      alert(error.message)
    }).finally(()=>{
      setLoading(false)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div>
        <div>
          <p>Name</p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
      </div>
      <div>
        <div>
          <p>Author</p>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
      </div>
      <div>
        <div>
          <p>Price</p>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
      </div>
      <div>
        <div>
          <p>Image Link</p>
        <input type="url" value={imageLink} onChange={(e) => setImageLink(e.target.value)} required />
        </div>
      </div>
      <button type="submit">Save Art</button>
      {loading && <p fontSize='12px'>loading...</p>}

    </form>
  );
};

export default ArtForm;
