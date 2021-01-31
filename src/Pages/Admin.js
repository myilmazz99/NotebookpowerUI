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
import "../libs/mPanel/css/mPanel.css";
import Sidebar from "../Components/Admin/Sidebar";

const Admin = ({ role }) => {
  const history = useHistory();

  useEffect(() => {
    if (!role || !role.includes("admin")) history.push("/404");
    document.querySelector("#root").classList.add("mpanel");
    return () => document.querySelector("#root").classList.remove("mpanel");
  }, []);

  return (
    <div id="admin" className="panel-wrapper">
      <Sidebar />
      <main>
        <Switch>
          <Route exact path="/admin/products" component={Products} />
          <Route exact path="/admin/products/add" component={AddProduct} />
          <Route exact path="/admin/products/:id" component={UpdateProduct} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route exact path="/admin/orders/:id" component={OrderDetails} />
          <Route exact path="/admin/emaillist" component={EmailList} />
          <Route exact path="/admin/feedbacks" component={Feedbacks} />
          <Route component={Products} />
        </Switch>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  role: state.userReducer.userCredentials.role,
});

export default connect(mapStateToProps)(Admin);
