import { types } from "../types"
import {getLetterMatchCount} from "../../helpers"
import axios from "axios"

export const submitWord = (guessedWord)=>{
    return (dispatch , getState)=>{
        const currentState = getState()
        if(guessedWord === currentState.guessedReducer.secretWord){
            dispatch({
                type : types.SUBMIT_SUCCESS_TRUE
            })
        }else{
            dispatch({
                type : types.SUBMIT_WORD,
                word : {
                  word : guessedWord,
                  numberOfMatchedLetters : getLetterMatchCount(guessedWord , currentState.guessedReducer.secretWord)  
                }
            })
        }
    }
}

export const resetReducer = ()=>{
    return{type : types.SUBMIT_RESET}
}

export const getSecretWord = ()=>{
    return async (dispatch , getState)=>{
        try{
            const response = await axios.get("http://localhost:3030")
            dispatch({
                type : types.SUBMIT_SECRET_WORD,
                word : response.data.data
            })
        }catch(err){
            console.warn("err",err)
        }
    }
}