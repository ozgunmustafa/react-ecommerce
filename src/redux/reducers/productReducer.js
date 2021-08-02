import { productTypes } from '../types/action-types';

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case productTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
