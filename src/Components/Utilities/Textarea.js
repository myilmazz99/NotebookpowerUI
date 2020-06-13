import React from "react";

const Textarea = ({ value, handleChange, name, placeholder, error }) => {
  const errorStyles = {
    backgroundColor: "#ffcccc",
    borderColor: "red",
  };

  return (
    <div className="input-wrapper">
      <textarea
        style={error && errorStyles}
        name={name}
        cols="auto"
        rows="auto"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      ></textarea>
      {error && <small>** {error}</small>}
    </div>
  );
};

export default Textarea;
