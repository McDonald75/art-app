import React, { useContext, useState } from 'react';
import { Context } from './context';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState()
    const {setArts, originalArts} = useContext(Context)
    const onSearchChange = (value)=>{
      const newArts = originalArts.filter(art=>art.name.toLowerCase().includes(value.toLowerCase()))
      setArts(newArts)

    }
 return( <div className="search-bar">
    <input
      type="text"
      placeholder="Search by art name or author..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>)
};

export default SearchBar;
