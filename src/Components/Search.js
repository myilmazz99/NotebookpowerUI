import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//router
import { Link } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const form = useRef(null);

  const handleChange = (e) => {
    let { value } = e.target;
    setSearch(value);
  };

  const expandSearch = (e) => {
    e.preventDefault();
    form.current.classList.toggle("form-visible");
  };

  return (
    <>
      <button className="search-btn" onClick={(e) => expandSearch(e)}>
        <FontAwesomeIcon icon="search" />
      </button>
      <form className="search-form" ref={form}>
        <input
          type="text"
          name="s"
          className="search-input"
          onChange={handleChange}
        />
        <Link to={`/products?s=${search}`}>Ara</Link>
      </form>
    </>
  );
};

export default Search;
