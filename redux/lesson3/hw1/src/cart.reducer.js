/* eslint-disable default-param-last */
import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        products: state.products.concat(action.payload.pruductData),
      };
    }
    case REMOVE_PRODUCT: {
      const newList = state.products.filter(product => action.payload.productId !== product.id);
      return {
        ...state,
        products: newList,
      };
    }
    default:
      return state;
  }
};
export default productsReducer;
