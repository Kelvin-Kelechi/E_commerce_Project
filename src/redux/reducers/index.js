import { combineReducers } from "redux";
import cartProduct from "./cartProduct";
 

const  allReducers = combineReducers({
    cart: cartProduct,
})

export default allReducers;