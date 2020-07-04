import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../Redux/Actions/userActions";

const AddToFav = ({ productId, userId, favorites, add, remove }) => {
  const [iconS, setIconS] = useState(["far", "heart"]);

  useEffect(() => {
    if (
      favorites.find(
        (i) => i.userId === userId && i.productId === Number(productId)
      )
    ) {
      setIconS("heart");
    }
  }, [favorites, productId]);

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

const mapDispatchToProps = (dispatch) => ({
  add: bindActionCreators(addToFavorites, dispatch),
  remove: bindActionCreators(removeFromFavorites, dispatch),
});

export default connect(null, mapDispatchToProps)(AddToFav);
