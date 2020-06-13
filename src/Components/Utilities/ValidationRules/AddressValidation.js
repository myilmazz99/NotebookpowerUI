const AddressValidation = (values) => {
  let errors = {};

  if (!values.fullName) errors.fullName = "İsim alanını doldurmak zorunludur.";
  if (!values.tel) errors.tel = "Telefon alanını doldurmak zorunludur.";
  if (!values.addressHeader)
    errors.addressHeader = "Adres başlığı alanını doldurmak zorunludur.";
  if (!values.city) errors.city = "Şehir alanını doldurmak zorunludur.";
  if (!values.state) errors.state = "Semt alanını doldurmak zorunludur.";
  if (!values.addressDetails)
    errors.addressDetails = "Adres alanını doldurmak zorunludur.";

  return errors;
};

export default AddressValidation;
