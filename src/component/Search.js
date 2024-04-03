import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        onChange={inputHandler}
        placeholder=" search picture"
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
