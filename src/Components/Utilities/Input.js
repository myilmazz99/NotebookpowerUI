import React from "react";

const Input = ({ value, handleChange, name, type, placeholder, error }) => {
  const errorStyles = {
    backgroundColor: "red",
    borderColor: "red",
  };

  return (
    <div className="input-wrapper">
      <input
        style={error && errorStyles}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value || ""}
      />
      {error && <small>** {error}</small>}
    </div>
  );
};

export default Input;
