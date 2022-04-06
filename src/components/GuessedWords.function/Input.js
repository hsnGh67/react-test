import React from "react";

const Input = ()=>{
    return(
        <form className="form-inline m-5">
            <input
                data-test="component-input"
                className="me-2"
            />
            <button data-test="component-submit">
                Submit
            </button>
        </form>
    )
}

export default {Input}