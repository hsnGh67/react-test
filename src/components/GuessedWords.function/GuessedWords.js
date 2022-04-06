import React from "react";
import languageHelper from "../../language"
import languageContext from "../../contexts/languageContext";

const { languageStrings , getStringByLanguage } = languageHelper
const GuessedWords = ()=>{
    const lang = React.useContext(languageContext)
    return(
        <div data-test="component-guessedWord">
            <h1 data-test="component-header">
                {
                    getStringByLanguage(lang, "guessedWords" , languageStrings)
                }
            </h1>
        </div>
    )
}

export default { GuessedWords }