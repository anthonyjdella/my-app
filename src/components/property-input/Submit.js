import React from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

import InputType from "./InputName"

class Submit extends React.Component {
    constructor(){
        super()
        this.state = {
            routeTo: "/start/1",
            buttonText: "Let's go"
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        this.setState({
            routeTo: "/start/1",
            buttonText: "Continue"
        })
    }
    
    render() {
        return(
            <div className="submit-wrap">
                <div className="submit-button">
                    <form>
                        <Button
                            name="propertyName"
                            component={Link}
                            to={this.state.routeTo}
                            onClick={this.handleClick} 
                            variant="contained" 
                            color="secondary">
                            {this.state.buttonText}
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Submit