const FeedbackValidation = (values) => {
  let errors = {};

  if (!values.feedback) errors.feedback = "Görüş alanını doldurmak zorunludur.";
  if (!values.email) errors.email = "Email alanını doldurmak zorunludur.";
  if (!values.name) errors.name = "İsim alanını doldurmak zorunludur.";

  return errors;
};

export default FeedbackValidation;
