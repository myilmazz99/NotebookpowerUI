import React, { useState, useEffect } from "react";

const SelectBox = ({ defaultValue, name, options, reset, handleChange }) => {
  let [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    setSelected(defaultValue);
  }, [reset]);

  const handleSelect = (e) => {
    //.parentElement returns undefined if the target is svg or path.
    if (e.target.tagName === "svg" || e.target.tagName === "path") return;
    if (!e.target.className.includes("option")) {
      let element = e.target;

      const isParentDiv = (element) => {
        if (element.parentElement.tagName !== "DIV") {
          isParentDiv(element.parentElement);
        } else {
          return element.parentElement;
        }
      };

      if (element.tagName !== "DIV") {
        element = isParentDiv(element);
      }

      element.children[2].classList.toggle("closed");
      element.children[1].classList.toggle("select-arrow-up");
    }
  };

  const handleOption = (e) => {
    setSelected(e.target.innerText);
    e.target.parentElement.classList.toggle("closed");
  };

  return (
    <div onClick={handleSelect} className="selectbox">
      <input type="text" value={selected} onChange={handleChange} />

      <span className="select-arrow"></span>
      <ul className="options closed">
        {options
          ? options.map((i) => (
              <li className="option" onClick={(e) => handleOption(e)}>
                {i}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};

export default SelectBox;
