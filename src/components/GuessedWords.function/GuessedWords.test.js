import { mount } from "enzyme"
import React from "react"
import languageContext from "../../contexts/languageContext"
import { findByTestAttr } from "../../test/utils"
import GuessedWordsComponent from "./GuessedWords"
import languageHelper from "../../language"

const { GuessedWords } = GuessedWordsComponent
const { languageStrings , getStringByLanguage } = languageHelper

const setup = (lang="en")=>{
    return mount(
        <languageContext.LanguageProvider value={[lang]}>
            <GuessedWords/>
        </languageContext.LanguageProvider>
    )
}
describe("render tests" , ()=>{
    test("render correctly" , ()=>{

    })
})

describe("language tests" , ()=>{
    test("header text be correct in english" , ()=>{
        const wrapper = setup("en")
        const header = findByTestAttr(wrapper , "component-header")
        expect(header.text()).toBe(getStringByLanguage("en" , "guessedWords" , languageStrings))
    })

    test("header text be correct in emoji" , ()=>{
        const wrapper = setup("emoji")
        const header = findByTestAttr(wrapper , "component-header")
        expect(header.text()).toBe(getStringByLanguage("emoji" , "guessedWords" , languageStrings))
    })
})