import * as actionTypes from "./ActionTypes"

export function getProductsSuccess(poducts) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: poducts }
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3001/products"
    if (categoryId) {
      url = url + "?categoryId=" + categoryId
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)))
  }
}
