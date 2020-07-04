import React, { useState, useEffect } from "react";

const CustomNumberInput = ({ refe, defValue, handleQuantity }) => {
  const [orderCount, setOrderCount] = useState(defValue || 1);

  useEffect(() => {
    handleQuantity && handleQuantity(orderCount);
  }, [orderCount]);

  const incrementOrderCount = (e) => {
    setOrderCount(Number(e.target.previousSibling.value) + 1);
  };

  const decrementOrderCount = (e) => {
    if (Number(e.target.nextSibling.value) <= 1) return;
    setOrderCount(Number(e.target.nextSibling.value) - 1);
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
    <span className="custom-number-input" style={container}>
      <span
        className="decrement"
        style={buttonStyling}
        onClick={(i) => decrementOrderCount(i)}
      >
        -
      </span>
      <input
        ref={refe}
        name="custom-number-input"
        style={inputStyling}
        className="order-count"
        type="text"
        value={orderCount}
        readOnly={true}
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
