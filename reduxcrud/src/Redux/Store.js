import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import thunk from "redux-thunk";

const rootreducer=combineReducers({user:Reducer})
const Store=configureStore({reducer:rootreducer, middleware:[thunk]})
export default Store;
