import React, { useState } from "react";

const AddToCart = () => {
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

  return (
    <form className="add-to-cart">
      <span className="decrement" onClick={(i) => decrementOrderCount(i)}>
        -
      </span>
      <input
        className="order-count"
        type="text"
        onChange={(e) => handleOnChange(e)}
        value={orderCount}
      />
      <span className="increment" onClick={() => incrementOrderCount()}>
        +
      </span>
      <input type="submit" value="Sepete ekle" />
    </form>
  );
};

export default AddToCart;
