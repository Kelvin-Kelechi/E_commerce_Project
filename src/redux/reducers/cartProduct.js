import cartItems from "../cartItems";
import {
  ADDED_TO_CART,
  DECREMENT,
  FILTER_BY_SIZE,
  INCREMENT,
  REMOVED_FROM_CART,
   
} from "./types";

const initialState = {
  cartItems: cartItems,
  carts: [],
  filteredItems: [],
   size:'',
};

const cartProduct = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_TO_CART:
      const prod = state.cartItems.find(
        (items) => items.id === action.payload.id
      );
      const inCart = state.carts.find((prod) =>
        prod.id === action.payload.id ? true : false
      );
      return {
        ...state,
        carts: inCart
          ? state.carts.map((prod) =>
              prod.id === action.payload.id
                ? { ...prod, amount: prod.amount + 1 }
                : prod
            )
          : [...state.carts, { ...prod, amount: 1 }],
        showCart: (state.showCart = true),
      };

    case FILTER_BY_SIZE:
      return {
        ...state,
        filteredItems: action.payload.item,
        size: action.payload.size,
      };
    case REMOVED_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter((prod) => prod.id !== action.payload.id),
      };

    case INCREMENT:
      return {
        ...state,
        carts: state.carts.map((prod) =>
          prod.id === action.payload.id
            ? { ...prod, amount: prod.amount + 1 }
            : prod
        ),
      };
    case DECREMENT:
      return {
        ...state,
        carts: state.carts.map((prod) =>
          prod.id === action.payload.id
            ? { ...prod, amount: prod.amount - 1 }
            : prod
        ),
      };

    default:
      return state;
  }
};

export default cartProduct;
