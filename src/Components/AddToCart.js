import React from "react";
import CustomNumberInput from "./CustomNumberInput";

const AddToCart = () => {
  return (
    <form className="add-to-cart">
      <CustomNumberInput />
      <input type="submit" value="Sepete ekle" />
    </form>
  );
};

export default AddToCart;
