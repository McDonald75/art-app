import React, { useContext } from 'react';
import ArtCard from './ArtCard';
import { Context } from './context';

const ArtList = ({ arts, onEdit, onDelete }) => {
  const {arts} = useContext(Context)
 return( <div>
    {arts.map((art) => (
      <ArtCard key={art.id} art={art} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </div>)
};

export default ArtList;
