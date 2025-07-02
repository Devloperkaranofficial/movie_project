import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img className="cursor-pointer" src="/search.svg" alt="Search" />
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="text"
          placeholder="Search for a movie"
        />
      </div>
    </div>
  );
};
export default Search;
