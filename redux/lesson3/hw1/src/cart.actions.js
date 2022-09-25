export const ADD_PRODUCT = 'PRODUCTS/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'PRODUCTS/REMOVE_PRODUCT';

export const addProduct = pruductData => ({
  type: ADD_PRODUCT,
  payload: {
    pruductData,
  },
});

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  payload: {
    productId,
  },
});
