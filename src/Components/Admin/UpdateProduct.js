import React, { useEffect } from "react";
import CategorySelectBox from "../Utilities/CategorySelectBox";
import useForm from "../Utilities/useForm";
import { useHistory, useParams } from "react-router-dom";
import useSpecRows from "../Utilities/useSpecRows";
//Validation
import ProductValidation from "../Utilities/ValidationRules/ProductValidation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getProduct,
  updateProduct,
  removeSpecification,
} from "../../Redux/Actions/productActions";
import lowerCaseFirstChar from "../Tools/lowerCaseFirstChar";
import TextEditor from "./TextEditor";
import SlidingInput from "./SlidingInput";

const UpdateProduct = ({
  products,
  getProduct,
  updateProduct,
  removeSpecification,
  validationErrors,
}) => {
  let {
    handleChange,
    handleSubmit,
    values,
    handleUpload,
    errors,
    updateValues,
    updateErrors,
  } = useForm(update, ProductValidation);
  let {
    setSpecRowCount,
    displaySpecRow,
    getRowValues,
    getSpecifications,
  } = useSpecRows(removeSpec);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (products) {
      let product = products.find((i) => i.id === Number(id));
      if (!product) {
        getProduct(Number(id));
      } else {
        updateValues(product);
        getSpecifications(product.specifications);
      }
    }
  }, [products]);

  useEffect(() => {
    if (validationErrors.length > 0) {
      let newErr = {};
      validationErrors.forEach((i) => {
        let propName = lowerCaseFirstChar(i.PropertyName);
        newErr[propName] = i.ErrorMessage;
      });
      updateErrors(newErr);
    }
  }, [validationErrors]);

  const retrieveMissingInputValuesAndSubmit = (e) => {
    e.preventDefault();

    values.specifications = [
      ...values.specifications,
      ...getRowValues(values.specifications),
    ];

    const convertToNumber = (string, isFloat) => {
      if (isNaN(string)) return;
      return isFloat ? parseFloat(string) : parseInt(string);
    };

    values.stock = convertToNumber(values.stock);
    values.oldPrice = convertToNumber(values.oldPrice, true);
    values.newPrice = convertToNumber(values.newPrice, true);
    values.categoryId = convertToNumber(values.categoryId);

    handleSubmit();
  };

  function removeSpec(specId) {
    removeSpecification(id, specId);
  }

  function update() {
    updateProduct(values, history);
  }

  return (
    <div id="admin-update-product">
      <div className="bg-primary shadow p-4">
        <h2 className="text-white">Ürün Güncelle</h2>
      </div>
      <form
        onSubmit={(e) => retrieveMissingInputValuesAndSubmit(e)}
        encType="multipart/form-data"
        className="p-4"
      >
        <div className=" mb-4">
          <SlidingInput
            type="text"
            name="productName"
            placeholder="Ürün Adı"
            value={values.productName || ""}
            onChangeEvent={handleChange}
            error={errors.productName}
          />
        </div>

        <div className="d-flex j-between mb-4">
          <SlidingInput
            type="number"
            name="oldPrice"
            placeholder="Fiyat"
            value={values.oldPrice || ""}
            onChangeEvent={handleChange}
            error={errors.oldPrice}
            step="0.01"
            classes="pr-1"
          />
          <SlidingInput
            type="number"
            name="newPrice"
            placeholder="İndirimli Fiyat"
            value={values.newPrice || ""}
            onChangeEvent={handleChange}
            error={errors.newPrice}
            step="0.01"
            classes="pr-1"
          />
          <SlidingInput
            type="number"
            name="stock"
            placeholder="Stok Adedi"
            value={values.stock || ""}
            onChangeEvent={handleChange}
            error={errors.stock}
          />
        </div>

        <div className="mb-4">
          <TextEditor
            placeholder="Ürün Açıklaması"
            handleChange={handleChange}
            name="productDescription"
            value={values.productDescription}
            error={errors.productDescription}
          />
        </div>

        <div className="mb-4">
          <label>Kategori</label>
          <CategorySelectBox
            handleChange={handleChange}
            categoryId={values.categoryId}
          />
          {errors.categoryId && (
            <div className="text-danger small">{errors.categoryId}</div>
          )}
        </div>

        <div className="mb-4">
          <label>Ürün Resimleri</label>
          <input
            name="newProductImages"
            type="file"
            multiple
            onChange={handleUpload}
            className="border"
          />
        </div>

        <div className="mb-4">
          <label>Donanım</label>
          <button
            className="btn btn-primary ml-2"
            onClick={(e) => {
              e.preventDefault();
              setSpecRowCount((prev) => (prev += 1));
            }}
          >
            Satır Ekle
          </button>
          {displaySpecRow.map((i) => i)}
        </div>

        <button className="btn btn-primary w-100">Kaydet</button>
      </form>
    </div>
  );
};

const mapState = (state) => ({
  products: state.productReducer.products,
  validationErrors: state.productReducer.errors,
});

const mapDispatch = (dispatch) => ({
  getProduct: bindActionCreators(getProduct, dispatch),
  updateProduct: bindActionCreators(updateProduct, dispatch),
  removeSpecification: bindActionCreators(removeSpecification, dispatch),
});

export default connect(mapState, mapDispatch)(UpdateProduct);
