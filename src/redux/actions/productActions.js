import { productTypes } from '../types/action-types';

export const setProducts = (products) => {
  return {
    type: productTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: productTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (product) => {
  return {
    type: productTypes.REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};
