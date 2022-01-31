import * as actionTypes from "../Actions/ActionTypes"
import initialState from "./initialState"

export default function saveProductReducer(state = initialState.savedProduct, action) {
  switch (action.type) {
    case actionTypes.CREATE_PRODUCT_SUCCESS:
      return action.payload
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return action.payload
    default:
      return state
  }
}
