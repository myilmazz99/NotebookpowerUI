import React, { useState } from "react";
import ProductPreviewList from "../Components/ProductPreviewList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectBox from "../Components/SelectBox";
import Jumbotron from "../Components/Jumbotron";

const ProductList = () => {
  const [clearFilter, setClearFilter] = useState(false);

  const openFilterMenu = (e) => {
    document.querySelector(".filter-menu").classList.add("filter-menu-open");
  };

  const closeFilterMenu = (e) => {
    document.querySelector(".filter-menu").classList.remove("filter-menu-open");
  };

  const clearFilters = () => {
    setClearFilter(!clearFilter);
  };

  return (
    <main id="product-list-page">
      <Jumbotron />
      <div className="product-list-filters">
        <div className="orderby-btn btn">
          <SelectBox
            selectedCategory="Sırala"
            icon="sort-amount-down-alt"
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
          <div className="container">
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
                reset={clearFilter}
                selectedCategory="Marka"
                options={["Asus", "MSI", "Monster"]}
              />
            </li>
            <li>
              <SelectBox
                reset={clearFilter}
                selectedCategory="Renk"
                options={["Mavi", "Yeşil", "Siyah"]}
              />
            </li>
            <li>
              <SelectBox
                reset={clearFilter}
                selectedCategory="İşletim Sistemi"
                options={["Windows 10", "Freedos", "Windows 8"]}
              />
            </li>
            <li>
              <SelectBox
                reset={clearFilter}
                selectedCategory="İşlemci"
                options={["Intel Core 2 Duo", "Intel Core i5", "Intel Core i7"]}
              />
            </li>
            <li>
              <SelectBox
                reset={clearFilter}
                selectedCategory="Ekran Kartı"
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
          </div>
        </ul>
      </div>

      <ProductPreviewList container="container" />
    </main>
  );
};

export default ProductList;
