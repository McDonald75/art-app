import React from 'react';
import ArtCard from './ArtCard';

const ArtList = ({ arts, onEdit, onDelete }) => (
  <div>
    {arts.map((art) => (
      <ArtCard key={art.id} art={art} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </div>
);

export default ArtList;
