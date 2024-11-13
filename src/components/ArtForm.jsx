import React, { useState } from 'react';

const ArtForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [imageLink, setImageLink] = useState(initialData.imageLink || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, author, price, imageLink });
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <div>
        <label>Price</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>
      <div>
        <label>Image Link</label>
        <input type="text" value={imageLink} onChange={(e) => setImageLink(e.target.value)} required />
      </div>
      <button type="submit">Save Art</button>
    </form>
  );
};

export default ArtForm;
