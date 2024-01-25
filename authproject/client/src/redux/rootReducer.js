import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { reducer } from './ProductReducer';
import {CartReducer} from './CartReducer'

export const rootReducer = combineReducers({
  auth: authReducer,      // The 'auth' key corresponds to the state managed by authReducer
Product:reducer,    // The 'other' key corresponds to the state managed by otherReducer
cart:CartReducer,
});

