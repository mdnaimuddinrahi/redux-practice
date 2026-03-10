import {UPDATE_ROUTE, ROUTE_GROCERY, ADD_PRODUCT, ADD_TO_CART} from "./actionTypes";
const initialState = {
  form: {
    item_name: "",
    category: "",
    image_url: "",
    price: 0,
    quantity: 0
  },
  products: [], // To store all products in the cart
  nextId: 1, // Incremental ID for products
  cart: [], // To store products added to the cart
  route: ROUTE_GROCERY
};

const groceryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ROUTE:
        return {
            ...state,
            route: action.payload
        };
    case ADD_PRODUCT:
        const existingProduct = state.products.find(
            (product) =>
                product.category === action.payload.category &&
                product.item_name === action.payload.item_name
        );

        return {
            ...state,
            products: existingProduct
                ? state.products.map((product) =>
                    product.category === action.payload.category &&
                    product.item_name === action.payload.item_name
                        ? {
                            ...product,
                            price: action.payload.price,
                            quantity: product.quantity + action.payload.quantity
                        }
                        : product
                )
                : [
                    ...state.products,
                    { ...action.payload, id: state.nextId }
                ],

            nextId: existingProduct ? state.nextId : state.nextId + 1
        };
    case ADD_TO_CART:
        const existingItem = state.cart.find(
            (item) =>
                item.name === action.payload.name &&
                item.category === action.payload.category
        );

        return {
            ...state,
            cart: existingItem
                ? state.cart.map((item) =>
                    item.item_name === action.payload.item_name &&
                    item.category === action.payload.category
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                : [...state.cart, { ...action.payload, quantity: 1 }],

            products: state.products.map((product) =>
                product.item_name === action.payload.item_name &&
                product.category === action.payload.category
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        };
    default:
      return state;
  }
};

export default groceryReducer;