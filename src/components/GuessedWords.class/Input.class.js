import { Component } from "react";
import { connect } from "react-redux";
import { submitWord } from "../../store/action/gussedWords.action"

export class UnconnectedInput extends Component{

    state = {
        currentGuessedWord : ""
    }

    onSubmit = (e)=>{
        e.preventDefault()
        this.props.submitWord(this.state.currentGuessedWord)
        this.setState({currentGuessedWord : ""})
    }

    render(){
        return(
            <form 
                className="form-inline p-5"
            >
                <input
                    placeholder="guess a word"
                    value={this.state.currentGuessedWord}
                    onChange={e=>this.setState({currentGuessedWord : e.target.value})}
                />
                <button 
                    data-test="component-button"
                    className="ms-2"
                    onClick={this.onSubmit}
                >
                    submit
                </button>
            </form>
        )
    }
}

const mapStateToProps = state =>{
    return{
        success : state.guessedReducer.success
    }
}
export default connect(mapStateToProps , {submitWord})(UnconnectedInput)