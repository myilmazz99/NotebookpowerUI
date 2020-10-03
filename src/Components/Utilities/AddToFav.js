import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../Redux/Actions/userActions";

const AddToFav = ({
  productId,
  add,
  remove,
  userState: {
    favorites,
    userCredentials: { userId },
  },
}) => {
  const [iconS, setIconS] = useState(["far", "heart"]);

  useEffect(() => {
    if (
      productId &&
      userId &&
      favorites.find(
        (i) => i.userId === userId && i.productId === Number(productId)
      )
    ) {
      setIconS("heart");
    }
  }, [favorites, productId, userId]);

  const toggleFavs = (productId, userId) => {
    if (iconS !== "heart") {
      setIconS("heart");
      add(productId, userId);
    } else {
      setIconS(["far", "heart"]);
      remove(productId, userId);
    }
  };

  return (
    <FontAwesomeIcon
      icon={iconS}
      onClick={() => toggleFavs(productId, userId)}
    />
  );
};

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  add: bindActionCreators(addToFavorites, dispatch),
  remove: bindActionCreators(removeFromFavorites, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToFav);
