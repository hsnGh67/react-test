import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { initialState } from "../store/reducer/guessedWords.reducer"
import reducers from "../store/reducer";

export const getLetterMatchCount=(guessedWord, secretWord) => {
    const secretLetters = secretWord.split('');
    const guessedLetterSet = new Set(guessedWord);
    return secretLetters.filter(letter => guessedLetterSet.has(letter)).length;
};

export const storeFactory = (initState={guessedReducer : initialState})=>{
    return createStore(reducers , initState , applyMiddleware(thunk))
}