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

  useEffect(() => {
    if (Object.keys(errors).length === 0 && didSubmit) {
      callback();
      setDidSubmit(false);
    }
  }, [callback, didSubmit]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpload = (e) => {
    let { name, files } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: [...files],
    }));
  };

  return {
    values,
    handleSubmit,
    handleChange,
    handleUpload,
    errors,
  };
};
export default useForm;
