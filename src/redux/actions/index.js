import {
  ADDED_TO_CART,
  DECREMENT,
  FILTER_BY_SIZE,
  INCREMENT,
  REMOVED_FROM_CART,
} from "../reducers/types";

export const filterbySize = (cartItems, size) => {
  return {
    type: FILTER_BY_SIZE,
    payload: {
      size: size,
      item:
        size === ""
          ? cartItems
          : cartItems.filter((items) => items.size === size),
    },
  };
};
export const addToCart = (itemId) => {
  return {
    type: ADDED_TO_CART,
    payload: {
      id: itemId,
    },
  };
};
export const remove = (itemId) => {
  return {
    type: REMOVED_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const increment = (itemId) => {
  return {
    type: INCREMENT,
    payload: {
      id: itemId,
    },
  };
};
export const decrement = (itemId) => {
  return {
    type: DECREMENT,
    payload: {
      id: itemId,
    },
  };
};
