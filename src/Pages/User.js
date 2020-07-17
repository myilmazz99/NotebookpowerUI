import React from "react";
import Favorites from "../Components/User/Favorites";
import { Switch, Route, Link } from "react-router-dom";
import OrderHistory from "../Components/User/OrderHistory";

const User = () => {
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

export default User;
