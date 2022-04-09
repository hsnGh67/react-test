import React from 'react'
import { mount } from "enzyme"
import Congrats from "./Congrats"
import successContext from '../../contexts/successContext'
import languageContext from '../../contexts/languageContext'
import { findByTestAttr } from '../../test/utils'
import language from '../../language'

const { languageStrings , getStringByLanguage} = language

const setup = ({lang="en" , success=false})=>{
    return mount(
        <languageContext.LanguageProvider value={[lang , jest.fn()]}>
            <successContext.successPropvider value={[success , jest.fn()]}>
                <Congrats/>
            </successContext.successPropvider>
        </languageContext.LanguageProvider>
    )
}

describe("test with real context" , ()=>{
    describe("successContext tests" , ()=>{
        test("render correctly when success is true" , ()=>{
            const wrapper = setup({success : true})
    
            const congrats = findByTestAttr(wrapper , "component-congrats")
    
            expect(congrats.length).toBe(1)
        })
    
        test("Not render when success is false" , ()=>{
            const wrapper = setup({success : false})
    
            const congrats = findByTestAttr(wrapper , "component-congrats")
    
            expect(congrats.length).toBe(0)
        })
    })
    
    describe("languageContext Tests" , ()=>{
        test("Test en lang" , ()=>{
            const wrapper = setup({success : true})
    
            const text = findByTestAttr(wrapper , "component-text")
    
            expect(text.text()).toBe(getStringByLanguage("en" , "congrats" , languageStrings))
        })
    
        test("Test emoji lang" , ()=>{
            const wrapper = setup({success : true , lang : "emoji"})
    
            const text = findByTestAttr(wrapper , "component-text")
    
            expect(text.text()).toBe(getStringByLanguage("emoji" , "congrats" , languageStrings))
        })
    })
})