import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr } from "../../test/utils";
import Congrats from "./Congrats";

const setup = (props={})=>{
    return shallow(<Congrats {...props}/>)
}

describe("test render" , ()=>{
    test("render nothing when success is false" , ()=>{
        const wrapper = setup({success : false})
        const congratsComponent = findByTestAttr(wrapper , "component-congrats")
        expect(congratsComponent.length).toBe(0)
    })
    test("render congrats component when success is true" , ()=>{
        const wrapper = setup({success : true})
        const congratsComponent = findByTestAttr(wrapper , "component-congrats")
        expect(congratsComponent.length).toBe(1)
    })
})