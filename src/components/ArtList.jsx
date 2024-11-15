import React, { useContext, useState } from 'react';
import ArtCard from './ArtCard';
import { Context } from './context';

const ArtList = () => {
  const {arts} = useContext(Context)
 return( <div>
    {arts.map((art) => (
      <ArtCard key={art.id} art={art} />
    ))}
  </div>)
};

export default ArtList;
