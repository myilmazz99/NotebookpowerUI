import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddProduct from "../Components/Admin/AddProduct";
import UpdateProduct from "../Components/Admin/UpdateProduct";
import Products from "../Components/Admin/Products";

const Admin = () => {
  return (
    <main id="admin">
      <nav>
        <h3>Yönetim Paneli</h3>
        <hr />
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/admin/products">Ürünler</Link>
          </li>
          <li className="nav-link">
            <Link to="/admin/orders">Siparişler</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/admin/products" component={Products} />
        <Route exact path="/admin/products/add" component={AddProduct} />
        <Route exact path="/admin/products/:id" component={UpdateProduct} />
      </Switch>
    </main>
  );
};

export default Admin;
