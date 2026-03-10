import {UPDATE_ROUTE, ROUTE_GROCERY} from "./actionTypes";
const initialState = {
  form: {
    item_name: "",
    quantity: "",
    price: "",
  },
  products: [], // To store all products in the cart
  nextId: 1, // Incremental ID for products
  route: ROUTE_GROCERY
};

const groceryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROUTE:
        return {
            ...state,
            route: action.payload
        };
    default:
      return state;
  }
};

export default groceryReducer;