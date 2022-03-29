import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../store/reducer"

export const storeFactory = (initialState={})=>{
    return createStore(rootReducer , initialState , applyMiddleware(thunk))
}

export const findByTestAttr = (wrapper , attr) =>{
    const element = wrapper.find(`[data-test="${attr}"]`)
    return element
}