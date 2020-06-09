import React, { useState, useEffect } from "react";
//router
import { Link } from "react-router-dom";

const SelectBox = ({ defaultValue, name, options, reset, collectFilters }) => {
  let [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    setSelected(defaultValue);
  }, [reset]);

  useEffect(() => {
    if (selected !== defaultValue) collectFilters(name, selected);
  }, [selected]);

  const handleSelect = (e) => {
    document
      .querySelector(`.selectbox-${name} .options`)
      .classList.toggle("closed");
    document
      .querySelector(`.selectbox-${name} .select-arrow`)
      .classList.toggle("select-arrow-up");
  };

  const handleOption = (e) => {
    if (e.target.tagName.includes("A")) {
      setSelected(e.target.innerText);
    } else {
      setSelected(e.target.children[0].innerText);
    }
  };

  return (
    <div onClick={handleSelect} className={`selectbox selectbox-${name}`}>
      <span className="selectbox-value">{selected}</span>

      <span className="select-arrow"></span>
      <ul className="options closed">
        {options
          ? options.map((i) => (
              <li className="option" onClick={handleOption}>
                <Link to={`/products?${name}=${i}`}>{i}</Link>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default SelectBox;
