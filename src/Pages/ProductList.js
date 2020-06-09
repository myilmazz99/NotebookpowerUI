import React, { useState, useEffect } from "react";
import ProductPreviewList from "../Components/ProductPreviewList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectBox from "../Components/SelectBox";
import Jumbotron from "../Components/Jumbotron";
import { useHistory } from "react-router-dom";
//import { useLocation } from "react-router-dom";
//import queryString from "query-string";

const ProductList = (props) => {
  const [clearFilter, setClearFilter] = useState(false);
  const [filters, setFilters] = useState();
  const his = useHistory();

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const openFilterMenu = () => {
    document.querySelector(".filter-menu").classList.add("filter-menu-open");
  };

  const closeFilterMenu = () => {
    document.querySelector(".filter-menu").classList.remove("filter-menu-open");
  };

  const clearFilters = () => {
    setClearFilter(!clearFilter);
    setFilters({});
  };

  const collectFilters = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitFilters = (e) => {
    e.preventDefault();
    let path = "?";

    for (const i in filters) {
      path += `${i}=${filters[i]}&`;
    }

    his.push(`/products${path}`);
  };

  return (
    <main id="product-list-page">
      <Jumbotron history />
      <div className="product-list-filters">
        <div className="orderby-btn btn">
          <SelectBox
            collectFilters={collectFilters}
            name="orderby"
            defaultValue="Sırala"
            options={[
              "En Düşük Fiyat",
              "En Yüksek Fiyat",
              "En Çok Yorum",
              "En Çok Puan",
            ]}
          />
        </div>
        <div className="filter-menu-btn btn" onClick={(e) => openFilterMenu(e)}>
          <FontAwesomeIcon icon="filter" /> Filtrele
        </div>
        <ul className="filter-menu">
          <div
            className="filter-menu-options"
            onClick={(e) => closeFilterMenu(e)}
          >
            <FontAwesomeIcon icon="times" />
            <span className="clear-filters" onClick={() => clearFilters()}>
              Temizle
            </span>
          </div>
          <li>
            <SelectBox
              collectFilters={collectFilters}
              name="brand"
              reset={clearFilter}
              defaultValue="Marka"
              options={["Asus", "MSI", "Monster"]}
            />
          </li>
          <li>
            <SelectBox
              collectFilters={collectFilters}
              name="color"
              reset={clearFilter}
              defaultValue="Renk"
              options={["Mavi", "Yeşil", "Siyah"]}
            />
          </li>
          <li>
            <SelectBox
              collectFilters={collectFilters}
              name="system"
              reset={clearFilter}
              defaultValue="İşletim Sistemi"
              options={["Windows 10", "Freedos", "Windows 8"]}
            />
          </li>
          <li>
            <SelectBox
              collectFilters={collectFilters}
              name="cpu"
              reset={clearFilter}
              defaultValue="İşlemci"
              options={["Intel Core 2 Duo", "Intel Core i5", "Intel Core i7"]}
            />
          </li>
          <li>
            <SelectBox
              collectFilters={collectFilters}
              name="gpu"
              reset={clearFilter}
              defaultValue="Ekran Kartı"
              options={["GTX 1050", "RTX 2080", "GTX 850M"]}
            />
          </li>
          <li>
            Fiyat Aralığı
            <div className="price-filter">
              <input type="number" placeholder="En Az" /> -
              <input type="number" placeholder="En Çok" />
            </div>
          </li>
          <li>
            <button className="submit-filters" onClick={submitFilters}>
              Uygula
            </button>
          </li>
        </ul>
      </div>

      <ProductPreviewList />
    </main>
  );
};

export default ProductList;
