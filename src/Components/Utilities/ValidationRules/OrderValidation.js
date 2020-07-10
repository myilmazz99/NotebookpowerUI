const OrderValidation = (values) => {
  let errors = {};

  if (!values.fullName) errors.fullName = "İsim alanını doldurmak zorunludur.";
  if (!values.phoneNumber)
    errors.phoneNumber = "Telefon alanını doldurmak zorunludur.";
  if (!values.addressHeader)
    errors.addressHeader = "Adres başlığı alanını doldurmak zorunludur.";
  if (!values.city) errors.city = "Şehir alanını doldurmak zorunludur.";
  if (!values.state) errors.state = "Semt alanını doldurmak zorunludur.";
  if (!values.addressDescription)
    errors.addressDescription = "Adres alanını doldurmak zorunludur.";

  return errors;
};

export default OrderValidation;
