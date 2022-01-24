import * as actionTypes from "../Actions/ActionTypes"
import initialState from "./initialState"

export default function changeCategoryReducer(state = initialState.currentCategory.categoryName, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload
    default:
      return state
  }
}
