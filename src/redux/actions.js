export const EDIT_PRODUCT = "EDIT PRODUCT";
export const DELETE_PRODUCT = "DELETE PRODUCT";
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const addProduct = (data) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: data,
  };
};

export const updateProduct = (data) => {
  return {
    type: UPDATE_PRODUCT,
    payload: data,
  };
};

export const addProductAll = (data) => {
  return {
    type: ADD_PRODUCTS,
    payload: data,
  };
};

export const deleteProduct = (data) => {
  return {
    type: DELETE_PRODUCT,
    payload: data,
  };
};

export const editProduct = (data) => {
  return {
    type: EDIT_PRODUCT,
    payload: data,
  };
};
