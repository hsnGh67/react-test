import React from "react";
import langHelper from "../../language"
import languageContext from "../../contexts/languageContext";

const { getStringByLanguage , languageStrings } = langHelper
const Input = ()=>{
    const [lang] = languageContext.useLanguage()
    console.warn("lang" , lang)
    return(
        <form className="form-inline m-5">
            <input
                data-test="component-input"
                className="me-2"
            />
            <button data-test="component-submit">
                {
                    getStringByLanguage(lang , "submit" , languageStrings)
                }
            </button>
        </form>
    )
}

export default {Input}