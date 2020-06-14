const ProductValidation = (values) => {
  let errors = {};

  if (!values.productName) {
    errors.productName = "Ürün ismi girmek zorunludur.";
  } else if (values.productName && values.productName.length > 100) {
    errors.productName = "Ürün ismi en fazla 100 karakter içerebilir.";
  }

  if (!values.productDescription) {
    errors.productDescription = "Ürün açıklaması girmek zorunludur.";
  } else if (
    values.productDescription &&
    values.productDescription.length < 10
  ) {
    errors.productDescription = "Ürün açıklaması en az 10 karakter içerebilir.";
  }

  if (!values.newPrice) {
    errors.newPrice = "Fiyat alanını doldurmak zorunludur.";
  } else if (values.newPrice && values.newPrice < 1) {
    errors.newPrice = "Fiyat alanı negatif veya sıfır olamaz.";
  } else if (values.newPrice > values.oldPrice) {
    errors.oldPrice = "Fiyat alanı, indirimli fiyat alanından küçük olamaz.";
  }

  if (!values.stock) {
    errors.stock = "Stok alanını doldurmak zorunludur.";
  } else if (values.stock && values.stock < 1) {
    errors.stock = "Stok alanı negatif veya sıfır olamaz.";
  }

  if (!values.categoryId) {
    errors.categoryId = "Kategori seçmek zorunludur.";
  }

  return errors;
};

export default ProductValidation;
