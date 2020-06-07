import React, { useEffect } from "react";
import CategorySelectBox from "../CategorySelectBox";
import useForm from "../Utilities/useForm";
import { useParams } from "react-router-dom";
import useSpecRows from "../Utilities/useSpecRows";

const UpdateProduct = ({ products }) => {
  let { handleChange, handleSubmit, values, handleUpload } = useForm();
  let { productId } = useParams();
  let { setSpecRowCount, displaySpecRow, getRowValues } = useSpecRows();

  useEffect(() => {
    if (products && !products.find((i) => i.id === productId));
    //values = action call
  }, []);

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

  return (
    <div id="admin-update-product">
      <h2 className="mb-3">Ürün Güncelle</h2>
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
            className="form-control"
          />
        </div>

        <div className="form-row d-flex justify-between my-4">
          <div className="col-4">
            <label>Fiyat</label>
            <input
              type="number"
              name="oldPrice"
              onChange={handleChange}
              value={values.oldPrice || ""}
              className="form-control"
            />
          </div>
          <div className="col-4">
            <label>İndirimli Fiyat</label>
            <input
              type="number"
              name="newPrice"
              onChange={handleChange}
              value={values.newPrice || ""}
              className="form-control"
            />
          </div>
          <div className="col-4">
            <label>Stok Adedi</label>
            <input
              type="number"
              name="stock"
              onChange={handleChange}
              value={values.stock || ""}
              className="form-control"
            />
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
            className="form-control"
          ></textarea>
        </div>

        <div className="my-4">
          <label>Kategori</label>
          <CategorySelectBox handleChange={handleChange} />
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

export default UpdateProduct;
