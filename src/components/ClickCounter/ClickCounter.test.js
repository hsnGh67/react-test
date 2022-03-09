import Enzyme, { shallow } from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import ClickCounter from "./ClickCounter"

Enzyme.configure({adapter : new Adapter()})

const setup = (props={} , state=null)=>{
    const wrapper = shallow(<ClickCounter {...props}/>)
    if(state) wrapper.setState(state)
    return wrapper
}

const findByTestAttr = (wrapper , attr) =>{
    const element = wrapper.find(`[data-test="${attr}"]`)
    return element
}

test("Render Container without error" , ()=>{
    const wrapper = setup()
    const container = findByTestAttr(wrapper , "component-container")
    expect(container.length).toBe(1)
})

test("Render text display without error" , ()=>{
    const wrapper = setup()
    const displayText = findByTestAttr(wrapper , "component-display")
    expect(displayText.length).toBe(1)
})

test("Render plus button without error" , ()=>{
    const wrapper = setup()
    const buttonComponent = findByTestAttr(wrapper , "component-btn")
    expect(buttonComponent.length).toBe(1)
})

test("Render minus button without error" , ()=>{
    const wrapper = setup()
    const minusBtn = findByTestAttr(wrapper , "component-minus")
    expect(minusBtn.length).toBe(1)
})

test("initial state must be zero" , ()=>{
    const wrraper = setup()
    const textComponent = findByTestAttr(wrraper , "component-display")
    const text = textComponent.text()
    expect(text).toContain("0")
})

test("simulate click function" , ()=>{
    const wrapper = setup()
    const button = findByTestAttr(wrapper , "component-btn")
    button.simulate("click")
    const textComponent = findByTestAttr(wrapper , "component-display")
    const text = textComponent.text()
    expect(text).toContain("1") 
})

test("check minus function works correctly" , ()=>{
    const wrapper = setup()
    const minusBtn = findByTestAttr(wrapper , "component-minus")
    wrapper.setState({counter : 5})
    minusBtn.simulate('click')
    const counter = wrapper.state("counter")
    expect(counter).toEqual(4)
})

test("Render error text after state goes under zero and hide error text after state is above zero" , ()=>{
    const wrraper = setup()
    const minusBtn = findByTestAttr(wrraper , "component-minus")
    const plusBtn = findByTestAttr(wrraper , "component-btn")
    let errorTxt = findByTestAttr(wrraper , "component-error")
    wrraper.setState({counter : 0})
    expect(errorTxt.length).toBe(0)
    minusBtn.simulate("click")
    expect(findByTestAttr(wrraper , "component-error").length).toBe(1)
    plusBtn.simulate('click')
    expect(findByTestAttr(wrraper , "component-error").length).toBe(0)
})
