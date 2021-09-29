import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";


let initalState = {
    count : 0 , 
}
let middleWares = [thunk];



let store = createStore(rootReducer , initalState , applyMiddleware(...middleWares));

export default store;

