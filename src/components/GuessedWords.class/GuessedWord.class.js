import { Component } from "react"
import { connect } from "react-redux"
import InputClass from "./Input.class"

class GuessedWord extends Component{
    render(){
        return(
            <>
                <InputClass/>
            </>
        )
    }
}

const mapStateToProps = state =>{
    return {...state}
}

export default connect(mapStateToProps , {})(GuessedWord)