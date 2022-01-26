import { combineReducers } from "redux"
import changeCategoryReducer from "./ChangeCategoryReducer"
import categoryListReducer from "./CategoryListReducer"
import productListReducer from "./ProductListReducer"

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
})

export default rootReducer
