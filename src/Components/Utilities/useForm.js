import { useState, useEffect } from "react";

const useForm = (callback) => {
  const [didSubmit, setDidSubmit] = useState(false);
  //const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setDidSubmit(true);
  };

  useEffect(() => {
    if (didSubmit) {
      callback();
      setDidSubmit(false);
    }
  }, [didSubmit]);

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
  };
};
export default useForm;
