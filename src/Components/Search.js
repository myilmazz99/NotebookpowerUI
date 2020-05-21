import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="nav-search-btn">
      <span>
        <FontAwesomeIcon icon="search" />
      </span>
      <input type="text" placeholder="Ara..." />
    </div>
  );
};

export default Search;
