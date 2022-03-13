import { combineReducers } from "redux";
import { guessedReducer } from "./guessedWords.reducer"

export default combineReducers({guessedWord: guessedReducer})