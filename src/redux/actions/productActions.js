import { productTypes } from '../types/action-types';
import apiProduct from '../../utils/apiProduct';

export const getProducts = () => async (dispatch) => {
  await apiProduct
    .get('/products?limit=20')
    .then((response) => {
      dispatch({ type: productTypes.GET_PRODUCTS, payload: response.data });
    })
    .catch((err) => {
      dispatch({
        type: productTypes.GET_PRODUCTS_ERROR,
        payload: 'Ürünler getirilirken hata oluştu...',
      });
    });
};

export const productIndex = (productId) => async (dispatch) => {
  await apiProduct
    .get(`/products/${productId}`)
    .then((response) => {
      dispatch({ type: productTypes.PRODUCT_INDEX, payload: response.data });
    })
    .catch((err) => {
      dispatch({
        type: productTypes.PRODUCT_INDEX_ERR,
        payload: 'Ürün getirilirken bir hata oluştu...',
      });
    });
};
