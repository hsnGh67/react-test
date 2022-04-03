import { connect } from "react-redux"

const GuessedWord = ()=>{
    return<>
        Guessed Word
    </>
}

const mapStateToProps = state =>{
    return {...state}
}

export default connect(mapStateToProps , {})(GuessedWord)