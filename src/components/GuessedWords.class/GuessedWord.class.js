import { Component } from "react"
import { connect } from "react-redux"
import Congrats from "./Congrats"
import InputClass from "./Input.class"

class GuessedWord extends Component{
    render(){
        return(
            <div className="container d-flex justify-content-center mt-5">
                <Congrats
                    success={this.props.guessedReducer.success}
                />
                <InputClass/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {...state}
}

export default connect(mapStateToProps , {})(GuessedWord)