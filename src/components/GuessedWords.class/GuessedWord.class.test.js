import { shallow } from "enzyme"
import React from "react"
import { storeFactory } from "../../helpers"
import GuessedWord from "./GuessedWord.class"
import { initialState } from "../../store/reducer/guessedWords.reducer"

const setup = ()=>{
    const store = storeFactory()
    return shallow(<GuessedWord store={store}/>).dive().dive()
}

describe("Has access to porps" , ()=>{
    test("Has guessedReducer props" , ()=>{
        const wrapper = setup()
        const guessedReducerProp = wrapper.instance().props.guessedReducer
        expect(guessedReducerProp).toEqual(initialState)
    })
})