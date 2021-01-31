import React, { useEffect, useRef } from "react";

const SlidingInput = ({
  placeholder,
  type,
  error,
  name,
  value,
  onChangeEvent,
  step,
  prefix,
  classes,
  defaultValue,
}) => {
  const input = useRef(null);
  const wrapper = useRef(null);

  useEffect(() => {
    if ((value && value !== "") || (defaultValue && defaultValue !== ""))
      wrapper.current.classList.add("focus");
  }, [value]);

  const handleFocus = () => {
    if (!input.current.value)
      input.current.parentElement.classList.toggle("focus");
  };

  return (
    <label className={`sliding-input ${classes}`}>
      <div
        ref={wrapper}
        className={`input-wrapper input-underline ${
          prefix ? "input-prefix" : ""
        }`}
      >
        {prefix ? <span className="prefix">{prefix}</span> : null}
        <input
          ref={input}
          defaultValue={defaultValue}
          onChange={onChangeEvent}
          name={name}
          type={type}
          value={value}
          step={step}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
        <span className="placeholder">{placeholder}</span>
      </div>
      <span className="error">{error}</span>
    </label>
  );
};

export default SlidingInput;
