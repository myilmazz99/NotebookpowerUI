import React, { useState } from "react";

const CustomNumberInput = () => {
  const [orderCount, setOrderCount] = useState(1);

  const incrementOrderCount = () => {
    let value = document.querySelector(".order-count").value;
    setOrderCount(Number(value) + 1);
  };

  const decrementOrderCount = () => {
    let value = document.querySelector(".order-count").value;
    setOrderCount(Number(value) - 1);
  };

  const handleOnChange = (e) => {
    if (!isNaN(Number(e.target.value))) {
      setOrderCount(Number(e.target.value));
    }
  };

  const buttonStyling = {
    cursor: "pointer",
    fontSize: "1.9rem",
    fontWeight: "lighter",
  };

  const inputStyling = {
    border: "none",
    borderBottom: "1px solid #c5bbb3",
    width: "60px",
    margin: "0 1rem",
    textAlign: "center",
    padding: "0.6rem 1rem",
    backgroundColor: "rgba(255,255,255,0.3)",
    fontSize: "1.1rem",
    fontFamily: "inherit",
  };

  return (
    <span style={{ userSelect: "none" }}>
      <span
        className="decrement"
        style={buttonStyling}
        onClick={(i) => decrementOrderCount(i)}
      >
        -
      </span>
      <input
        style={inputStyling}
        className="order-count"
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={orderCount}
      />
      <span
        style={buttonStyling}
        className="increment"
        onClick={() => incrementOrderCount()}
      >
        +
      </span>
    </span>
  );
};

export default CustomNumberInput;
