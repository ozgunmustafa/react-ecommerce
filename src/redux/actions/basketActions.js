import { basketTypes } from '../types/action-types';
import { toast } from 'react-toastify';

export const addToBasket = (product) => (dispatch) => {
  toast.success('Ürün sepete eklendi');
  dispatch({
    type: basketTypes.ADD_TO_BASKET,
    payload: product,
  });
};

export const removeFromBasket = (id) => (dispatch) => {
  toast.info('Ürün sepetten çıkarıldı.');

  dispatch({
    type: basketTypes.REMOVE_FROM_BASKET,
    payload: id,
  });
};
