import React from "react";

const successContext = React.createContext(false)

const useSuccess = ()=>{
    const context = React.useContext(successContext)

    if(!context){
        throw new Error("success context can't find outside a provider")
    }
    
    return context
}

const successPropvider = (props={})=>{
    const [success , setSuccess] = React.useState(false)

    const value = React.useMemo(()=>[success , setSuccess] , [success])

    return <successContext.Provider value={value} {...props} />
}

export default {useSuccess , successPropvider}