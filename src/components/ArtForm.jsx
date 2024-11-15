import React, { useState } from 'react';

const ArtForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [author, setAuthor] = useState(initialData.author || '');
  const [price, setPrice] = useState(initialData.price || '');
  const [imageLink, setImageLink] = useState(initialData.imageLink || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert()
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
        <input type="text" value={imageLink} onChange={(e) => setImageLink(e.target.value)} required />
        </div>
      </div>
      <button type="submit">Save Art</button>
    </form>
  );
};

export default ArtForm;
