import React from 'react';

const ArtCard = ({ art, onEdit, onDelete }) => (
  <div className="art-card">
    <img src={art.imageLink} alt={art.name} className="art-image" />
    <div className="art-details">
      <h3>{art.name}</h3>
      <p>Author: {art.author}</p>
      <p>Price: ${art.price}</p>
      <a href={art.imageLink} target="_blank" rel="noopener noreferrer">
        View Full Image
      </a>
    </div>
    <div className="art-card-buttons">
      <button onClick={() => onEdit(art)}>Edit</button>
      <button onClick={() => onDelete(art.id)}>Delete</button>
    </div>
  </div>
);

export default ArtCard;
