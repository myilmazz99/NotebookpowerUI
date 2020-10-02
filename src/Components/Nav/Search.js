import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ refs, closeSearchBar }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    let { value } = e.target;
    setSearch(value);
  };

  return (
    <>
      <form className="search-form" ref={refs}>
        <input
          type="text"
          name="s"
          className="search-input"
          onChange={handleChange}
        />
        <Link to={`/products?s=${search}`} onClick={closeSearchBar}>
          Ara
        </Link>
      </form>
    </>
  );
};

export default Search;
