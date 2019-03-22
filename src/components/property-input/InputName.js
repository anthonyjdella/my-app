import React from "react"
import { Typography, TextField } from "@material-ui/core"

import Submit from "./Submit"
import "./PropertyInput.css"

class InputName extends React.Component {
   
    constructor() {
        super()
        this.state={
            propertyName:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    render() {
        return(
            <div className="property-input">
                <Typography 
                    variant="h4"
                    style={{
                        paddingBottom: '60px'
                    }}
                    color="textPrimary">
                    What's the name of this property?
                </Typography>
                <div className="property-name-form">
                    <form autoComplete="off">
                        <TextField
                            name="propertyName"
                            value={this.state.propertyName}
                            onChange={this.handleChange}
                            label="Property Name"
                            placeholder="123 Main Street"
                            variant="outlined"
                            margin="normal"
                            autoCorrect="off"
                            autoComplete="off"
                            spellCheck="off"
                        />
                    </form>
                </div>
                <Submit/>
            </div>
        )
    }
}

export default InputName