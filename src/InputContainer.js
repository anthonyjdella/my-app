import React from "react"
import Input from "./Input"
import Submit from "./Submit"

class InputContainer extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Input/>
                <Submit/>              
            </div>
        )
    }
}

export default InputContainer