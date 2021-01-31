import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setDidSubmit(true);
    setErrors(validate(values));
  };

  const updateValues = (obj) => {
    setValues(obj);
  };

  const updateErrors = (err) => {
    setErrors(err);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && didSubmit) {
      callback(values);
      setDidSubmit(false);
    } else {
      setDidSubmit(false);
    }
  }, [didSubmit]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(e.target.value);
  };

  const handleUpload = (e, input) => {
    let element;
    if (e) {
      element = e.target;
    } else {
      element = input;
    }
    setValues((prev) => ({
      ...prev,
      [element.name]: [...element.files],
    }));
  };

  return {
    values,
    handleSubmit,
    handleChange,
    handleUpload,
    errors,
    updateValues,
    updateErrors,
  };
};
export default useForm;
