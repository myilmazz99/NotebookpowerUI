import Axios from "axios";

export const fulfillOrder = (order) => async (dispatch) => {
  try {
    await Axios.post("http://localhost:61361/api/orders", order);
    console.log(order);
  } catch (error) {
    console.log(error.response);
  }
};
