import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import AddProduct from "../Components/Admin/AddProduct";
import UpdateProduct from "../Components/Admin/UpdateProduct";
import Products from "../Components/Admin/Products";
import Orders from "../Components/Admin/Orders";
import OrderDetails from "../Components/Admin/OrderDetails";

const Admin = () => {
  return (
    <main id="admin" className="bootstrapiso">
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
        <Route exact path="/admin/orders" component={Orders} />
        <Route exact path="/admin/orders/:id" component={OrderDetails} />
      </Switch>
    </main>
  );
};

export default Admin;
