import React from "react"
import Button from "@material-ui/core/Button"

import {LETS_GO, CONTINUE, SUBMIT} from "../../common/Constants"

class ContinueButton extends React.Component {
    constructor(props){
        super(props)
    }

    buttonText(page){
        switch(page) {
            case 'propertyType':
                return LETS_GO
            case 'propertyName':
                return CONTINUE
            case 'propertyAddress':
                return SUBMIT
            default:
                return LETS_GO
        }
    }
    
    render() {
        const {func} = this.props
        
        return(
            <div className="continue-wrap">
                <div className="continue-button">
                    <form>
                        <Button
                            name="continueButton"
                            // component={Link}
                            // to={this.state.routeTo}
                            // onClick={this.handleClick}
                            //onclick={this.props.func} 
                            onClick={func}
                            variant="contained" 
                            color="secondary">
                            
                            {this.buttonText()}
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContinueButton