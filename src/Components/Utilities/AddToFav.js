import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../Redux/Actions/userActions";

const AddToFav = ({ productId, userId, favorites, add, remove }) => {
  const [icon, setIcon] = useState(["far", "heart"]);

  useEffect(() => {
    if (favorites.find((i) => i.userId === userId)) setIcon("heart");
  }, [userId, favorites]);

  const toggleFavs = (productId, userId) => {
    if (icon === "heart") {
      //removeFromFavorites();
    } else {
      add(productId, userId);
    }
  };

  return (
    <FontAwesomeIcon
      icon={icon}
      onClick={() => toggleFavs(productId, userId)}
    />
  );
};

const mapStateToProps = (state) => ({
  userId: state.userReducer.userCredentials.userId,
  favorites: state.userReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  add: bindActionCreators(addToFavorites, dispatch),
  remove: bindActionCreators(removeFromFavorites, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToFav);
