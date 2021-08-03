import { combineReducers } from 'redux';
import { basketReducer } from './basketReducer';
import { productsReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductReducer,
  basket: basketReducer,
});

export default reducers;
