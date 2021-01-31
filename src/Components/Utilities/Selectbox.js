import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

const Selectbox = ({ name, placeholder, data, handleChange, value }) => {
  const [selectedText, setSelectedText] = useState();
  const selectList = useRef();
  const wrapper = useRef();
  const select = useRef();
  const selected = useRef();

  useEffect(() => {
    if (value && value !== "" && data && data.length > 0)
      setSelectedText(data.find((d) => d.id === Number(value)).categoryName);
  }, [value, data]);

  const handleSearch = (e) => {
    Array.from(selectList.current.children).forEach((c) => {
      if (!c.innerText.toLowerCase().includes(e.target.value.toLowerCase()))
        c.classList.add("d-none");
      else c.classList.remove("d-none");
    });
  };

  const attendValue = (e) => {
    const data = e.target.getAttribute("data-value");
    select.current.value = data;
    selected.current.innerText = e.target.innerText;

    var event = new Event("change", { bubbles: true });
    select.current.dispatchEvent(event);
  };

  const expandList = (e) => {
    if (e.target.nodeName !== "INPUT") wrapper.current.classList.toggle("open");
  };

  return (
    <div className="m-select-wrapper" ref={wrapper} onClick={expandList}>
      <select
        ref={select}
        onChange={handleChange}
        className="m-select"
        name={name}
        value={value || ""}
      >
        {data.map((d, i) => (
          <option key={i} value={d.id}>
            {d.categoryName}
          </option>
        ))}
      </select>
      <div className="selected">
        <span ref={selected}>{selectedText || placeholder}</span>
        <FontAwesomeIcon icon="chevron-down" />
      </div>
      <div className="select-expand">
        <input
          className="select-q"
          type="text"
          placeholder="Ara..."
          onKeyUp={handleSearch}
        />
        <ul ref={selectList} className="select-list">
          {data.map((d, i) => (
            <li key={i} data-value={d.id} onClick={attendValue}>
              {d.categoryName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Selectbox;
