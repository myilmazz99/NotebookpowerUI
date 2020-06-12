import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectBox from "../Components/SelectBox";
import { useHistory } from "react-router-dom";

const FilterMenu = () => {
  const [clearFilter, setClearFilter] = useState(false);
  const [filters, setFilters] = useState();
  const his = useHistory();
  const filterMenu = useRef(null);

  const toggleFilterMenu = () => {
    filterMenu.current.classList.toggle("filter-menu-open");
  };

  const clearFilters = () => {
    setClearFilter(!clearFilter);
    setFilters({});
    his.push("/products");
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

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
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
      <div className="filter-menu-btn btn" onClick={toggleFilterMenu}>
        <FontAwesomeIcon icon="filter" /> Filtrele
      </div>
      <ul className="filter-menu" ref={filterMenu}>
        <div className="filter-menu-options" onClick={toggleFilterMenu}>
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
            <input
              type="number"
              name="lowestPrice"
              placeholder="En Az"
              onChange={handleChange}
            />{" "}
            -
            <input
              type="number"
              name="highestPrice"
              placeholder="En Çok"
              onChange={handleChange}
            />
          </div>
        </li>
        <li>
          <button className="submit-filters" onClick={submitFilters}>
            Uygula
          </button>
        </li>
      </ul>
    </div>
  );
};

export default FilterMenu;
