import { basketTypes } from '../types/action-types';

export const addToBasket = (product) => {
  return {
    type: basketTypes.ADD_TO_BASKET,
    payload: product,
    };
};

export const removeFromBasket = (product) => {
    return {
        type: basketTypes.REMOVE_FROM_BASKET,
        payload:product
    }
}
