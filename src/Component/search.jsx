import React, { useState } from "react";

const Search = ({ setValue }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInput = () => {
    setSearchValue("");
  };

  const space = searchValue.replace(/\s+/g, "+");
  const callSearch = (e) => {
    e.preventDefault();
    setValue(space);
    resetInput();
  };

  return (
    <form className="search input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter City name"
        onClick={handleSearchInput}
        value={searchValue}
      />

      <div className="input-group-append">
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={callSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default Search;
