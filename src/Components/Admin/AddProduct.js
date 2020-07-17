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
import { useHistory } from "react-router-dom";
import lowerCaseFirstChar from "../Tools/lowerCaseFirstChar";

const AddProduct = ({ addProduct, validationErrors }) => {
  const history = useHistory();
  let {
    handleSubmit,
    handleChange,
    values,
    handleUpload,
    errors,
    updateErrors,
  } = useForm(add, ProductValidation);
  let { setSpecRowCount, displaySpecRow, getRowValues } = useSpecRows();

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
    addProduct(values);
    //history.goBack();
  }

  return (
    <div id="admin-add-product">
      <h1>Ürün Ekle</h1>
      <form
        onSubmit={(e) => retrieveMissingInputValuesAndSubmit(e)}
        encType="multipart/form-data"
      >
        <div className="form-group mb-4">
          <label>Ürün Adı</label>
          <input
            type="text"
            name="productName"
            placeholder="Ürün Adı"
            onChange={handleChange}
            value={values.productName || ""}
            className={`form-control ${errors.productName && "border-danger"}`}
          />
          {errors.productName && (
            <div className="text-danger small">{errors.productName}</div>
          )}
        </div>

        <div className="form-row d-flex justify-between my-4">
          <div className="col-4">
            <label>Fiyat</label>
            <input
              type="number"
              name="oldPrice"
              step="0.01"
              onChange={handleChange}
              value={values.oldPrice || ""}
              className={`form-control ${errors.oldPrice && "border-danger"}`}
            />
            {errors.oldPrice && (
              <div className="text-danger small">{errors.oldPrice}</div>
            )}
          </div>
          <div className="col-4">
            <label>İndirimli Fiyat</label>
            <input
              type="number"
              name="newPrice"
              step="0.01"
              onChange={handleChange}
              value={values.newPrice || ""}
              className={`form-control ${errors.newPrice && "border-danger"}`}
            />
            {errors.newPrice && (
              <div className="text-danger small">{errors.newPrice}</div>
            )}
          </div>
          <div className="col-4">
            <label>Stok Adedi</label>
            <input
              type="number"
              name="stock"
              onChange={handleChange}
              value={values.stock || ""}
              className={`form-control ${errors.stock && "border-danger"}`}
            />
            {errors.stock && (
              <div className="text-danger small">{errors.stock}</div>
            )}
          </div>
        </div>

        <div className="form-group my-4">
          <label>Ürün Bilgileri</label>
          <textarea
            value={values.productDescription || ""}
            onChange={handleChange}
            name="productDescription"
            rows="5"
            placeholder="Ürün Bilgileri"
            className={`form-control ${
              errors.productDescription && "border-danger"
            }`}
          ></textarea>
          {errors.productDescription && (
            <div className="text-danger small">{errors.productDescription}</div>
          )}
        </div>

        <div className="my-4">
          <label>Kategori</label>
          <CategorySelectBox
            handleChange={handleChange}
            categoryId={values.categoryId}
          />
          {errors.categoryId && (
            <div className="text-danger small">{errors.categoryId}</div>
          )}
        </div>

        <div className="form-group my-4">
          <label>Ürün Resimleri</label>
          <input
            name="productImages"
            type="file"
            multiple
            onChange={handleUpload}
            className="border"
          />
        </div>

        <div className="form-group my-4">
          <label>Donanım</label>
          <button
            className="btn btn-primary btn-sm ml-3 mb-1"
            onClick={(e) => {
              e.preventDefault();
              setSpecRowCount((prev) => (prev += 1));
            }}
          >
            Satır Ekle
          </button>
          <div className="form-row mt-2">{displaySpecRow.map((i) => i)}</div>
        </div>

        <button className="btn btn-primary w-100">Kaydet</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: bindActionCreators(addProduct, dispatch),
});

const mapStateToProps = (state) => ({
  validationErrors: state.productReducer.errors,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
