import React from "react";
import Input from "../Utilities/Input";
import Textarea from "../Utilities/Textarea";

const AddressForm = ({ handleChange, values, errors }) => {
  return (
    <div className="address">
      <h2>Adres</h2>
      <Input
        type="text"
        name="fullName"
        placeholder="Adınız ve Soyadınız"
        handleChange={handleChange}
        value={values.fullName}
        error={errors.fullName}
      />
      <Input
        type="text"
        name="phoneNumber"
        placeholder="Telefon numaranız"
        handleChange={handleChange}
        value={values.phoneNumber}
        error={errors.phoneNumber}
      />
      <Input
        type="text"
        name="addressHeader"
        placeholder="Adres Başlığı"
        handleChange={handleChange}
        value={values.addressHeader}
        error={errors.addressHeader}
      />
      <Input
        type="text"
        name="city"
        placeholder="Şehir"
        handleChange={handleChange}
        value={values.city}
        error={errors.city}
      />
      <Input
        type="text"
        name="state"
        placeholder="Semt"
        handleChange={handleChange}
        value={values.state}
        error={errors.state}
      />
      <Textarea
        name="addressDescription"
        placeholder="Adres"
        handleChange={handleChange}
        value={values.addressDescription}
        error={errors.addressDescription}
      />
    </div>
  );
};

export default AddressForm;
