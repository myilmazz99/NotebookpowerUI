import React from "react";
import Tabs from "../Tabs";
import useForm from "../Utilities/useForm";
import AddressValidation from "../Utilities/ValidationRules/AddressValidation";
import Input from "../Utilities/Input";
import Textarea from "../Utilities/Textarea";

const AddressForm = () => {
  const { handleSubmit, handleChange, values, errors } = useForm(
    "",
    AddressValidation
  );
  const renderAddresses = () => (
    <>
      <h2>Adreslerim</h2>
      <div className="saved-addresses">
        <span>Kayıtlı adres bulunamadı.</span>
      </div>
    </>
  );

  const renderAddressForm = () => (
    <form className="address-form" onSubmit={handleSubmit}>
      <h2>Adres Ekle</h2>
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
        name="tel"
        placeholder="Telefon numaranız"
        handleChange={handleChange}
        value={values.tel}
        error={errors.tel}
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
        name="addressDetails"
        placeholder="Adres"
        handleChange={handleChange}
        value={values.addressDetails}
        error={errors.addressDetails}
      />
      <Input type="submit" value="Kaydet" />
    </form>
  );

  return (
    <div className="address">
      <Tabs
        tabName="address-tab"
        tabs={[
          {
            Adreslerim: renderAddresses(),
          },
          {
            "Adres Ekle": renderAddressForm(),
          },
        ]}
      />
    </div>
  );
};

export default AddressForm;
