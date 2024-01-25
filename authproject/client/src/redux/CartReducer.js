
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
const initialState = {
    items: [],
  };
  
 export const CartReducer = (state = initialState, action) => {
    console.log('Action:', action);
    switch (action.type) {
        case ADD_TO_CART:
          return {
            ...state,
            items: [...state.items, action.payload],
          };
        case REMOVE_FROM_CART:
          return {
            ...state,
            items: state.items.filter((item) => item._id !== action.payload),
          };
        default:
          return state
    }
  };
  
