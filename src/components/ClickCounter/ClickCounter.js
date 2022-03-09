import React , {Component} from "react"
import classes from "./ClickCounter.module.css"

class ClickCounter extends Component{
    state={
        counter : 0
    }

    incrementCounter = ()=>{
        this.setState({
            counter : this.state.counter + 1
        })
    }

    minusCounter = ()=>{
        this.setState({
            counter : this.state.counter - 1
        })
    }

    render(){
        return(
            <div 
                data-test="component-container"
                className={classes.container}
            >
                <h1 data-test="component-display">
                    {
                        `Current display is ${this.state.counter}`
                    }
                </h1>
                <button
                    data-test="component-btn"
                    onClick={this.incrementCounter}
                >
                    Increment
                </button>
                <button
                    data-test="component-minus"
                    onClick={this.minusCounter}
                    style={{marginTop : "15px"}}
                >
                    Decrement
                </button>
                {
                    this.state.counter < 0 &&
                    <p 
                        style={{color : "red" , textAlign : "center"}}
                        data-test="component-error"
                    >
                        Counter amount is under zero
                    </p>
                }
            </div>
        )
    }
}

export default ClickCounter