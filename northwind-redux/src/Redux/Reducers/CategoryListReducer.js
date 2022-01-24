import * as actionTypes from "../Actions/ActionTypes"
import initialState from "./initialState"

export default function categoryListReducer(state = initialState.currentCategory.categories, action) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload
    default:
      return state
  }
}
