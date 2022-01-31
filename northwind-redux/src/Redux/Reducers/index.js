import { combineReducers } from "redux"
import changeCategoryReducer from "./ChangeCategoryReducer"
import categoryListReducer from "./CategoryListReducer"
import productListReducer from "./ProductListReducer"
import cartReducer from "./CartReducer"
import saveProductReducer from "./SaveProductReducer"

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
  cartReducer,
  saveProductReducer,
})

export default rootReducer
