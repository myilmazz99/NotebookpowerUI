import React, { useState } from "react";

const CustomNumberInput = () => {
  const [orderCount, setOrderCount] = useState(1);

  const incrementOrderCount = (e) => {
    setOrderCount(Number(e.target.previousSibling.value) + 1);
  };

  const decrementOrderCount = (e) => {
    if (Number(e.target.nextSibling.value) <= 1) return;
    setOrderCount(Number(e.target.nextSibling.value) - 1);
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
    padding: "0.6rem 0",
    backgroundColor: "rgba(255,255,255,0)",
    fontSize: "1.1rem",
    fontFamily: "inherit",
  };

  const container = {
    userSelect: "none",
  };

  return (
    <span style={container}>
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
        onClick={(e) => incrementOrderCount(e)}
      >
        +
      </span>
    </span>
  );
};

export default CustomNumberInput;
