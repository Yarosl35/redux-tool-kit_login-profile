import {createAction, createReducer} from "@reduxjs/toolkit";


const initialState = [{
  id: 1,
  firstName: "",
  lastName: "",
  email: "",
  password: "",
}]

export const user = createAction("USER")

export default createReducer(initialState,{


})