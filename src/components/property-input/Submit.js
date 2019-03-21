import React from "react"
import Button from "@material-ui/core/Button"

class Submit extends React.Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {

    }
    
    render() {
        return(
            <div className="submit-wrap">
                <div className="submit-button">
                    <form>
                        <Button
                            name="propertyName"
                            onClick={this.handleClick} 
                            variant="contained" 
                            color="secondary">
                            Let's go
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Submit