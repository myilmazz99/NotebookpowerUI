import React, { useEffect } from "react";
import Favorites from "../Components/User/Favorites";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import OrderHistory from "../Components/User/OrderHistory";
import { connect } from "react-redux";

const User = ({ authenticated }) => {
  const history = useHistory();

  useEffect(() => {
    if (authenticated === false) history.push("/404");
  }, []);

  return (
    <main id="user-page">
      <Switch>
        <Route exact path="/user/favorites" component={Favorites} />
        <Route exact path="/user/orders" component={OrderHistory} />
      </Switch>

      <ul className="user-nav">
        <li>
          <Link to="/user/favorites">Favorilerim</Link>
        </li>
        <li>
          <Link to="/user/orders">Siparişlerim</Link>
        </li>
      </ul>
    </main>
  );
};

const mapStateToProps = (state) => ({
  authenticated: state.userReducer.authenticated,
});

export default connect(mapStateToProps)(User);
