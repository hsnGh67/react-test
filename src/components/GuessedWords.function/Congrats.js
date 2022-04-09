import React from "react"
import successContext from "../../contexts/successContext"
import languageContext from "../../contexts/languageContext"
import language from '../../language'

const { languageStrings , getStringByLanguage} = language

const Congrats = ()=>{
    const [lang] = languageContext.useLanguage()
    const [success] = successContext.useSuccess()

    if(!success) return null

    return(
        <div data-test="component-congrats">
            <p data-test="component-text">
                {
                    getStringByLanguage(lang , "congrats" , languageStrings)
                }
            </p>
        </div>
    )
}

export default Congrats