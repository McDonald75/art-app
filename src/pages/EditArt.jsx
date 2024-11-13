// src/components/ArtCard.js
import React from 'react';

const ArtCard = ({ art, onEdit, onDelete }) => (
  <div className="art-card">
    <div>
      <h3>{art.name}</h3>
      <p>Author: {art.author}</p>
      <p>Price: ${art.price}</p>
      <a href={art.imageLink} target="_blank" rel="noopener noreferrer">
        View Image
      </a>
    </div>
    <div>
      <button onClick={() => onEdit(art)}>Edit</button>
      <button onClick={() => onDelete(art.id)}>Delete</button>
    </div>
  </div>
);

export default ArtCard;
