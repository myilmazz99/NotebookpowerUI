import React from "react";
import loadingSpinner from "../../img/loadingSpinner.gif";

const styles = {
  display: "block",
  width: "70px",
  margin: "0 auto",
};

const LoadingSpinner = () => (
  <img className="loading-spinner" src={loadingSpinner} alt="" style={styles} />
);

export default LoadingSpinner;
