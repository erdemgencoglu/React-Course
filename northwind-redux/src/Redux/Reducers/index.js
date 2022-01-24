import { combineReducers } from "redux"
import changeCategoryReducer from "./ChangeCategoryReducer"
import categoryListReducer from "./CategoryListReducer"

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
})

export default rootReducer
