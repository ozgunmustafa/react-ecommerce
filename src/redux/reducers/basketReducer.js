import { basketTypes } from '../types/action-types';

const initState = {
  basketProducts: [],
  basketTotalPrice: '',
  errMessage: '',
};

export const basketReducer = (state = initState, action) => {
  switch (action.type) {
    case basketTypes.GET_BASKET_PRODUCTS:
      return { ...state, basketProducts: action.payload };

    case basketTypes.GET_BASKET_PRODUCTS_ERR:
      return { ...state, errMessage: action.payload };

    case basketTypes.ADD_TO_BASKET:
      return {
        ...state,
        basketProducts: [...state.basketProducts, action.payload],
      };

    case basketTypes.ADD_TO_BASKET_ERR:
      return { ...state, errMessage: action.payload };
    
    

    case basketTypes.REMOVE_FROM_BASKET:
      return {
        ...state,
        basketProducts: state.basketProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
