import React from "react"
import Input from "./Input"
import Submit from "./Submit"

class InputContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <span>
                <Input/>
                <Submit/>              
            </span>
        )
    }
}

export default InputContainer