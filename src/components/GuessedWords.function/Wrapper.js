import React from "react";
import actions from "../../actions"
import InputComponent from "./Input";

const initialState = {
    secretWord : ""
}

const reducer = (state=initialState , action)=>{
    switch(action.type){
        case "setSecretWord":
            return{...state , secretWord : action.data}
        default :
            return state
    }
}

const { Input } = InputComponent

const Wrapper = ()=>{
    const [state , dispatch] = React.useReducer(reducer , initialState)
    React.useEffect(()=>{
        actions.getSecretWord(dispatch)
    },[])

    return(
        <div data-test="component-wrapper">
            <Input/>
        </div>
    )
}

export default {Wrapper}