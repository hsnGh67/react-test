import { types } from "../types"

export const submitWord = (guessedWord)=>{
    return {
        type : types.SUBMIT_WORD,
        word : guessedWord
    }
}