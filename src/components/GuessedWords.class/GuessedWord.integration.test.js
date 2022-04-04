import GuessedWord from "./GuessedWord.class"
import moxios from "moxios"
import { storeFactory } from "../../helpers"
import { submitWord , resetReducer , getSecretWord} from "../../store/action/gussedWords.action"

describe("Integration test actoin creator" , ()=>{
    test("test state returned by reducer after an incorrect word has guessed and guessed words array is empty" , ()=>{
        const initialState = {
            guessedWords : [],
            secretWord : "party",
            success : false
        }
        const currentGuessedWord = "part"
        const store = storeFactory({guessedReducer : initialState})
        store.dispatch(submitWord(currentGuessedWord))
        const newState = store.getState()
        expect(newState).toEqual({guessedReducer:{...initialState , guessedWords : [{word : currentGuessedWord , numberOfMatchedLetters : 4}]}})
    })

    test("test state returned by reducer after an incorrect word has guessed and guessed words array has one object" , ()=>{
        const initialState = {
            guessedWords : [{word : "far" , numberOfMatchedLetters : 2}],
            secretWord : "party",
            success : false
        }

        const store = storeFactory({guessedReducer : initialState})
        store.dispatch(submitWord("part"))
        const newState = store.getState()
        expect(newState).toEqual({guessedReducer:{...initialState , guessedWords : [...initialState.guessedWords , {word : "part" , numberOfMatchedLetters : 4}]}})
    })

    test("test success flag to be true after user guessed correctly" , ()=>{
        const initialState = {
            guessedWords : [],
            secretWord : "party",
            success : false
        }
        const store = storeFactory({guessedReducer : initialState})
        const currentGuessedWord = "party"
        store.dispatch(submitWord(currentGuessedWord))
        const newState = store.getState()
        expect(newState).toEqual({guessedReducer:{...initialState , success : true}})
    })

    test("test reset action creator" , ()=>{
        const initialState = {
            guessedWords : [{word : "far" , numberOfMatchedLetters : 2}],
            secretWord : "party",
            success : true
        }
        const store = storeFactory({guessedReducer : initialState})
        store.dispatch(resetReducer())
        const newState = store.getState()
        expect(newState).toEqual({guessedReducer:{guessedWords : [] , secretWord : null , success : false}})
    })

    describe("Test `getSecretWord` action creator" , ()=>{
        beforeEach(()=>{
            moxios.install()
        })

        afterEach(()=>{
            moxios.uninstall()
        })

        test("get secret word correctly" , ()=>{
            const store = storeFactory()
             moxios.wait(()=>{
                const request = moxios.requests.mostRecent()
                request.respondWith({
                    status : 200,
                    response : {
                        data : "party"
                    }
                })
            })
               
            return store.dispatch(getSecretWord())
            .then(()=>{
                const newState = store.getState()
                expect(newState.guessedReducer.secretWord).toBe("party")
            })
        })
    })
})
