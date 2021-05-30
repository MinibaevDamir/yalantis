import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import employeeReducer from "./Reducers/employeeReducer";

let reducers = combineReducers({
    employee: employeeReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;
window.store = store;

