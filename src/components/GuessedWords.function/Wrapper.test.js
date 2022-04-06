import React from "react"
import { mount, shallow } from "enzyme"
import WrapperComponent from "./Wrapper"
import { findByTestAttr } from "../../test/utils"
import moxios from "moxios"
import actions from "../../actions"

const { Wrapper , getSecretWord} = WrapperComponent

const setup = ()=>{
    return mount(<Wrapper/>)
}

describe("render tests" , ()=>{
    test("render correctly" , ()=>{
        const wrapper = setup()
        const component = findByTestAttr(wrapper , "component-wrapper")
        expect(component.length).toBe(1)
    })
})

describe("useEffect" , ()=>{
    let wrapper
    let mockUseEffect = jest.fn()
    const originActions = actions.getSecretWord

    beforeEach(()=>{
        mockUseEffect.mockClear()
        actions.getSecretWord = mockUseEffect
        wrapper = setup()
    })

    afterAll(()=>{
        actions.getSecretWord = originActions
    })

    test("call on mount" , ()=>{
        expect(mockUseEffect).toHaveBeenCalled()
    })

    test("not call after updates" , ()=>{
        wrapper.setProps()
        expect(mockUseEffect.mock.calls.length).toBe(1)
    })
})

