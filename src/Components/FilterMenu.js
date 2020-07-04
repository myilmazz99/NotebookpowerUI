import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SelectBox from "../Components/SelectBox";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSpecifications } from "../Redux/Actions/productActions";

const FilterMenu = ({ specifications, getSpecifications }) => {
  const [clearFilter, setClearFilter] = useState(false);
  const [filters, setFilters] = useState();
  const his = useHistory();
  const filterMenu = useRef(null);

  useEffect(() => {
    if (specifications && specifications.length === 0) getSpecifications();
  }, []);

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
    toggleFilterMenu();
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filterOptions = (filterName) => {
    return specifications
      .filter((i) => i.specificationName === filterName)
      .map((i) => i.specificationValue)
      .filter((i, j, arr) => arr.indexOf(i) === j);
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
            options={filterOptions("Marka")}
          />
        </li>
        <li>
          <SelectBox
            collectFilters={collectFilters}
            name="color"
            reset={clearFilter}
            defaultValue="Renk"
            options={filterOptions("Renk")}
          />
        </li>
        <li>
          <SelectBox
            collectFilters={collectFilters}
            name="system"
            reset={clearFilter}
            defaultValue="İşletim Sistemi"
            options={filterOptions("İşletim Sistemi")}
          />
        </li>
        <li>
          <SelectBox
            collectFilters={collectFilters}
            name="cpu"
            reset={clearFilter}
            defaultValue="İşlemci"
            options={filterOptions("İşlemci")}
          />
        </li>
        <li>
          <SelectBox
            collectFilters={collectFilters}
            name="gpu"
            reset={clearFilter}
            defaultValue="Ekran Kartı"
            options={filterOptions("Ekran Kartı")}
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

const mapState = (state) => ({
  specifications: state.productReducer.specifications,
});

const mapDispatch = (dispatch) => ({
  getSpecifications: bindActionCreators(getSpecifications, dispatch),
});

export default connect(mapState, mapDispatch)(FilterMenu);
