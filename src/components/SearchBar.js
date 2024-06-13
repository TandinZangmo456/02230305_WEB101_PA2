import React, { useState } from 'react';

const SearchBar = ({ onSearch, onShowCaught }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.toLowerCase());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Pokemon"
      />
      <button type="submit">Search</button>
      <button type="button" onClick={onShowCaught}>Caught</button>
    </form>
  );
};

export default SearchBar;
