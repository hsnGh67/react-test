import React from "react";

const Congrats = props =>{
    if(props.success)
        return(
            <div data-test="component-congrats">
                <span className="alert alert-success">
                    Congrats !!!
                </span>
            </div>
        )
    return(
        <></>
    )
}

export default Congrats