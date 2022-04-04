import React from "react"
import { shallow } from "enzyme"
import Input , {UnconnectedInput} from "./Input.class"
import { storeFactory } from "../../helpers"
import { initialState } from "../../store/reducer/guessedWords.reducer"
import { findByTestAttr } from "../../test/utils"

const setup = (state=undefined)=>{
    
    const store = storeFactory(state)
    return shallow(<Input store={store}/>).dive().dive()
}

describe("Has needed props" , ()=>{
    test("Has access to `success` prop" , ()=>{
        const success = true
        const wrapper = setup({guessedReducer : {...initialState , success : success}})
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })

    test("Has access to `success` prop" , ()=>{
        const wrapper = setup()
        const submitWordProp = wrapper.instance().props.submitWord
        expect(submitWordProp).toBeInstanceOf(Function)
    })
})

describe("`submitWord` action creator" , ()=>{
    let mockSubmitWord
    let wrapper

    beforeEach(()=>{
        mockSubmitWord = jest.fn()
        wrapper = shallow(<UnconnectedInput submitWord={mockSubmitWord}/>)
        wrapper.setState({currentGuessedWord : "party"})
        const button = findByTestAttr(wrapper , "component-button")
        button.simulate('click',{preventDefault(){}})
    })
    test("called after submit pressed" , ()=>{
        expect(mockSubmitWord.mock.calls.length).toBe(1)
    })
    test("called with true argument" , ()=>{
        const calledArg = mockSubmitWord.mock.calls[0][0]
        expect(calledArg).toBe("party")
    })
    test("input text be cleat after submit" , ()=>{
        const currentGuessedWord = wrapper.state("currentGuessedWord")
        expect(currentGuessedWord).toBe("")
    })

})