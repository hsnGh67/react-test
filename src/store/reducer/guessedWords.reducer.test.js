import { types } from "../types"
import { guessedReducer} from "./guessedWords.reducer"
import { initialState } from "../reducer/guessedWords.reducer"

describe("check returned state of reducer" , ()=>{

    test("retutn initial state when submit no action" , ()=>{
        const newState = guessedReducer(undefined , {})

        expect(newState).toEqual(initialState)
    })  
    
    test("check state after submitting a word" , ()=>{
        const submitedWord = "party"

        let newState = guessedReducer(undefined , {type : types.SUBMIT_WORD , word : submitedWord})

        const submitedWord2 = "party2"

        newState = guessedReducer(newState , {type : types.SUBMIT_WORD , word : submitedWord2})

        expect(newState).toEqual({...initialState , guessedWords : [submitedWord , submitedWord2]})
    })

    test("check state after submitting success true" , ()=>{
        const newState = guessedReducer(undefined , {type : types.SUBMIT_SUCCESS_TRUE})

        expect(newState.success).toBe(true)
    })

    test("check state after submitting a secretWord" , ()=>{
        const secretWord = "party"

        const newState = guessedReducer(undefined , {type : types.SUBMIT_SECRET_WORD , word : secretWord})

        expect(newState).toEqual({...initialState , secretWord : secretWord})
    })
})