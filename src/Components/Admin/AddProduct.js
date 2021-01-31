import React, { useEffect } from "react";
import useForm from "../Utilities/useForm";
import CategorySelectBox from "../Utilities/CategorySelectBox";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addProduct } from "../../Redux/Actions/productActions";
import useSpecRows from "../Utilities/useSpecRows";
//Validation
import ProductValidation from "../Utilities/ValidationRules/ProductValidation";
import lowerCaseFirstChar from "../Tools/lowerCaseFirstChar";
import SlidingInput from "./SlidingInput";
import TextEditor from "./TextEditor";
import { useHistory } from "react-router-dom";

const AddProduct = ({ addProduct, validationErrors }) => {
  let {
    handleSubmit,
    handleChange,
    values,
    handleUpload,
    errors,
    updateErrors,
  } = useForm(add, ProductValidation);
  let { setSpecRowCount, displaySpecRow, getRowValues } = useSpecRows();
  const history = useHistory();

  const retrieveMissingInputValuesAndSubmit = (e) => {
    e.preventDefault();

    values.specifications = [...getRowValues(values.specifications)];

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

  function add() {
    addProduct(values, history);
  }

  return (
    <>
      <div className="bg-primary shadow p-4">
        <h1 className="text-white">Ürün Ekle</h1>
      </div>
      <form
        className="p-4"
        onSubmit={(e) => retrieveMissingInputValuesAndSubmit(e)}
        encType="multipart/form-data"
      >
        <div className="mb-4">
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
            name="productImages"
            type="file"
            multiple
            onChange={handleUpload}
            className="border"
          />
        </div>

        <div className="mb-4">
          <label>Donanım</label>
          <button
            className="btn btn-primary"
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
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: bindActionCreators(addProduct, dispatch),
});

const mapStateToProps = (state) => ({
  validationErrors: state.productReducer.errors,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
