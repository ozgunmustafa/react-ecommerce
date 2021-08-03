import { productTypes } from '../types/action-types';

const initialState = {
  products: [],
  isLoaded: false,
  errorMessage: '',
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case productTypes.GET_PRODUCTS:
      return { ...state, products: payload, isLoaded: true };
    case productTypes.GET_PRODUCTS_ERROR:
      return { ...state, errorMessage: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case productTypes.PRODUCT_INDEX:
      return { ...state, ...payload, isLoaded: true };
    case productTypes.PRODUCT_INDEX_ERR:
      return { ...state, ...payload };
    default:
      return state;
  }
};
