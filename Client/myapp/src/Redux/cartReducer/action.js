import axios from "axios";
import {
  ADD_TO_CART,
  DELETE_ERROR_CART_ITEM,
  DELETE_GET_CART_ITEM,
  DELETE_REQUEST_CART_ITEM,
  ERROR_CART_ITEM,
  GET_CART_ITEM,
  REQUEST_CART_ITEM,
} from "./actionTypes";

export const getCartData = () => async (dispatch) => {
  dispatch({ type: REQUEST_CART_ITEM });
  try {
    let res = await axios.get(`https://dark-rose-gharial-vest.cyclic.cloud/cart/`);
    dispatch({ type: GET_CART_ITEM, payload: res.data});
  } catch (error) {
    dispatch({ type: ERROR_CART_ITEM });
  }
};

export const deleteCartData = (id) => (dispatch) => {
  dispatch({ type: DELETE_REQUEST_CART_ITEM });
  axios
    .delete(`https://dark-rose-gharial-vest.cyclic.cloud/cart/${id}`)
    .then(() => dispatch({ type: DELETE_GET_CART_ITEM, payload: id }))
    .catch(() => dispatch({ type: DELETE_ERROR_CART_ITEM }));
};



export const AddToCart = (item) => (dispatch) => {
  return fetch(`https://dark-rose-gharial-vest.cyclic.cloud/cart/${item._id}`, {
    method: "POST",
    body:JSON.stringify(item)
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: ADD_TO_CART, payload: item });
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};