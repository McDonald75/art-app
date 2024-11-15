import React, { useState } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState()
    const onSearchChange = (value)=>{
      console.log(value)

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
