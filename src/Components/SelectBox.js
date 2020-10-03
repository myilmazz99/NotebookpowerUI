import React, { useState, useEffect, useRef } from "react";
//router
import { Link } from "react-router-dom";

const SelectBox = ({ defaultValue, name, options, reset, collectFilters }) => {
  let [selected, setSelected] = useState(defaultValue);
  const optionsList = useRef(null);
  const selectArrow = useRef(null);

  useEffect(() => {
    setSelected(defaultValue);
  }, [reset]);

  useEffect(() => {
    if (selected !== defaultValue) collectFilters(name, selected);
  }, [selected]);

  const handleSelect = (e) => {
    optionsList.current.classList.toggle("closed");
    selectArrow.current.classList.toggle("select-arrow-up");
  };

  const handleOption = (e) => {
    setSelected(e.target.innerText);
  };

  return (
    <div onClick={handleSelect} className="selectbox">
      <span className="selectbox-value">{selected}</span>

      <span className="select-arrow" ref={selectArrow}></span>
      <ul className="options closed" ref={optionsList}>
        {options
          ? options.map((i, j) => (
              <li key={j} className="option">
                {name === "orderby" ? (
                  <Link onClick={handleOption} to={`/products?${name}=${i}`}>
                    {i}
                  </Link>
                ) : (
                  i
                )}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default SelectBox;
