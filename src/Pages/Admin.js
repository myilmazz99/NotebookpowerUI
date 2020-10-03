import React, { useEffect } from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import AddProduct from "../Components/Admin/AddProduct";
import UpdateProduct from "../Components/Admin/UpdateProduct";
import Products from "../Components/Admin/Products";
import Orders from "../Components/Admin/Orders";
import OrderDetails from "../Components/Admin/OrderDetails";
import EmailList from "../Components/Admin/EmailList";
import Feedbacks from "../Components/Admin/Feedbacks";
import { connect } from "react-redux";

const Admin = ({ role }) => {
  const history = useHistory();

  useEffect(() => {
    if (!role.includes("admin")) history.push("/404");
  }, []);

  return (
    <main id="admin" className="bootstrapiso">
      <nav>
        <h3>Yönetim Paneli</h3>
        <hr />
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Anasayfa</Link>
          </li>
          <li className="nav-link">
            <Link to="/admin/products">Ürünler</Link>
          </li>
          <li className="nav-link">
            <Link to="/admin/orders">Siparişler</Link>
          </li>
          <li className="nav-link">
            <Link to="/admin/emaillist">Email Listesi</Link>
          </li>
          <li className="nav-link">
            <Link to="/admin/feedbacks">Müşteri Mesajları</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/admin/products" component={Products} />
        <Route exact path="/admin/products/add" component={AddProduct} />
        <Route exact path="/admin/products/:id" component={UpdateProduct} />
        <Route exact path="/admin/orders" component={Orders} />
        <Route exact path="/admin/orders/:id" component={OrderDetails} />
        <Route exact path="/admin/emaillist" component={EmailList} />
        <Route exact path="/admin/feedbacks" component={Feedbacks} />
      </Switch>
    </main>
  );
};

const mapStateToProps = (state) => ({
  role: state.userReducer.userCredentials.role,
});

export default connect(mapStateToProps)(Admin);
