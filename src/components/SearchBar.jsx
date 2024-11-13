import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search by art name or author..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>
);

export default SearchBar;
