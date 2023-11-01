import { createStore,combineReducers } from "redux";
import { productReducer } from "../Reducer/productReducer";
import { cartReducer } from "../Reducer/cartReducer";
export const configstore=()=>{
const store=createStore(
    combineReducers({productReducer,cartReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
)
return store
}