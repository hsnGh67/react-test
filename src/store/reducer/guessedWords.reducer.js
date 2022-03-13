import { types } from "../types";

const initialState = {
    guessedWords : [],
    secretWord : "",
    success : false
}

export const guessedReducer = (state=initialState , action) =>{
    switch (action.type){
        case types.SUBMIT_WORD:
            return {...state}
        default:
            return state
    }
}