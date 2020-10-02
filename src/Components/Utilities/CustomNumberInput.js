import React, { useState, useEffect } from "react";

const CustomNumberInput = ({ defValue, handleQuantity }) => {
  const [orderCount, setOrderCount] = useState(defValue || 1);

  useEffect(() => {
    handleQuantity && handleQuantity(orderCount);
  }, [orderCount]);

  useEffect(() => {
    handleChange(defValue);
  }, [defValue]);

  const incrementOrderCount = (e) => {
    handleChange(Number(e.target.previousSibling.value) + 1);
  };

  const decrementOrderCount = (e) => {
    if (Number(e.target.nextSibling.value) <= 1) return;
    handleChange(Number(e.target.nextSibling.value) - 1);
  };

  const handleChange = (e) => {
    if (e) {
      if (typeof e === "number") {
        setOrderCount(e);
      } else {
        setOrderCount(e.target.value);
      }
    }
  };

  return (
    <span className="custom-number-input">
      <span className="decrement" onClick={(i) => decrementOrderCount(i)}>
        -
      </span>
      <input
        name="custom-number-input"
        className="order-count"
        type="text"
        onChange={handleChange}
        value={orderCount}
      />
      <span className="increment" onClick={(e) => incrementOrderCount(e)}>
        +
      </span>
    </span>
  );
};

export default CustomNumberInput;
