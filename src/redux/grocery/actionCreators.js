import {
  ADD_PRODUCT,
  UPDATE_ROUTE,
  ADD_TO_CART
} from "./actionTypes";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const updateRoute = (route) => ({
    type: UPDATE_ROUTE,
    payload: route
});

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
})