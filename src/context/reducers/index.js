import { combineReducers } from "redux";
import userReducers from "./useReducer";
import alertReducer from "./alertReducer";
import productReducer from "./productReducers";
import allUserReducer from "./allUserReducers";
import cartReducer from "./cartReducers";
import displayCartReducer from "./displayCartReducer";

const myReducers = combineReducers({
    user: userReducers,
    alert: alertReducer,
    products: productReducer,
    allUsers: allUserReducer,
    cart: cartReducer,
    isCart : displayCartReducer
});

export default myReducers;
