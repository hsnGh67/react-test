import { types } from "../types";

export const initialState = {
    guessedWords : [],
    secretWord : null,
    success : false
}

export const guessedReducer = (state=initialState , action) =>{
    switch (action.type){
        case types.SUBMIT_WORD:
            return {...state , guessedWords : [...state.guessedWords , action.word]}
        case types.SUBMIT_SECRET_WORD:
            return {...state , secretWord : action.word}
        case types.SUBMIT_SUCCESS_TRUE:
            return {...state , success : true}
        case types.SUBMIT_RESET:
            return {...initialState}
        default:
            return state
    }
}