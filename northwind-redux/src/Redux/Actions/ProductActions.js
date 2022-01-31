import * as actionTypes from "./ActionTypes"

export function getProductsSuccess(poducts) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: poducts }
}

export function createProductSuccess(poduct) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: poduct }
}

export function updateProductSuccess(poduct) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: poduct }
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

//id varsa güncelleme yoksa ekleme
export function saveProductApi(product) {
  return fetch("http://localhost:3001/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError)
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id ? dispatch(updateProductSuccess(saveProduct)) : dispatch(createProductSuccess(saveProduct))
      })
      .catch((error) => {
        throw error
      })
  }
}

//Handle Response methodu
export async function handleResponse(response) {
  if (response.ok) {
    return response.json()
  }
  const error = await response.text()
  throw new Error(error)
}

export function handleError(error) {
  console.error("Bir hata oluştu")
  throw error
}
