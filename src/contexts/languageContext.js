import React, { useContext } from "react";

const languageContext = React.createContext('en')

const useLanguage = ()=>{
    const lang = useContext(languageContext)
    
    if(!lang){
        throw new Error("no access to languageContext")
    }

    return lang
}

const LanguageProvider = (props={})=>{
    const [lang , setLang] = React.useState("en")
    
    const value = React.useMemo(()=>[lang , setLang] , [lang])
    
    return(
        <languageContext.Provider value={value} {...props}/>
    )
}

export default {LanguageProvider , useLanguage}