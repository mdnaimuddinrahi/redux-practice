import {
  ADD_PRODUCT,
  UPDATE_ROUTE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  DECREMENT_CART_ITEM
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

export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product
})

export const decrementCartItem = (product) => ({
    type: DECREMENT_CART_ITEM,
    payload: product
})
