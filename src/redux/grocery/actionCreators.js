import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
    UPDATE_PRODUCT,
    CLEAR_CART,
    SET_PRODUCTS,
    UPDATE_FORM,
    DELETE_PRODUCT,
    UPDATE_ROUTE
} from "./actionTypes";
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId
});

export const updateProduct = (productId, quantity) => ({
  type: UPDATE_PRODUCT,
  payload: { productId, quantity }
});

export const clearCart = () => ({
  type: CLEAR_CART
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
});

export const updateRoute = (route) => ({
    type: UPDATE_ROUTE,
    payload: route
});