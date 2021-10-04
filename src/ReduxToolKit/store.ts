import {combineReducers, configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer";


const rootReducer = combineReducers({
  toolKit: reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})