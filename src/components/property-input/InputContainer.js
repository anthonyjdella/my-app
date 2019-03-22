import React from "react"
import { Route, BrowserRouter, Redirect } from "react-router-dom"

import "./PropertyInput.css"

import InputName from "./InputName"
import InputType from "./InputType"
import Submit from "./Submit"

class InputContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <section className="property-description-container">
                <span>
                    <div className="input-container">
                        <BrowserRouter>
                            <Route path="/start/0" component={InputType}/>    
                            <Route path="/start/1" component={InputName} />
                            <Route path="/start/2"  />       
                            {/* <Submit/> */}
                        </BrowserRouter>
                    </div>
                </span>
            </section>
        )
    }
}

export default InputContainer