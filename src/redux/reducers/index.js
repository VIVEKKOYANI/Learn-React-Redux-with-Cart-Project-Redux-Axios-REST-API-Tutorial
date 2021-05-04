import { combineReducers } from 'redux';
import { productsReducer, selectedReducer } from './productsReducer';

const reducer = combineReducers({ allProducts: productsReducer, product: selectedReducer });

export default reducer;