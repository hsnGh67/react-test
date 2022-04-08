import React from "react"
import { mount } from "enzyme"
import InputComponent from "./Input"
import { findByTestAttr } from "../../test/utils"
import languageContext from "../../contexts/languageContext"
import langHelper from "../../language"

const { Input } = InputComponent
const { getStringByLanguage , languageStrings } = langHelper

const setup=(lang="en" , secretWord="party")=>{
    return mount(
        <languageContext.LanguageProvider value={[lang , jest.fn()]}>
            <Input/>
        </languageContext.LanguageProvider>
    )
}

describe("render tests" , ()=>{
    let wrapper

    beforeAll(()=>{
        wrapper = setup()
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

describe("test language" , ()=>{

    test("render submit text in english when language is En" , ()=>{
        const wrapper = setup()
        const submitBtn = findByTestAttr(wrapper , "component-submit")
        expect(submitBtn.text()).toBe(getStringByLanguage("en" , "submit" , languageStrings))
    })

    test("render submit text in emoji when language is Emoji" , ()=>{
        const wrapper = setup("emoji")
        const submitBtn = findByTestAttr(wrapper , "component-submit")
        expect(submitBtn.text()).toBe(getStringByLanguage("emoji" , "submit" , languageStrings))
    })
})