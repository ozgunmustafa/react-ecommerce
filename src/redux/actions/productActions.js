import { productTypes } from '../types/action-types';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
  axios
    .get('https://fakestoreapi.com/products?limit=33')
    .then((response) => {
      console.log(response);
      dispatch({ type: productTypes.GET_PRODUCTS, payload: response.data });
    })
    .catch((err) => {
      dispatch({
        type: productTypes.GET_PRODUCTS_ERROR,
        payload: 'Ürünler getirilirken hata oluştu...',
      });
    });
};


export const productIndex = (productId) => (dispatch) => {
  axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => {
      console.log(response);
      dispatch({ type: productTypes.PRODUCT_INDEX, payload: response.data });
    })
    .catch((err) => {
      dispatch({
        type: productTypes.PRODUCT_INDEX_ERR,
        payload: 'Ürün getirilirken bir hata oluştu...',
      });
    });
};
