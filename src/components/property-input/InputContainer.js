import React from "react"
import InputName from "./InputName"
import { Route, NavLink, HashRouter } from "react-router-dom"
import Submit from "./Submit"
import "./PropertyInput.css"

class InputContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <span>
                <div className="input-container">
                    <InputName/>
                    <Submit/>
                </div>
            </span>
        )
    }
}

export default InputContainer