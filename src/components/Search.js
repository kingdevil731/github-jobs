import React from "react";

const Search = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="search"
        name="search"
        id="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="search" onClick={(e) => handleSearch(e)}>
        Search
      </button>
    </div>
  );
};

export default Search;
