import React from "react"
import { shallow } from "enzyme"
import InputComponent from "./Input"
import { findByTestAttr } from "../../test/utils"

const { Input } = InputComponent

describe("render tests" , ()=>{
    let wrapper
    beforeAll(()=>{
        wrapper = shallow(<Input/>)
    })
    test("render correctly input" , ()=>{
        const input = findByTestAttr(wrapper , "component-input")
        expect(input.length).toBe(1)
    })
    test("render correctly submit button" , ()=>{
        const btn = findByTestAttr(wrapper , "component-submit")
        expect(btn.length).toBe(1)
    })
})