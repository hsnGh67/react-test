import {types} from "../types"
import { submitWord } from "./gussedWords.action"

describe("Test submitWord action-creator" , ()=>{
    test("return accepted action" , ()=>{
        const guessedWord = "Party"
        const returnedAction = submitWord(guessedWord)
        expect(returnedAction).toEqual({type : types.SUBMIT_WORD , word : "Party"})
    })
})
